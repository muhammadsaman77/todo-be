const jwt = require("jsonwebtoken");

const AuthMiddleware = async (req, res, next) => {
  const bearerAuth = req.headers.authorization;
  if (typeof bearerAuth !== "undefined") {
    const bearer = bearerAuth.split(" ");
    const token = bearer[1];
    req.token = token;
    jwt.verify(token, "sh7a8wj", function (err, decoded) {
      if (err) {
        return res.status(401).json({
          message: "unauthorized",
        });
      }
      return next();
    });
  }
};

module.exports = AuthMiddleware;
