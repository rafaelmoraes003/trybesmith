import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export enum StatusCode {
  OK = 200,
  CREATED = 201,
  SUCCESS_NO_RESPONSE = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  SEMANTIC_ERROR = 422,
  SERVER_ERROR = 500,
}

/// ////////////// RESPONSE /////////////////////////////////

export interface CustomRequest extends Request {
  userId?: number;
}

/// ////////////// JWT /////////////////////////////////

export interface IJWT extends JwtPayload {
  id: number,
}