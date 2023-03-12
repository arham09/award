const { query, body } = require('express-validator');

module.exports = {
  list: [
    query('page', 'Page is required')
      .exists()
      .toInt(),
    query('limit', 'Limit is required')
      .exists()
      .toInt(),
  ],

  read: [
    body('read', 'No read')
      .exists()
      .isBoolean(),
    body('notificationIds', 'No notificationIds')
      .exists()
      .isArray(),
  ],
};
