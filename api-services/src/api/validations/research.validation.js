const { body, query, param } = require('express-validator');

module.exports = {
  // POST /v1/research
  createResearch: [
    body('typeId', 'Invalid typeId')
      .exists({ checkFalsy: true })
      .isInt(),
    body('progressCategoryId', 'Invalid progressCategoryId')
      .exists({ checkFalsy: true })
      .isInt(),
    body('categoryId', 'Invalid categoryId')
      .exists({ checkFalsy: true })
      .isInt(),
    body('title', 'no title').exists({ checkFalsy: true }),
    body('description', 'no description').exists({ checkFalsy: true }),
    body('startDate', 'no startDate').exists({ checkFalsy: true }),
    body('dueDate', 'no dueDate').exists({ checkFalsy: true }),
    body('cover', 'no cover').exists(),
    body('costEstimation', 'no costEstimation').exists({ checkFalsy: true }),
    body('collaborators', 'no collaborators')
      .exists({ checkFalsy: true })
      .isArray(),
    body('evidences', 'no evidences')
      .exists({ checkFalsy: true })
      .isArray(),
  ],

  // POST /v1/research/collaborator
  inviteCollaborator: [
    body('researchId', 'Invalid researchId')
      .exists({ checkFalsy: true })
      .isInt(),
    body('userId', 'Invalid userId')
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

  editCover: [
    body('cover', 'no cover').exists({ checkFalsy: true }),
    param('id', 'id is required').exists(),
  ],

  updateProgress: [
    body('title', 'no title').exists({ checkFalsy: true }),
    body('description', 'no description').exists({ checkFalsy: true }),
    body('researchId', 'no researchId')
      .exists({ checkFalsy: true })
      .isInt(),
    body('evidences', 'no evidences')
      .exists({ checkFalsy: true })
      .isArray(),
  ],

  remove: [param('id', 'id is required').exists()],

  updateResearch: [
    body('typeId', 'Invalid typeId')
      .exists({ checkFalsy: true })
      .isInt(),
    body('progressCategoryId', 'Invalid progressCategoryId')
      .exists({ checkFalsy: true })
      .isInt(),
    body('categoryId', 'Invalid categoryId')
      .exists({ checkFalsy: true })
      .isInt(),
    body('title', 'no title').exists({ checkFalsy: true }),
    body('description', 'no description').exists({ checkFalsy: true }),
    body('startDate', 'no startDate').exists({ checkFalsy: true }),
    body('dueDate', 'no dueDate').exists({ checkFalsy: true }),
    body('cover', 'no cover').exists({ checkFalsy: true }),
    body('costEstimation', 'no costEstimation').exists({ checkFalsy: true }),
    param('id', 'id is required').exists(),
  ],

  finishResearch: [
    body('finish', 'no finish')
      .exists()
      .isBoolean(),
    body('stop', 'no stop')
      .exists()
      .isBoolean(),
    body('researchId', 'no researchId')
      .exists()
      .isInt(),
    body('note', 'no note').exists(),
  ],
};
