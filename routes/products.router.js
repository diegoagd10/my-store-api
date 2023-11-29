const express = require('express');
const { ProductService } = require('../services');
const { reviews } = require('../mocks');
const { asyncHandler, validatorHandler } = require('../middlewares');
const { createProductSchema } = require('../schemas/product.schema');

const router = express.Router();
const service = new ProductService();

router.get('/', asyncHandler(async (req, res) => {
  const { page = '1' } = req.query;
  const products = await service.list(Number(page));
  res.status(200).json(products);
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  if (product) {
    res.status(200).json(product);
    return;
  }
  res.status(404).json({ message: 'Product with id ${id} not found' });
}));

router.get('/:productId/reviews', asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const productReviews = reviews.filter(r => r.productId === Number(productId));
  res.status(200).json(productReviews);
}));

router.post('/', validatorHandler(createProductSchema, 'body'), asyncHandler(async (req, res) => {
  const product = req.body;
  const createdProduct = await service.create(product);
  res.status(201).json(createdProduct);
}));

router.put('/:id', asyncHandler(async (req, res) => {
  const product = req.body;
  const { id } = req.params;
  const updatedProduct = await service.update(Number(id), product);
  res.status(200).json(updatedProduct);
}));

router.patch('/:id', asyncHandler(async (req, res) => {
  const product = req.body;
  const { id } = req.params;
  const updatedProduct = await service.update(Number(id), product);
  res.status(200).json(updatedProduct);
}));

router.delete('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  await service.delete(Number(id));
  res.status(204).json();
}));

module.exports = router;
