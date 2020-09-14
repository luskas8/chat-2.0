import io from 'socket.io-client';

const socket = io('http://localhost:3333');
socket.on('connect', () => console.log("[IO] Connect => New connection has been start."));

export default socket;