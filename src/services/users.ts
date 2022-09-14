import jwt from 'jsonwebtoken';
import UserModel from '../models/users';
import connection from '../models/connection';
import { IUser, IUserAuth } from '../types/users';
import userSchema from '../schemas/users';
import { StatusCode } from '../types/interfaces';

const JWT_SECRET = 'supersecretpassword';

class UserService {
  userModel = new UserModel(connection);

  public create = async (user: IUser): Promise<IUserAuth> => {
    const { error } = userSchema.validate(user);
    
    if (error) {
      const errorMessage: string = error.details[0].message;
      const status: StatusCode = errorMessage.includes('required') 
        ? StatusCode.BAD_REQUEST
        : StatusCode.SEMANTIC_ERROR;
      return { code: status, error: errorMessage };
    }
    await this.userModel.create(user);
    const token: string = jwt.sign(user, JWT_SECRET);
    return { code: StatusCode.CREATED, token };
  };
}

export default UserService;