import React, {useEffect, useState} from 'react';
import {FileObjectInterfaces} from "../helper/interfaces";
import * as utils from "../helper/utils";

const FilesUploadStatus = ({files}: { files: FileObjectInterfaces[] }) => {

    const [overallProgress, setOverallProgress] = useState<number>(0);
    const [secTimeRemaining, setSecTimeRemaining] = useState<number>(0);
    const [timeRemaining, setTimeRemaining] = useState<number>(0);
    const [undoneFiles, setUndoneFiles] = useState<FileObjectInterfaces[]>([]);
    const [showFilesUploadStatus] = useState<boolean>(files.length > 1);
    useEffect(() => {
        const f = files.filter((file) => !(file.finished || file.cancelled));
        setUndoneFiles(f);
    }, files);

    useEffect(() => {
        const _unfinishedFiles = undoneFiles;
        let totalProgress = 0;
        if (_unfinishedFiles.length === 0)
            setOverallProgress(0);
        _unfinishedFiles.forEach((file) => totalProgress += file.progress);
        setOverallProgress(Math.round(totalProgress / _unfinishedFiles.length) || 0);
    }, [undoneFiles]);

    useEffect(() => {
        let secondsRemaining = 0;
        undoneFiles.forEach(
            (file) => secondsRemaining += file.secondsRemaining
        );
        setSecTimeRemaining(secondsRemaining);
    }, [undoneFiles]);

    useEffect(() => {
        const minutes = Math.floor(secTimeRemaining / 60);
        const
            seconds = secTimeRemaining - minutes * 60;
        const timeRemaining = utils.pad.left("00", minutes) + ":" + utils.pad.left("00", seconds);
        setTimeRemaining(Number(timeRemaining));
    }, [secTimeRemaining]);


    return (
        <>
            {
                showFilesUploadStatus && (

                    <div className="shapla-file-uploader-status">
                        <ul className="shapla-file-uploader-status__items">
                            <li className="shapla-file-uploader-status__item">
                                Files: {files.length}
                            </li>
                            <li className="shapla-file-uploader-status__item">
                                Percentage: {overallProgress}%
                            </li>
                            <li className="shapla-file-uploader-status__item">
                                Time remaining: {timeRemaining}
                            </li>
                        </ul>
                    </div>
                )
            }
        </>
    );
};

export default FilesUploadStatus;