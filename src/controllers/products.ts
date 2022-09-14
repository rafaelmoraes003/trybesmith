import { Request, Response } from 'express';
import ProductsService from '../services/products';
import { IProducts } from '../types/products';

class ProductsController {
  productsService = new ProductsService();

  public listAll = async (_req: Request, res: Response) => {
    const { code, data } = await this.productsService.listAll();
    return res.status(code).json(data);
  };

  public create = async (req: Request<unknown, unknown, IProducts>, res: Response) => {
    const { name, amount } = req.body;
    const { code, data, error } = await this.productsService.create({ name, amount });
    if (error) {
      return res.status(code).json({ message: error });
    }
    return res.status(code).json(data);
  };
}

export default ProductsController;