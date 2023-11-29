

const logErrors = (error, req, res, next) => {
  console.log(error);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    status: "SVC-0001"
  });
};

const boomErrorHandler = (error, req, res, next) => {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
    return;
  }
  next(error);
};

const asyncHandler = fn => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res)).catch(next);
  };
}

module.exports = {
  logErrors,
  errorHandler,
  asyncHandler,
  boomErrorHandler
};
