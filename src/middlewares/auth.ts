import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { CustomRequest, IJWT } from '../types/interfaces';

const JWT_SECRET = 'supersecretpassword';

const auth = (req: CustomRequest, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  try {
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const { id } = jwt.verify(token, JWT_SECRET) as IJWT;
    req.userId = id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default auth;