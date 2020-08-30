import express from 'express';
import LoginController from './controllers/LoginController';

const routes = express.Router();
const loginController = new LoginController();

routes.get('/', loginController.index);
//routes.post('/', loginController.create);

export default routes;