import {Request, Response} from 'express';

import db from '../database/connection';

export default class LoginController{
    async index(request: Request, response: Response){
        const query = request.query;

        const username = query.username;
        const password = query.password;

        const connectionAccepted = await db('login')
            .where('login.username','=', username as string)
            .where('login.password', '=', password as string);

        if(connectionAccepted[0]==undefined){
            console.log('failed');
            return response.json({"success": 0});
        }
        console.log('logged');
        return response.json({"success": 1});
    }
    
    async create(request: Request, response: Response) {
        const{
            username,
            password
        } = request.body;
    
        const trx = await db.transaction()

        try{
            await trx('login').insert({
                username,
                password,
            });
    
            await trx.commit();
    
            return response.status(201).send();
        }catch(err){
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            });
        }

        
    }
}