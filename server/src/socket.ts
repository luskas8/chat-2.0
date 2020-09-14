import { Server, Socket as iSocket } from 'socket.io';
import cripto from 'crypto';
import { users, Message, User, messages } from './routes';

class Socket {
    isInside(id: string, room: string) {
        let userInRoom = 0;
        users.forEach(user => {
                            (user.id === id && user.room === room) && ++userInRoom;
                        });
        return userInRoom > 0;
    }

    botMessage(room: string, user: string) {
        const message_id = cripto.randomBytes(4).toString('hex');
        const newMessage: Message = { id: '111', message_id, message: `Bem-Vindo ${user}`, room };
        messages.push(newMessage);
        return newMessage;
    }

    onConnection(io: Server, socket: iSocket) {
        socket.on('joinRoom', (data: User) => {
            if (this.isInside(data.id, data.room)) return;
            // When client join in a room its called
            console.log(`[IO] Join romm: ${data.room}`);
            const user: User = data;
            
            users.push(user);
            socket.join(user.room);

            // The system emits a welcome message to the room where the user had entered
            const sysMessage = this.botMessage(user.room, user.username);
            console.log(`[IO] Mensagem do Sistema: ${sysMessage}`);

            io.sockets.in(user.room).emit(`chat.newConnection.${user.room}`, sysMessage);
        })

        socket.on('chat.message', data => {
            const newMessage: Message = data;
            messages.push(newMessage);
            console.log(newMessage);
            io.sockets.in(newMessage.room).emit(`chat.send.${newMessage.room}`, newMessage);
        });
    
        // Disconnection warning
        socket.on('disconnect', () => {
            console.log('[IO] Disconnect => Success disconnection.');
        })
    }
};

export default Socket;