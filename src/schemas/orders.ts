import joi from 'joi';

const productsIdsSchema = joi.object({
  productsIds: joi
    .array()
    .items(joi.number().strict())
    .min(1)
    .messages({ 'array.min': '"productsIds" must include only numbers' })
    .required(),
});

export default productsIdsSchema;
