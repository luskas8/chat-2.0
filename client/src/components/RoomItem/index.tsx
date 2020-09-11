import React, { Dispatch, SetStateAction } from 'react'

import './styles.css';

interface Room{
    roomName: string;
    click: Dispatch<SetStateAction<string>>;
}

const RoomItem: React.FC<Room> = ({ roomName, click }) => {
    return (
        <div className="room">
            <div className="logo">
                <span>G</span>
            </div>
            <div className="room-info">
                <span>{roomName}</span>
                <button className="join" onClick={() => click(roomName)}>Juntar-se</button>
            </div>
        </div>
    )
}

export default RoomItem;