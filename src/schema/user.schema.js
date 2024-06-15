import Joi from 'joi';

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
})

const updateUserSchema = Joi.object({
  name: Joi.string().optional(),
  username: Joi.string().optional(),
  email: Joi.string().optional(),
  password: Joi.string().optional()
})

export { createUserSchema, loginSchema, updateUserSchema };