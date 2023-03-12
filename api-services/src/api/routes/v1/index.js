const express = require('express');
const statusMonitor = require('express-status-monitor')();
// const passport = require('passport');
const awardRoutes = require('./award.route');
const authRoutes = require('./auth.route');
const authenticate = require('../../middlewares/authenticate');

const router = express.Router();
// const jwtAuth = passport.authenticate('jwt', { session: false });

/**
 * GET v1/status
 */
router.use(statusMonitor);

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));
router.use('/docs-examples', express.static('docs-examples'));

/**
 * v1/auth
 */
router.use('/auth', authRoutes);

/**
 * v1/auth
 */
router.use('/awards', authenticate, awardRoutes);

module.exports = router;
