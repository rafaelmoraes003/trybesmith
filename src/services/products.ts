import ProductsModel from '../models/products';
import connection from '../models/connection';
import productsSchema from '../schemas/products';
import { IProducts } from '../types/products';
import { IServiceResponse } from '../types/serviceResponse';
import { StatusCode } from '../types/interfaces';

class ProductsService {
  productsModel = new ProductsModel(connection);

  public listAll = async (): Promise<IServiceResponse<IProducts[]>> => {
    const products: IProducts[] = await this.productsModel.listAll();
    return { code: StatusCode.OK, data: products };
  };

  public create = async (product: IProducts): Promise<IServiceResponse<IProducts>> => {
    const { error } = productsSchema.validate(product);
    if (error) {
      const errorMessage: string = error.details[0].message;
      const status: StatusCode = errorMessage.includes('required')
        ? StatusCode.BAD_REQUEST
        : StatusCode.SEMANTIC_ERROR;
      return { code: status, error: errorMessage };
    }
    const newProduct: IProducts = await this.productsModel.create(product);
    return { code: StatusCode.CREATED, data: newProduct };
  };
}

export default ProductsService;