const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    status: statusCode,
    message: err.message,
    errorStack: process.env.NODE_ENV === "development" ? err.stack : "",
  });
};

module.exports = globalErrorHandler;
