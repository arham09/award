const { body, query, param } = require('express-validator');

module.exports = {
  // POST /v1/paper
  createPaper: [
    body('publisherId', 'no publisherId')
      .exists({ checkFalsy: true })
      .isInt(),
    body('publisherStatusId', 'no publisherStatusId')
      .exists({ checkFalsy: true })
      .isInt(),
    body('title', 'no title').exists({ checkFalsy: true }),
    body('description', 'no description').exists({ checkFalsy: true }),
    body('macroImpact', 'no macroImpact').exists({ checkFalsy: true }),
    body('year', 'no year').exists({ checkFalsy: true }),
    body('mainAuthor', 'no mainAuthor').exists({ checkFalsy: true }),
    body('author', 'no author').exists({ checkFalsy: true }),
    body('paperLink', 'no paperLink').exists(),
    body('downloadLink', 'no downloadLink').exists(),
    body('documentLink', 'no documentLink').exists(),
    body('collaborators', 'no collaborators')
      .exists({ checkFalsy: true })
      .isArray(),
  ],

  approvePaper: [
    body('isApprove', 'no isApprove')
      .exists()
      .isBoolean(),
    body('paperId', 'no paperId')
      .exists({ checkFalsy: true })
      .isInt(),
  ],

  list: [
    query('page', 'Page is required')
      .exists()
      .toInt(),
    query('limit', 'Limit is required')
      .exists()
      .toInt(),
  ],

  remove: [param('id', 'id is required').exists()],

  update: [
    body('publisherId', 'no publisherId')
      .exists({ checkFalsy: true })
      .isInt(),
    body('title', 'no title').exists({ checkFalsy: true }),
    body('description', 'no description').exists({ checkFalsy: true }),
    body('macroImpact', 'no macroImpact').exists({ checkFalsy: true }),
    body('year', 'no year').exists({ checkFalsy: true }),
    body('mainAuthor', 'no mainAuthor').exists({ checkFalsy: true }),
    body('author', 'no author').exists({ checkFalsy: true }),
    body('paperLink', 'no paperLink').exists(),
    body('downloadLink', 'no downloadLink').exists(),
    body('documentLink', 'no documentLink').exists(),
    param('id', 'id is required').exists(),
  ],
};
