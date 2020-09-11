import express from 'express';
import http from 'http';
import routes from './routes';

const app = express();
app.use(routes);
const server = http.createServer(app);

// interface Message {
//     id: string;
//     message_id: string;
//     message: string;
// }

// // When a client connect on the server its called
// io.on('connection', socket => {
//     // message confirming the success connection
//     console.log('[IO] Connection => Nem connection.')

//     // When the client send the message-obj to server proccess its called
//     socket.on('chat.message', MessageController.message);

//     // Disconnection warning
//     socket.on('disconnect', () => {
//         console.log('[IO] Disconnect => Success disconnection.');
//     })
// });

// export function sendMessage(message: Message) {
//     io.emit('chat.message.sent', message)
// }

// Control const for server HOST and PORT
const SERVER_HOST = 'localhost';
const SERVER_PORT = 3333;

server.listen(SERVER_PORT, SERVER_HOST, () => {
    // Server start proccess, with a self shortcut
    console.log(`[HTTP] Listen on http://${SERVER_HOST}:${SERVER_PORT}.`);
    console.log('[HTTP] Click CTRL + C to stop it')
});