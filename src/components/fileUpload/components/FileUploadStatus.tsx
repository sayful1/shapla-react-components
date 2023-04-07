import React, {FC, ReactNode, useEffect, useState} from 'react';
import {FileObjectInterfaces} from "../helper/interfaces";
import * as utils from "../helper/utils";

interface Props {
    file: FileObjectInterfaces;
    showCancell: boolean;
    cancel?: (file: FileObjectInterfaces) => void;
    children?: ReactNode;
}

const FileUploadStatus: FC<Props> = ({file, showCancell = true, cancel, children}) => {
    const [isInProgress, setIsInProgress] = useState<boolean>(false);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [canCancel, setCanCancel] = useState<boolean>(false);
    const [fillClass, setFillClass] = useState<string[]>([]);
    const [timeRemaining, setTimeRemaining] = useState<number>(0);

    useEffect(() => {
        const inProgress = !file.finished && !file.failed && !file.cancelled;
        setIsInProgress(inProgress);
    }, [file]);
    useEffect(() => {
        const p = !!(file.progress && file.progress === 100 && file.finished)
        setIsProcessing(p);
    }, [file]);
    useEffect(() => {
        const canCancel = !!(file.cancelled && file.finished && !isInProgress);
        setCanCancel(canCancel);
    }, [file, isInProgress]);
    useEffect(() => {
        const classes = ["shapla-file-uploader-file__progress-line"];
        if (file.finished) classes.push("is-finished");
        if (file.failed || file.cancelled) classes.push("is-failed");
        setFillClass(classes);
    }, [file]);
    useEffect(() => {
        const minutes = Math.floor(file.secondsRemaining / 60);
        const seconds = file.secondsRemaining - minutes * 60;
        const timeRemaining = utils.pad.left("00", minutes) + ":" + utils.pad.left("00", seconds);
        setTimeRemaining(Number(timeRemaining));
    }, [file.secondsRemaining]);


    return (

        <div className="shapla-file-uploader-file">
            <div className={fillClass.join(" ")} style={{width: file.progress + '%'}}/>

            <div className="shapla-file-uploader-file__content">
                <div className="shapla-file-uploader-file__title">
                    {file.file.name}
                </div>
                {
                    isInProgress && (
                        <div className="shapla-file-uploader-file__progress">
                            <div className="shapla-file-uploader-file__percentage">
                                {file.progress}%
                            </div>
                            <div className="shapla-file-uploader-file__separator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M7.8 10c0 1.215 0.986 2.2 2.201 2.2s2.199-0.986 2.199-2.2c0-1.215-0.984-2.199-2.199-2.199s-2.201 0.984-2.201 2.199z"
                                    />
                                </svg>
                            </div>
                            <div className="shapla-file-uploader-file__time-remaining">
                                Time remaining: {timeRemaining}
                            </div>
                        </div>)
                }
            </div>
            <div className="shapla-file-uploader-file__spacer"/>

            <div className="shapla-file-uploader-file__status">
                {file.failed && <span>Failed</span>}
                {file.finished && <span>Complete</span>}
                {file.cancelled && <span>Cancelled</span>}
                {isProcessing && <span>Processing</span>}
            </div>

            <div className="shapla-file-uploader-file__actions">
                                 {(!children && canCancel && showCancell) ?(
                                    <a
                                        href="#"
                                        className="shapla-file-uploader-file__action-cancel"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            cancel && cancel(file);
                                        }}
                                    >
                                        Cancel
                                    </a>):<>{children}</>
                                }

            </div>
        </div>
    );
};
export default FileUploadStatus