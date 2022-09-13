import joi from 'joi';

const productsSchema = joi.object({
  name: joi.string().required(),
  amount: joi.string().required(),
});

export default productsSchema;