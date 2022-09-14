import connection from '../models/connection';
import ProductsModel from '../models/products';

const verifyProductsIds = async (productsIds: number[]): Promise<boolean> => {
  const productsModel = new ProductsModel(connection);
  const validateProductsIds: boolean = await productsModel.verifyProducts(productsIds);
  return validateProductsIds;
};

export default verifyProductsIds;