import { Request, Response } from 'express';
import ProductsService from '../services/products';
import { IProductsBody } from '../types/interfaces';

class ProductsController {
  productsService = new ProductsService();

  public create = async (req: Request<unknown, unknown, IProductsBody>, res: Response) => {
    const { name, amount } = req.body;
    const { code, data, error } = await this.productsService.create({ name, amount });
    if (error) {
      return res.status(code).json({ message: error });
    }
    return res.status(code).json(data);
  };
}

export default ProductsController;