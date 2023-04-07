import {
    ArgsInterface,
    FileObjectInterfaces,
    SuccessResponseInterface,
} from "./interfaces";

const pad = {
    left(pad: string, string: string | number) {
        return this.pad(pad, string, true);
    },
    right(pad: string, string: string | number) {
        return this.pad(pad, string, false);
    },
    pad(pad: string, string: string | number | undefined, left: boolean) {
        if (typeof string === "undefined") {
            return pad;
        }

        if (left) {
            return (pad + string).slice(-pad.length);
        }

        return (string + pad).substring(0, pad.length);
    },
};

/**
 * Calculate remaining time
 */
const timeRemaining = {
    averageSpeed: 0,
    _getMovingAverage(bytesBySecond: number): number {
        if (!this.averageSpeed) {
            this.averageSpeed = bytesBySecond;
        }

        return 0.005 * bytesBySecond + (1 - 0.005) * this.averageSpeed;
    },
    calculate(totalBytes: number, loadedBytes: number, timeStarted: number) {
        if (!totalBytes || !loadedBytes) {
            return 0;
        }

        const secondsElapsed = (new Date().getTime() - timeStarted) / 1000;
        const bytesBySecond = secondsElapsed ? loadedBytes / secondsElapsed : 0;

        return Math.ceil(
            (totalBytes - loadedBytes) / this._getMovingAverage(bytesBySecond)
        );
    },
};

/**
 * Get file Object
 */
const generateFileObject = (
    file: File,
    chunkSizeInBytes: number | null = null
): FileObjectInterfaces => {
    if (!chunkSizeInBytes) {
        chunkSizeInBytes = file.size;
    }
    const numberOfChunks = Math.ceil(file.size / chunkSizeInBytes);
    return {
        id: Date.now() + Math.floor(Math.random() * 100).toString(),
        file: file,
        totalChunks: numberOfChunks,
        chunkSize: chunkSizeInBytes,
        currentChunkIndex: 0,
        chunkCompleteStatus: {},
        progress: 0,
        loadedBytes: 0,
        totalBytes: 0,
        timeStarted: new Date().getTime(),
        secondsRemaining: 0,
        finished: false,
        cancelled: false,
        failed: false,
        xhr: null,
    };
};

/**
 * Update file upload progress
 *
 * @param {ProgressEvent} event
 * @param {FileObjectInterfaces} fileObject
 */
const updateChunkProgress = (
    event: ProgressEvent,
    fileObject: FileObjectInterfaces
) => {
    if (event.lengthComputable) {
        const chunkPercentComplete = Math.round((event.loaded / event.total) * 100);
        const totalPercentComplete = Math.round(
            (fileObject.currentChunkIndex / fileObject.totalChunks) * 100 +
            chunkPercentComplete / fileObject.totalChunks
        );

        fileObject.chunkCompleteStatus[fileObject.currentChunkIndex] = {
            loaded: event.loaded,
            total: event.total,
        };

        let loaded = 0,
            total = 0;
        for (const status in fileObject.chunkCompleteStatus) {
            const value = fileObject.chunkCompleteStatus[status];
            loaded += value.loaded;
            total += value.total;
        }

        fileObject.loadedBytes = loaded;
        fileObject.totalBytes = total;
        fileObject.progress = totalPercentComplete;
        if (0 === totalPercentComplete % 5 || 0 === fileObject.secondsRemaining) {
            fileObject.secondsRemaining = timeRemaining.calculate(
                fileObject.file.size,
                fileObject.loadedBytes,
                fileObject.timeStarted
            );
        }
    }
};

const onUploaded = (fileObject: FileObjectInterfaces, xhr: XMLHttpRequest) => {
    return new Promise<SuccessResponseInterface>((resolve, reject) => {
        const contentType = xhr.getResponseHeader("Content-Type"),
            isJsonResponse =
                contentType && contentType.indexOf("application/json") !== -1,
            response = isJsonResponse
                ? JSON.parse(xhr.responseText)
                : xhr.responseText;

        if (xhr.status >= 200 && xhr.status < 300) {
            fileObject.finished = true;
            resolve({ data: response, status: xhr.status });
        } else {
            fileObject.failed = true;
            reject({ error: response, status: xhr.status });
        }
    });
};

const updateProgress = (
    event: ProgressEvent,
    fileObject: FileObjectInterfaces
) => {
    if (event.lengthComputable) {
        fileObject.loadedBytes = event.loaded;
        fileObject.totalBytes = event.total;
        fileObject.progress = Math.ceil((event.loaded / event.total) * 100);

        fileObject.secondsRemaining = timeRemaining.calculate(
            fileObject.totalBytes,
            fileObject.loadedBytes,
            fileObject.timeStarted
        );
    }
};

const getFormData = (args: ArgsInterface, fileObject: FileObjectInterfaces) => {
    const formData = new FormData();
    formData.append(args.paramName, fileObject.file);

    const params = {
        ...args.params,
        name: fileObject.file.name,
    };

    for (const [key, value] of Object.entries(params)) {
        formData.append(key, value);
    }
    return formData;
};

