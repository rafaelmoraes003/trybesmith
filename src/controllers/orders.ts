import { Request, Response } from 'express';
import OrdersService from '../services/orders';

class OrdersController {
  ordersService = new OrdersService();

  public listAll = async (_req: Request, res: Response) => {
    const { code, data } = await this.ordersService.listAll();
    return res.status(code).json(data);
  };
}

export default OrdersController;