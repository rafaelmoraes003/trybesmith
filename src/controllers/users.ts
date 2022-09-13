import { Request, Response } from 'express';
import UserService from '../services/users';
import { IUserBody } from '../types/interfaces';

class UserController {
  userService = new UserService();

  public create = async (req: Request<unknown, unknown, IUserBody>, res: Response) => {
    const { username, classe, level, password } = req.body;
    const { code, token, error } = await this.userService.create({
      username,
      classe,
      level,
      password,
    });
    if (error) {
      return res.status(code).json({ message: error });
    }
    return res.status(code).json({ token });
  };
}

export default UserController;