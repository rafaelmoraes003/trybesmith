import { Router } from 'express';
import OrdersController from '../controllers/orders';
import auth from '../middlewares/auth';

const orders = Router();
const ordersController = new OrdersController();

orders.get('/', ordersController.listAll);

orders.use(auth);

orders.post('/', ordersController.create);

export default orders;