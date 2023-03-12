/* eslint-disable no-restricted-syntax */
const httpStatus = require('http-status');
const Sentry = require('@sentry/node');

/**
 * Change sequelize validation errors
 */
const formValidation = (err, req, res, next) => {
  if (
    err.name === 'SequelizeValidationError' ||
    err.name === 'SequelizeUniqueConstraintError'
  ) {
    const errors = {};

    for (const error of err.errors) {
      errors[error.path] = error.message;
    }

    return res.status(400).json({ name: err.name, errors });
  }
  return next(err);
};

/**
 * Catch invalid token error
 */
const invalidToken = (err, req, res, next) => {
  if (err.name !== 'UnauthorizedError') return next(err);
  const message =
    err.message === 'jwt expired' ? 'Token has been expired' : 'Invalid token';
  return res.status(httpStatus.UNAUTHORIZED).json({ message });
};

/**
 * Unexpected errors handler
 */
const other = (err, req, res, next) => {
  const resStatus = err.status || 500;

  const response = {
    message: resStatus !== 500 ? 'unauthorized' : 'internal server error',
    name: err.name,
    errors: err.index,
    stack: err.stack,
  };

  console.error(err);

  if (process.env.NODE_ENV === 'production') {
    Sentry.captureException(err);
    delete response.stack;
  }

  res.status(resStatus).json(response);
};

module.exports = [formValidation, invalidToken, other];
