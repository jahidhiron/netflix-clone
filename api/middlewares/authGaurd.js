// external imports
const jwt = require("jsonwebtoken");

const authGaurd = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        res.status(401).json({
          message: "Authentication failure !",
        });
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({
      message: "You are not authenticated !",
    });
  }
};

module.exports = authGaurd;
