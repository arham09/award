const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const { ApiError } = require('../utils/customErrors/baseError');

const invalidToken = {
  message: 'Invalid token',
  status: httpStatus.UNAUTHORIZED,
};

const noPermissions = {
  message: 'Access denied',
  status: httpStatus.FORBIDDEN,
};

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.SECRET_STRING, (err, user) => {
      if (err) {
        return next(new ApiError(invalidToken));
      }

      req.userId = user.id;
      req.userName = user.name;
      next();
    });
  } else {
    return next(new ApiError(noPermissions));
  }
};
