import React, { useState, FormEvent } from 'react';
// import io from 'socket.io-client';

import MessageItem from '../MessageItem';

import './styles.css';

// const socket = io('http://localhost:3333');
// socket.on('connect', () => console.log("[IO] Connect => New connection has been start."));

interface ChatProps {
    roomName: string;
}

const Chat: React.FC<ChatProps> = (props) => {
    const [message, setMessage] = useState('');
    const [messages, setMessagens] = useState([
        { id: '', message_id: '', message: ''}
    ]);

    interface NewMessage {
        id: string;
        message_id: string;
        message: string;
    }

    const handleNemMessage = (newMessage: NewMessage) => {
        setMessagens([...messages, newMessage]);
    }

    // socket.on('chat.message.sent', handleNemMessage);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if(message.trim()) {
            // socket.emit('chat.message', {
            //     id: myId,
            //     message
            // })
            // Return the input to empty for new messages
            setMessage('');
        }
    }
    return (
        <div className="chat-content">
            <div className="user-info">
                <span>{props.roomName}</span>
            </div>

            <div className="chat-box">
                <ul className="messages-list">
                    <MessageItem author="mine" value="Oi" key={0}/>
                    <MessageItem author="other" value="Olá" key={1}/>
                    <MessageItem author="mine" value="Xesque" key={2}/>
                    {/* {
                        messages.map(message => {
                            if (message.message_id) {
                                return <MessageItem
                                            key={message.message_id}
                                            author={(message.id === myId) ? "mine" : "other"}
                                            value={message.message}
                                        />
                            }
                            // eslint-disable-next-line
                            return;
                        })
                    } */}
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