import express from 'express';
import https from 'http';
import socket from 'socket.io';
import cors from 'cors';
import routes from './routes';
import Socket from './socket';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
const server = https.createServer(app);

const io = socket(server);

// interface Message {
//     id: string;
//     message_id: string;
//     message: string;
// }

// // When a client connect on the server its called
io.on('connection', thisSocket => {
    // message confirming the success connection
    console.log('[IO] Connection => Nem connection.');

    const socket = new Socket();
    socket.onConnection(io, thisSocket);
});

// Control const for server HOST and PORT
const SERVER_HOST = 'localhost';
const SERVER_PORT = 3333;

server.listen(SERVER_PORT, SERVER_HOST, () => {
    // Server start proccess, with a self shortcut
    console.log(`[HTTP] Listen on http://${SERVER_HOST}:${SERVER_PORT}.`);
    console.log('[HTTP] Click CTRL + C to stop it');
});