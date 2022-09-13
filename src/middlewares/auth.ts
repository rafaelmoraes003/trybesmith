import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'supersecretpassword';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  try {
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default auth;