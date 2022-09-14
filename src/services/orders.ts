import OrdersModel from '../models/orders';
import connection from '../models/connection';
import { IOrderResponse, IOrders, StatusCode } from '../types/interfaces';

class OrdersService {
  ordersModel = new OrdersModel(connection);

  public listAll = async (): Promise<IOrderResponse> => {
    const orders: IOrders[] = await this.ordersModel.listAll();
    return { code: StatusCode.OK, data: orders };
  };
}

export default OrdersService;