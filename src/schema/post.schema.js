import Joi from 'joi';

const createPostSchema = Joi.object({
  user_id: Joi.string().required(),
  author: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().optional()
})


const updatePostSchema = Joi.object({
  user_id: Joi.string().optional(),
  author: Joi.string().optional(),
  title: Joi.string().optional(),
  description: Joi.string().optional()
})

export { createPostSchema, updatePostSchema };