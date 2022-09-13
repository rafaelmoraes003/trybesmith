import ProductsModel from '../models/products';
import connection from '../models/connection';
import productsSchema from '../schemas/products';
import { IProducts, IProductsBody, ProductsServiceData, StatusCode } from '../types/interfaces';

class ProductsService {
  productsModel = new ProductsModel(connection);

  public listAll = async (): Promise<ProductsServiceData> => {
    const products: IProducts[] = await this.productsModel.listAll();
    return { code: StatusCode.OK, data: products };
  };

  public create = async (product: IProductsBody): Promise<ProductsServiceData> => {
    const { error } = productsSchema.validate(product);
    if (error) {
      return { code: StatusCode.BAD_REQUEST, error: error.details[0].message };
    }
    const newProduct: IProducts = await this.productsModel.create(product);
    return { code: StatusCode.CREATED, data: newProduct };
  };
}

export default ProductsService;