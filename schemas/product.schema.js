const Joi = require('joi');

const category = Joi.object({
  id: Joi.number().integer().required()
})


const id = Joi.number().integer();
const name = Joi.string().min(3).max(100);
const price = Joi.number().precision(2).min(1);
const categories = Joi.array().items(category).min(1).max(10);

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  categories: categories.required()
});

const updateProductSchema = Joi.object({
  id: id.required(),
  name: name,
  price: price,
  categories: categories
});

module.exports = {
  createProductSchema,
  updateProductSchema
};
