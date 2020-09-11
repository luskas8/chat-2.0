import { Server } from 'socket.io';
import cripto from 'crypto';
import { sendMessage } from '../server';
import db from '../database/connection';

interface Message {
    id: string;
    message: string;
}

class MessegaController {
    async message(data: Message) {
        let message_id = cripto.randomBytes(4).toString("hex");

        // await db('messages').insert({
        //     id: message_id,
        //     user_id: data.id,
        //     message: data.message
        // });

        // Sending, the messege after be proccessed by the server, to every client connected.
        console.log(data.id);
        sendMessage({ id: data.id, message_id, message: data.message });
    }
}

export default MessegaController;