import React, { FC, MouseEvent } from 'react';
import "../styles/StatusList.scss"

interface StatusInterface {
    key: string;
    label: string;
    count: number;
    active: boolean;
}

interface Props {
    statuses: StatusInterface[];
    type?: 'vertical' | 'horizontal';
    onChange: (status: StatusInterface) => void;
}

const StatusList: FC<Props> = ({ statuses = [], type = 'horizontal', onChange }) => {
    const handleClickEvent = (status: StatusInterface, event: MouseEvent) => {
        event.preventDefault();
        onChange(status);
    };

    return (
        <ul className={`shapla-status-list shapla-status-list--${type}`}>
            {statuses.map((status) => (
                <li
                    key={status.key}
                    className={`shapla-status-list__item ${status.active ? 'is-active' : ''}`}
                >
                    <a
                        href="#"
                        className="shapla-status-list__item-link"
                        onClick={(event) => handleClickEvent(status, event)}
                    >
                        <span className="shapla-status-list__item-label">{status.label}</span>
                        <span className="shapla-status-list__item-count">{status.count}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default StatusList;