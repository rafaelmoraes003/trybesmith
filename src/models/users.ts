import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IUser, ILoginUser } from '../types/users';

class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public findUser = async (loginUserData: ILoginUser): Promise<IUser> => {
    const { username, password } = loginUserData;
    const [[findUser]] = await this.connection
      .execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );
    const user = findUser as IUser;
    return user;
  };

  public create = async (user: IUser): Promise<void> => {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
  };
}

export default UserModel;