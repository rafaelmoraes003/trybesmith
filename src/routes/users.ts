import { Router } from 'express';
import UserController from '../controllers/users';

const users = Router();
const userController = new UserController();

users.post('/', userController.create);

export default users;