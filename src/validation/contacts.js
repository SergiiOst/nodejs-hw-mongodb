import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().integer().min(6).max(16).required(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
  isFavourite: Joi.boolean(),
  userId: Joi.string().required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  email: Joi.string().email(),
  phoneNumber: Joi.string().integer().min(6).max(16),
  contactType: Joi.string().valid('work', 'home', 'personal'),
  isFavourite: Joi.boolean(),
});
