import React from 'react';
import { Link } from 'react-router-dom';

import onlineIcon from '../icons/onlineIcon.png'
import closeIcon from '../icons/closeIcon.png'

interface Props {
    room: string,
    logOut: (React.MouseEventHandler<HTMLImageElement>)
}

export function InfoBar({ room, logOut }: Props): JSX.Element {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online icon" />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <div>
                    <img onClick={logOut} src={closeIcon} alt="close icon"/>
                </div>
            </div>
        </div>
    );
}
