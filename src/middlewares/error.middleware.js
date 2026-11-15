const errorMiddleware = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  if (err.name === "ValidationError") {
    statusCode = 400;
    message = "Validation failed";

    const errors = Object.values(err.errors).map((error) => error.message);

    return res.status(statusCode).json({
      success: false,
      message,
      errors,
    });
  }

  /* Duplicate Email Error */
  if (err.code === 11000) {
    statusCode = 409;
    message = "Email already registered";
  }

  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorMiddleware;
