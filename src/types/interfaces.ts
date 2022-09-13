export interface IProductsBody {
  name: string,
  amount: string,
}

export interface IProducts extends IProductsBody {
  id: number,
  userId?: number | null,
}

export enum StatusCode {
  OK = 200,
  CREATED = 201,
  SUCCESS_NO_RESPONSE = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export interface ProductsServiceData {
  code: StatusCode,
  data?: IProducts | IProducts[],
  error?: string,
}