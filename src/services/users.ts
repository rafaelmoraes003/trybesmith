import jwt from 'jsonwebtoken';
import UserModel from '../models/users';
import connection from '../models/connection';
import { IUserBody, IUserResponse, StatusCode } from '../types/interfaces';
import userSchema from '../schemas/users';

const JWT_SECRET = 'supersecretpassword';

class UserService {
  userModel = new UserModel(connection);

  public create = async (user: IUserBody): Promise<IUserResponse> => {
    const { error } = userSchema.validate(user);
    
    if (error) {
      const status = error.details[0].message.includes('required') 
        ? StatusCode.BAD_REQUEST
        : StatusCode.SEMANTIC_ERROR;
      return { code: status, error: error.details[0].message };
    }
    await this.userModel.create(user);
    const token: string = jwt.sign(user, JWT_SECRET);
    return { code: StatusCode.CREATED, token };
  };
}

export default UserService;