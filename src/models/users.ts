import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUserBody } from '../types/interfaces';

class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: IUserBody): Promise<void> => {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
  };
}

export default UserModel;