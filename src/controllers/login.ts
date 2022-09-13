import { Request, Response } from 'express';
import LoginService from '../services/login';
import { ILogin } from '../types/interfaces';

class LoginController {
  loginService = new LoginService();

  public login = async (
    req: Request<unknown, unknown, ILogin>, 
    res: Response,
  ) => {
    const { username, password } = req.body;
    const { code, error, token } = await this.loginService.login({ username, password });
    if (error) {
      return res.status(code).json({ message: error });
    }
    return res.status(code).json({ token });
  };
}

export default LoginController;