const upload = (fileObject: FileObjectInterfaces, args: ArgsInterface) => {
    return new Promise<{ fileObject: FileObjectInterfaces; data: unknown }>(
        (resolve, reject) => {
            const formData = getFormData(args, fileObject);

            const xhr = new XMLHttpRequest();

            fileObject.xhr = xhr;

            xhr.upload.addEventListener("progress", (event) =>
                updateProgress(event, fileObject)
            );

            // Define what happens on successful data submission
            xhr.addEventListener("load", () => {
                onUploaded(fileObject, xhr)
                    .then((data) => {
                        resolve({ fileObject, data: data.data });
                    })
                    .catch((error) => {
                        reject({ fileObject, error: error.error });
                    });
            });

            xhr.addEventListener("error", () => {
                fileObject.failed = true;
                reject({ fileObject, error: "" });
            });

            xhr.open(args.method, args.url);

            const headers = { ...args.headers, Accept: "application/json" };
            for (const [headerName, headerValue] of Object.entries(headers)) {
                if (headerName && headerValue) {
                    xhr.setRequestHeader(headerName, headerValue);
                }
            }

            xhr.send(formData);
        }
    );
};

/**
 *
 * @param fileObject
 * @param {Number} start
 * @param {XMLHttpRequest} xhr
 * @returns {Promise<SuccessResponseInterface>}
 */
const onChunkUploaded = (
    fileObject: FileObjectInterfaces,
    start: number,
    xhr: XMLHttpRequest
) => {
    const contentType = xhr.getResponseHeader("Content-Type"),
        isJsonResponse =
            contentType && contentType.indexOf("application/json") !== -1,
        response = isJsonResponse ? JSON.parse(xhr.responseText) : xhr.responseText;

    return new Promise<SuccessResponseInterface>((resolve, reject) => {
        if (xhr.status >= 200 && xhr.status < 300) {
            //next chunk starts at + chunkSize from start
            start += fileObject.chunkSize;
            //if start is smaller than file size - we have more to still upload
            if (start < fileObject.file.size) {
                // Create the new chunk
                fileObject.currentChunkIndex++;
                resolve({ data: response, status: xhr.status, start: start });
            } else {
                fileObject.finished = true;
                resolve({ data: response, status: xhr.status });
            }
        } else {
            fileObject.failed = true;
            reject({ error: response, status: xhr.status });
        }
    });
};

const getChunkFormData = (
    args: ArgsInterface,
    chunk: Blob | File,
    fileObject: FileObjectInterfaces
) => {
    const chunkFormData = new FormData();
    chunkFormData.append(args.paramName, chunk, fileObject.file.name);

    const params = {
        ...args.params,
        chunk: fileObject.currentChunkIndex.toString(),
        chunks: fileObject.totalChunks.toString(),
        name: fileObject.file.name,
    };
    for (const [key, value] of Object.entries(params)) {
        chunkFormData.append(key, value);
    }
    return chunkFormData;
};

/**
 * Upload a chunk to server
 *
 * @param {Object} fileObject
 * @param {Number} start
 * @param {Object} args
 */
const uploadChunk = (
    fileObject: FileObjectInterfaces,
    start: number,
    args: ArgsInterface
) => {
    return new Promise<{ fileObject: FileObjectInterfaces; data: unknown }>(
        (resolve, reject) => {
            const chunkEnd = Math.min(
                start + fileObject.chunkSize,
                fileObject.file.size
            );
            const chunk = fileObject.file.slice(start, chunkEnd);

            const chunkFormData = getChunkFormData(args, chunk, fileObject);

            const xhr = new XMLHttpRequest();

            xhr.upload.addEventListener("progress", (event) =>
                updateChunkProgress(event, fileObject)
            );
            xhr.open(args.method, args.url, true);

            const headers = { ...args.headers, Accept: "application/json" };
            for (const [headerName, headerValue] of Object.entries(headers)) {
                if (headerName && headerValue) {
                    xhr.setRequestHeader(headerName, headerValue);
                }
            }

            const blobEnd = chunkEnd - 1;
            const contentRange =
                "bytes " + start + "-" + blobEnd + "/" + fileObject.file.size;
            xhr.setRequestHeader("Content-Range", contentRange);

            xhr.addEventListener("load", () => {
                onChunkUploaded(fileObject, start, xhr)
                    .then((data: SuccessResponseInterface) => {
                        if (data.start) {
                            uploadChunk(fileObject, data.start, args)
                                .then((_data) => resolve(_data))
                                .catch((_data) => reject(_data));
                        } else {
                            resolve({ fileObject, data: data.data });
                        }
                    })
                    .catch((error) => {
                        reject({ fileObject, error });
                    });
            });
            xhr.send(chunkFormData);
        }
    );
};

export {
    pad,
    timeRemaining,
    generateFileObject,
    uploadChunk,
    onUploaded,
    updateProgress,
    getFormData,
    upload,
};
