import jwt from 'jsonwebtoken';
import UserModel from '../models/users';
import { ILogin, IUserResponse, StatusCode } from '../types/interfaces';
import connection from '../models/connection';
import loginSchema from '../schemas/login';

const JWT_SECRET = 'supersecretpassword';

class LoginService {
  userModel = new UserModel(connection);

  public login = async (user: ILogin): Promise<IUserResponse> => {
    const { error } = loginSchema.validate(user);
    if (error) {
      return { code: StatusCode.BAD_REQUEST, error: error.details[0].message };
    }
    if (!(await this.userModel.findUser(user))) {
      return { code: StatusCode.UNAUTHORIZED, error: 'Username or password invalid' };
    }
    const token = jwt.sign(user, JWT_SECRET);
    return { code: StatusCode.OK, token };
  };
}

export default LoginService;