const { body, param } = require('express-validator');

module.exports = {
  approval: [
    body('approved', 'No approved')
      .exists()
      .isBoolean(),
    body('notificationId', 'No notificationId')
      .exists()
      .isInt(),
    param('id', 'id is required').exists(),
  ],

  remove: [
    body('userId', 'No userId')
      .exists()
      .isInt(),
    body('researchId', 'No researchId')
      .exists()
      .isInt(),
  ],
};
