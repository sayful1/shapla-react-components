import React, { FC, useRef, useState } from "react";
import { FileObjectInterfaces } from "./helper/interfaces";
import * as utils from "./helper/utils";
import FilesUploadStatus from "./components/FilesUploadStatus";
import FileUploadStatus from "./components/FileUploadStatus";
import "./fileUploader.scss";

interface Props {
  url: string;
  method?: string;
  paramName?: string;
  textLineOne?: string;
  textLineTwo?: string;
  textButton?: string;
  textMaxUploadLimit?: string;
  params?: object;
  headers?: object;
  showFileUploadStatus?: boolean;
  showFilesUploadStatus?: boolean;
  chunking?: boolean;
  forceChunking?: boolean;
  chunkSize?: number;
  onSuccess?: (response: unknown) => void;
  onFail?: (response: unknown) => void;
}

const FileUploader: FC<Props> = ({
  url,
  method = "POST",
  paramName = "file",
  textLineOne = "Drag and drop your files here",
  textLineTwo = "or",
  textButton = "Select files",
  textMaxUploadLimit = "Maximum upload limit reached",
  params = {},
  headers = {},
  showFileUploadStatus = true,
  showFilesUploadStatus = true,
  chunking = false,
  chunkSize,
  onSuccess,
  onFail,
}) => {
  const input = useRef<HTMLInputElement>(null);
  const inputId = "shapla-file-uploader__input" + Date.now();
  const [files, setFiles] = useState<FileObjectInterfaces[]>([]);
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const generateFileObject = (file: File) => {
    const fileObject = utils.generateFileObject(
      file,
      chunking ? chunkSize : null
    );
    // const totalFiles = files.push(fileObject);
    setFiles([...files, fileObject]);

    return files[files.length - 1];
  };
  const addFiles = (files: FileList) => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i] as File;

      const args = {
        url: url,
        method: method,
        paramName: paramName,
        params: params,
        headers: headers,
      };

      if (chunking) {
        utils
          .uploadChunk(generateFileObject(file), 0, args)
          .then((response) => {
            onSuccess && onSuccess(response.data);
          })
          .catch((response) => {
            onFail && onFail(response.error);
          });
      } else {
        utils
          .upload(generateFileObject(file), args)
          .then((response) => {
            onSuccess && onSuccess(response.data);
          })
          .catch((response) => {
            onFail && onFail(response.error);
          });
      }
    }
  };
  const select = () => {
    if (input.current?.files) {
      const list = input.current.files;
      if (list instanceof FileList) {
        addFiles(list);
      }
    }
  };

  const onCancelUpload = (file: FileObjectInterfaces) => {
    file.xhr?.abort();
    file.cancelled = true;
  };
  return (
    <div className="shapla-file-uploader-container">
      <div
        className={`shapla-file-uploader ${
          isDraggedOver ? "shapla-file-uploader--dragged" : ""
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDraggedOver(true);
        }}
        onDragEnter={(e) => {
          e.preventDefault();
          setIsDraggedOver(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDraggedOver(false);
        }}
        onDragEnd={(e) => {
          e.preventDefault();
          setIsDraggedOver(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setIsDraggedOver(false);
          const list = e.dataTransfer?.files;
          if (list instanceof FileList) {
            addFiles(list);
          }
        }}
      >
        <input
          id={inputId}
          ref={input}
          type="file"
          name="files[]"
          className="shapla-file-uploader__input"
          multiple
          onChange={select}
        />

        <div className="shapla-file-uploader-message">
          <div className="shapla-file-uploader-message__icon">
            <svg
              className="icon-plus"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z" />
            </svg>
          </div>
          <div className="shapla-file-uploader-message__drag">
            {textLineOne}
          </div>
          <div className="shapla-file-uploader-message__browse">
            {textLineTwo}
          </div>
          <label
            htmlFor={inputId}
            className="shapla-file-uploader-message__select-files shapla-button is-primary"
          >
            {textButton}
          </label>
          <div className="shapla-file-uploader-message__maxsize">
            {textMaxUploadLimit}
          </div>
        </div>
        {showFileUploadStatus && <FilesUploadStatus files={files} />}
      </div>
      {showFilesUploadStatus && (
        <div className="shapla-file-uploader-files">
          {files.map((file, index) => {
            return (
              <FileUploadStatus
                key={index}
                file={file}
                onCancel={() => onCancelUpload(file)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default FileUploader;
