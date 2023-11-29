const { validatorHandler } = require('./validator.handler');
const { logErrors, asyncHandler, errorHandler, boomErrorHandler } = require('./error.handler');

module.exports = {
  logErrors,
  asyncHandler,
  errorHandler,
  boomErrorHandler,
  validatorHandler
};
