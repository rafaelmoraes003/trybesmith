import { Request, Response } from 'express';
import OrdersService from '../services/orders';
import { CustomRequest } from '../types/interfaces';

class OrdersController {
  ordersService = new OrdersService();

  public listAll = async (_req: Request, res: Response) => {
    const { code, data } = await this.ordersService.listAll();
    return res.status(code).json(data);
  };

  public create = async (req: CustomRequest, res: Response) => {
    const { userId } = req;
    const { productsIds } = req.body;
    
    const { code, data, error } = await this.ordersService.create(userId as number, productsIds);
    if (error) {
      return res.status(code).json({ message: error });
    }
    return res.status(code).json(data);
  };
}

export default OrdersController;