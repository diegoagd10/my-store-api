const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const homeRouter = require('./home.router');

const routersApi = (application) => {
  application.use('/', homeRouter);

  const router = express.Router();
  router.use('/api/v1', router);
  router.use(`/products`, productsRouter);
  router.use(`/categories`, categoriesRouter);
  router.use(`/users`, usersRouter);

  application.use(router);
}

module.exports = routersApi;
