const router = require('express').Router();
// const validate = require('../../validations/handler');
const controller = require('../../controllers/award.controller');
// const rules = require('../../validations/auth.validation');

router.route('/').get(controller.getAwards);
router.route('/types').get(controller.getAwardTypes);

module.exports = router;
