import { Request, Response } from 'express';
import db from '../database/connection';
import cripto from 'crypto';

class SessionsController {
    async create(request: Request, response: Response) {
        // const { username, password } =request.body;

        const id = cripto.randomBytes(4).toString("hex");

        return response.status(200).json(id);
    }
}

export default SessionsController;