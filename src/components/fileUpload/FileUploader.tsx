import React, {FC, useRef, useState} from 'react';
import {FileObjectInterfaces} from "./helper/interfaces";
import utils from "./helper/utils";
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
    onSuccess?: (response: any) => void;
    onFail?: (response: any) => void;
}
const FileUploader :FC<Props> = ({
                                     url,
                                     method = 'POST',
                                     paramName = 'file',
                                     textLineOne = 'Drag and drop your files here',
                                     textLineTwo = 'or',
                                     textButton = 'Select files',
                                     textMaxUploadLimit = 'Maximum upload limit reached',
                                     params = {},
                                     headers = {},
                                     showFileUploadStatus = true,
                                     showFilesUploadStatus = true,
                                     chunking = false,
                                     forceChunking = false,
                                     chunkSize = 1000000,
                                     onSuccess = () => {},
                                     onFail = () => {},
                                 }) => {



    return (
        <div>
            <input type="file" />
        </div>
    );
};
export default FileUploader;