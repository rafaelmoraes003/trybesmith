import { StatusCode } from './interfaces';

export interface IServiceResponse<Type> {
  code: StatusCode,
  data?: Type,
  error?: string,
  token?: string
}