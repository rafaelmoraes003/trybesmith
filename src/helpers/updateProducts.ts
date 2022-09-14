import ProductsModel from '../models/products';
import connection from '../models/connection';

const updateProducts = async (orderId: number, productsIds: number[]): Promise<void> => {
  const productsModel = new ProductsModel(connection);
  await Promise.all(productsIds.map((productId) => productsModel.update(productId, orderId)));
};

export default updateProducts;