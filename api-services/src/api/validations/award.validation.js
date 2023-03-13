const { query } = require('express-validator');

module.exports = {
  // GET /v1/awards
  listAwards: [
    query('page', 'Page is required')
      .exists()
      .toInt(),
    query('limit', 'Limit is required')
      .exists()
      .toInt(),
  ],
};
