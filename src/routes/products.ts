import { Router } from 'express';
import ProductsController from '../controllers/products';

const products = Router();
const productsController = new ProductsController();

products.get('/', productsController.listAll);
products.post('/', productsController.create);

export default products;