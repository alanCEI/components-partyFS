const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: err.message || "Ha ocurrido un error inesperado en el servidor.",
  });
};

export default errorHandler;
