const { body } = require('express-validator');
const emailNormalizeRules = require('../utils/emailNormalizeRules');

module.exports = {
  // POST /v1/auth/login
  login: [
    body('email', 'Email is invalid')
      .exists({ checkFalsy: true })
      .isEmail()
      .normalizeEmail(emailNormalizeRules),
  ],
};
