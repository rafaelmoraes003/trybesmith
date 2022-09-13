import joi from 'joi';

const userSchema = joi.object({
  username: joi.string().required(),
  classe: joi.string().required(),
  level: joi.number().required(),
  password: joi.string().required(),
});

export default userSchema;