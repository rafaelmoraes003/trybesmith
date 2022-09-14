import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrders } from '../types/interfaces';

class OrdersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public listAll = async (): Promise<IOrders[]> => {
    const [orders] = await this.connection.execute<RowDataPacket[]>(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS p
      ON p.orderId = o.id
      GROUP BY o.id
      ORDER BY o.userId`,
    );
    return orders as IOrders[];
  };
}

export default OrdersModel;