export interface FileObjectInterfaces {
    id: string;
    file: File;
    totalChunks: number;
    chunkSize: number;
    currentChunkIndex: number;
    chunkCompleteStatus: Record<number, { loaded: number; total: number }>;
    progress: number;
    failed: boolean;
    loadedBytes: number;
    totalBytes: number;
    timeStarted: number;
    secondsRemaining: number;
    finished: boolean;
    cancelled: boolean;
    xhr: null | XMLHttpRequest;
}

export interface ArgsInterface {
    url: string;
    method: string;
    paramName: string;
    params: any;
    headers: any;
}

export interface SuccessResponseInterface {
    data: string;
    status: number;
    start?: number;
}

export interface ImageDataInterface {
    image_id: number;
    title: string;
    attachment_url: string;
}

// export {
//     FileObjectInterfaces,
//     SuccessResponseInterface,
//     ArgsInterface,
//     ImageDataInterface,
// };
