import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import productsRoute from './routes/products';
import usersRoute from './routes/users';
import { StatusCode } from './types/interfaces';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', usersRoute);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { message } = err;
  console.log(err);
  return res.status(StatusCode.SERVER_ERROR).json({ message });
});

export default app;
