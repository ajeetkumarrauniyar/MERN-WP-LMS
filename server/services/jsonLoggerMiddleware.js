// Log the incoming JSON data (Middleware)
const jsonLoggerMiddleware = (req, res, next) => {
  console.log("Incoming JSON data:", req.body);
  next();
};

module.exports = jsonLoggerMiddleware;
