const { body } = require('express-validator');

module.exports = {
  // POST /v1/users
  requestApproval: [
    body('requestId', 'No requestId')
      .exists()
      .isInt(),
    body('approved', 'No approved')
      .exists()
      .isBoolean(),
    body('note', 'No note').exists(),
  ],

  requestFinish: [
    body('researchId', 'No researchId')
      .exists()
      .isInt(),
  ],
};
