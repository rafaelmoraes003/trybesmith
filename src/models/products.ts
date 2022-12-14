import { ResultSetHeader, Pool, RowDataPacket, OkPacket } from 'mysql2/promise';
import { IProducts } from '../types/products';

class ProductsModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public listAll = async (): Promise<IProducts[]> => {
    const [products] = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
    return products as IProducts[];
  };

  public create = async (product: IProducts): Promise<IProducts> => {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, name, amount };
  };

  verifyProducts = async (productsIds: number[]): Promise<boolean> => {
    const [products] = await this.connection.execute<RowDataPacket[]>(
      `SELECT * FROM Trybesmith.Products WHERE id IN (${productsIds})`,
    );    
    return products.length === productsIds.length;
  };

  public update = async (productId: number, orderId: number): Promise<void> => {
    await this.connection.execute<OkPacket>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, productId],
    );
  };
}

export default ProductsModel;