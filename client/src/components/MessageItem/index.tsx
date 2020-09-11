import React from 'react'

import './styles.css';

interface MessageProps {
    value: string;
    author: string;
    name?: string;
}

const MessageItem: React.FC <MessageProps> = (props) => {
    return (
        <li className="message-item">
            <span className={props.author}>
                {props.value}
            </span>
        </li>
    );
}

export default MessageItem;