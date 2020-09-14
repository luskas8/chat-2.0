import React, { Dispatch, SetStateAction } from 'react'
import socket from '../../services/socket';

import './styles.css';

interface Room{
    roomName: string;
    click: Dispatch<SetStateAction<string>>;
}

const RoomItem: React.FC<Room> = ({ roomName, click }) => {
    const username = localStorage.getItem('user_name');
    const id = localStorage.getItem('user_id');
    function handleClick() {
        socket.emit('joinRoom', {id, username, room: roomName});
        click(roomName);
    }
    return (
        <div className="room">
            <div className="logo">
                <span>G</span>
            </div>
            <div className="room-info">
                <span>{roomName}</span>
                <button className="join" onClick={handleClick}>Juntar-se</button>
            </div>
        </div>
    )
}

export default RoomItem;