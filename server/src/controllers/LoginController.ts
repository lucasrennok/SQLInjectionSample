import {Request, Response} from 'express';

import db from '../database/connection';

export default class LoginController{
    async index(request: Request, response: Response){
        const query = request.query;

        const username = query.username as string;
        const password = query.password as string;
        
        // WITHOUT SQL INJECTION
        // let connectionAccepted = await db('login')
        //     .where('login.username','=', username)
        //     .where('login.password', '=', password);

        // WITH SQL INJECTION
        const selectSearch = `select * from login where username = '${username}' and password = '${password}'`
        let connectionAccepted = []
        try{
            connectionAccepted = await db.raw(selectSearch);
        }catch(er){
            connectionAccepted = []
        }

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