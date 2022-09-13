import jwt from 'jsonwebtoken';
import UserModel from '../models/users';
import connection from '../models/connection';
import { IUserBody, IUserCreated, StatusCode } from '../types/interfaces';
import userSchema from '../schemas/users';

const JWT_SECRET = 'supersecretpassword';

class UserService {
  userModel = new UserModel(connection);

  public create = async (user: IUserBody): Promise<IUserCreated> => {
    const { error } = userSchema.validate(user);
    if (error) {
      return { code: StatusCode.BAD_REQUEST, error: error.details[0].message };
    }
    await this.userModel.create(user);
    const token: string = jwt.sign(user, JWT_SECRET);
    return { code: StatusCode.CREATED, token };
  };
}

export default UserService;