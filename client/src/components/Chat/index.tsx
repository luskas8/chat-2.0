import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import socket from '../../services/socket';

import MessageItem from '../MessageItem';

import './styles.css';

interface ChatProps {
    roomName: string;
}

const Chat: React.FC<ChatProps> = ({ roomName }) => {
    const id = localStorage.getItem('user_id');

    const [message, setMessage] = useState('');
    const [messages, setMessagens] = useState([
        { id: '', message_id: '', message: '', room: ''}
    ]);

    interface NewMessage {
        id: string;
        message_id: string;
        message: string;
        room: string;
    }

    const handleNemMessage = (newMessage: NewMessage) => {
        setMessagens([...messages, newMessage]);
    }

    socket.on(`chat.send.${roomName}`, (data: NewMessage) => {
        if (data.id !== id) {
            console.log("Chegou");
            handleNemMessage(data);
        }
    });

    socket.on(`chat.newConnection.${roomName}`, (data: NewMessage) => {
        // console.table(data);
        handleNemMessage(data);
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if(message.trim()) {
            const messagePromise = await api.post('message');
            const message_id = messagePromise.data.id;
            if (id) {
                const newMessage = { id, message_id, message , room: roomName}
                handleNemMessage(newMessage);
                socket.emit('chat.message', newMessage);
            }


            // Return the message input to empty for new messages
            setMessage('');
        }
    }
    return (
        <div className="chat-content">
            <div className="user-info">
                <span>{roomName}</span>
            </div>

            <div className="chat-box">
                <ul className="messages-list">
                    {
                        messages.map(message => {
                            if (message.message_id && message.room === roomName) {
                                return <MessageItem
                                            key={message.message_id}
                                            author={(message.id === '111') ? "system" : (message.id === id) ? "mine" : "other"}
                                            value={message.message}
                                        />
                            }
                            // eslint-disable-next-line
                            return;
                        })
                    }
                </ul>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="write-space">
                    <div className="input-block">
                        <input
                            type="text"
                            placeholder="Digite uma mensagem..."
                            value={message}
                            onChange={evt => {setMessage(evt.target.value)}}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
};

export default Chat;