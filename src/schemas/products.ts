import joi from 'joi';

export const productsSchema = joi.object({
  name: joi.string().required(),
  amount: joi.string().required(),
});

export const obj = {};