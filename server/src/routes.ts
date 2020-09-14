import express, { Request, Response } from 'express';
import cripto from 'crypto';

const routes = express.Router();

export interface User {
    id: string;
    username: string;
    room: string;
}

export interface Message {
    id: string;
    message_id: string;
    message: string;
    room: string;
}

export var users: Array<User> = [];
export var messages: Array<Message> = [];

routes.get('/', (request: Request, response: Response) => {
    response.json({message: "Olá"});
});

routes.post('/message', (request: Request, response: Response) => {
    response.set('Access-Control-Allow-Origin', '*');

    const id = cripto.randomBytes(4).toString('hex');
    return response.status(200).json({id});
});

export default routes;