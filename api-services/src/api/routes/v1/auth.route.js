const router = require('express').Router();
const validate = require('../../validations/handler');
const controller = require('../../controllers/auth.controller');
const rules = require('../../validations/auth.validation');

/**
 * @api {post} v1/auth/login/sso Login SSO Telkom
 * @apiDescription Get an accessToken
 * @apiVersion 1.0.0
 * @apiName Login SSO
 * @apiGroup Auth
 * @apiPermission public
 *
 * @apiParam  {String}  username  User's email
 * @apiParam  {String}  password  User's password
 *
 * @apiSuccess (Success 200) {String}  data.accessToken     Access Token's type
 * @apiSuccess (Success 200) {String}  data.refreshToken    Token to get a new accessToken
 *                                                          after expiration time
 *
 * @apiSuccess (Success 200) {String}  data.user.fullName        User's name
 * @apiSuccess (Success 200) {String}  data.user.profilePicture  User's profile picture
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *      {
 *          "data": {
 *              "accessToken": "eausadnajsdnl12312elk1m",
 *              "refreshToken": "123jkndajsdnakjdn",
 *              "user": {
 *                  "fullName": "ALFA PUTRA",
 *                  "profilePicture": ""
 *                  }
 *              }
 *      }
 *
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 * @apiError (Unauthorized 401)  Unauthorized     Incorrect email or password
 */
router.route('/login').post(validate(rules.login), controller.login);

module.exports = router;
