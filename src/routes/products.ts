import { Router } from 'express';
import ProductsController from '../controllers/products';

const products = Router();
const productsController = new ProductsController();

products.post('/', productsController.create);

export default products;