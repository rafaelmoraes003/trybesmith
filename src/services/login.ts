import jwt from 'jsonwebtoken';
import UserModel from '../models/users';
import { StatusCode } from '../types/interfaces';
import { ILoginUser, IUserAuth, IUser } from '../types/users';
import connection from '../models/connection';
import loginSchema from '../schemas/login';

const JWT_SECRET = 'supersecretpassword';

class LoginService {
  userModel = new UserModel(connection);

  public login = async (user: ILoginUser): Promise<IUserAuth> => {
    const { error } = loginSchema.validate(user);
    if (error) {
      return { code: StatusCode.BAD_REQUEST, error: error.details[0].message };
    }

    const userData: IUser = await this.userModel.findUser(user);
    
    if (!userData) {
      return { code: StatusCode.UNAUTHORIZED, error: 'Username or password invalid' };
    }
    const token: string = jwt.sign({ id: userData.id, ...user }, JWT_SECRET);
    return { code: StatusCode.OK, token };
  };
}

export default LoginService;