const express = require('express');
const { products, categories } = require('../mocks');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json(categories);
});

router.get('/:categoryId/products', (req, res) => {
  const { categoryId } = req.params;
  const categoryProducts = products.filter(p => p.categories && p.categories.find(c => c.id === Number(categoryId)));
  res.status(200).json(categoryProducts);
});

module.exports = router;
