import React, { useState } from 'react';
import Chat from '../../components/Chat';
import RoomItem from '../../components/RoomItem';

import './styles.css';

function Dashboard() {
    const [room, setRoom] = useState('');

    return (
        <div className="dashboard-content">
            <div className="room-list">
                <RoomItem roomName="JS" click={setRoom}/>
                <RoomItem roomName="C#" click={setRoom}/>
                <RoomItem roomName="C" click={setRoom}/>
            </div>
            <div className="chat-box">
                { (room !== '') && <Chat roomName={room} /> }
            </div>
        </div>
    )
};

export default Dashboard;