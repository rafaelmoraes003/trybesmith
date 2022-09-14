import OrdersModel from '../models/orders';
import connection from '../models/connection';
import { StatusCode } from '../types/interfaces';
import { IOrders } from '../types/orders';
import { IServiceResponse } from '../types/serviceResponse';
import productsIdsSchema from '../schemas/orders';
import updateProducts from '../helpers/updateProducts';
import verifyProductsIds from '../helpers/verifyProductsIds';

class OrdersService {
  ordersModel = new OrdersModel(connection);

  public listAll = async (): Promise<IServiceResponse<IOrders[]>> => {
    const orders: IOrders[] = await this.ordersModel.listAll();
    return { code: StatusCode.OK, data: orders };
  };

  public create = async (
    userId: number, 
    productsIds: number[],
  ): Promise<IServiceResponse<IOrders>> => {
    const { error } = productsIdsSchema.validate({ productsIds });
    if (error) {
      const errorMessage: string = error.details[0].message;
      const status: StatusCode = errorMessage.includes('required')
        ? StatusCode.BAD_REQUEST
        : StatusCode.SEMANTIC_ERROR;
      return { code: status, error: errorMessage };
    }

    const validateProductsIds: boolean = await verifyProductsIds(productsIds);
    if (!validateProductsIds) {
      return { code: StatusCode.BAD_REQUEST, error: 'Invalid productId' };
    }

    const orderId: number = await this.ordersModel.create(userId);
    await updateProducts(orderId, productsIds);

    return { code: StatusCode.CREATED, data: { userId, productsIds } };
  };
}

export default OrdersService;