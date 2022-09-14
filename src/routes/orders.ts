import { Router } from 'express';
import OrdersController from '../controllers/orders';

const orders = Router();
const ordersController = new OrdersController();

orders.get('/', ordersController.listAll);

export default orders;