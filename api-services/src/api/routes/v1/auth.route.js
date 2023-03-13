const router = require('express').Router();
const validate = require('../../validations/handler');
const controller = require('../../controllers/auth.controller');
const rules = require('../../validations/auth.validation');

/**
 * @api {post} v1/auth/login Login
 * @apiDescription Get an accessToken
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup Auth
 * @apiPermission public
 *
 * @apiParam  {String}  email  User's email
 *
 * @apiSuccess (Success 200) {String}  data.accessToken     Access Token's type
 * @apiSuccess (Success 200) {String}  data.refreshToken    Token to get a new accessToken
 *                                                          after expiration time
 *
 * @apiSuccess (Success 200) {Number}  data.user.id         User's id
 * @apiSuccess (Success 200) {String}  data.user.name       User's name
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *      {
 *          "data": {
 *              "accessToken": "eausadnajsdnl12312elk1m",
 *              "refreshToken": "123jkndajsdnakjdn",
 *              "user": {
 *                  "id": "1",
 *                  "name": "User Name"
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
