const httpStatus = require('http-status');
const { users } = require('../models');
const {
  generateRefreshToken,
  generateAccessToken,
} = require('../services/tokenGenerator');

/**
 * Generate response with refresh and auth tokens
 * @private
 */
const authResponse = async (req, res, next) => {
  try {
    const accessToken = generateAccessToken(req.user);

    const refreshToken = generateRefreshToken(req.user);

    res.json({
      data: {
        accessToken,
        refreshToken: refreshToken.token,
        user: {
          id: req.user.id,
          name: req.user.fullName,
          profilePicture: req.user.profilePicture,
        },
      },
    });
  } catch (e) {
    next(e);
  }
};

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

/**
 * @public
 */
exports.login = [
  async (req, res, next) => {
    try {
      const { email } = req.body;

      if (!validateEmail(email)) {
        return res.status(httpStatus.BAD_REQUEST).json({
          message: 'not valid email',
        });
      }

      const user = await users.findOne({
        where: { email },
      });

      if (!user) {
        return res.status(httpStatus.UNAUTHORIZED).json({
          message: 'email is not registered',
        });
      }

      req.user = user;
      return next();
    } catch (error) {
      return next(error);
    }
  },
  authResponse,
];
