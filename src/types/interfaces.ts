export enum StatusCode {
  OK = 200,
  CREATED = 201,
  SUCCESS_NO_RESPONSE = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

/// //////////// PRODUCTS ///////////////////////////////////
export interface IProductsBody {
  name: string,
  amount: string,
}

export interface IProducts extends IProductsBody {
  id: number,
  userId?: number | null,
}

export interface ProductsServiceData {
  code: StatusCode,
  data?: IProducts | IProducts[],
  error?: string,
}

/// ////////////// USERS /////////////////////////////////
export interface IUserBody {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface IUserCreated {
  code: StatusCode,
  token?: string,
  error?: string,
}