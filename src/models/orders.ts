import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IOrders } from '../types/orders';

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

  public create = async (userId: number): Promise<number> => {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    return insertId;
  };
}

export default OrdersModel;