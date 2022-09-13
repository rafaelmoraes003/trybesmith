import { ResultSetHeader, Pool, RowDataPacket } from 'mysql2/promise';
import { IProducts, IProductsBody } from '../types/interfaces';

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

  public create = async (product: IProductsBody): Promise<IProducts> => {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, name, amount };
  };
}

export default ProductsModel;