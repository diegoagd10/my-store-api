const express = require('express');
const { shoppingCarts } = require('../mocks');

const router = express.Router();

router.get('/:userId/shopping-carts', (req, res) => {
  const { userId } = req.params;
  const userShoppingCarts = shoppingCarts.filter(sc => sc.userId === Number(userId));
  res.status(200).json(userShoppingCarts);
});

module.exports = router;
