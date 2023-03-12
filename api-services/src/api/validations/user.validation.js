const { body, param, query } = require('express-validator');

module.exports = {
  // GET /v1/users
  listUsers: [
    query('page', 'Page is required')
      .exists()
      .toInt(),
    query('limit', 'Limit is required')
      .exists()
      .toInt(),
  ],

  // POST /v1/users
  createUser: [
    body('email', 'Invalid email').isEmail(),
    body('password', 'Passwords must be at least 8 chars long').isLength({
      min: 8,
    }),
  ],

  // PATCH /v1/users/:userId
  updateRole: [
    body('roleId', 'Invalid role id').isInt(),
    param('userId', 'User id is required').exists(),
  ],

  detail: [
    param('userId', 'User id is required')
      .exists()
      .isInt(),
  ],
};
