import { StatusCode } from './interfaces';

export interface IUser {
  id?: number,
  username: string,
  classe: string,
  level: number
  password: string,
}

export interface ILoginUser {
  username: string,
  password: string,
}

export interface IUserAuth {
  code: StatusCode,
  token?: string,
  error?: string,
} 