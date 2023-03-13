const router = require('express').Router();
const validate = require('../../validations/handler');
const controller = require('../../controllers/award.controller');
const rules = require('../../validations/award.validation');

/**
 * @api {get} v1/awards
 * @apiDescription To get awards list
 * @apiVersion 1.0.0
 * @apiName Awards List
 * @apiGroup Awards
 * @apiPermission public
 * 
 * @apiHeader {String} Authorization User's access token
 * 
 * @apiParam  {Number[]}    typeId           typeIds for filtering award by type
 * @apiParam  {Number}      minPoint         minPoint for point needed
 * @apiParam  {Number}      maxPoint         max point for point needed
 * @apiParam  {Number}      limit            limit data
 * @apiParam  {String}      page             page of list
 *
 * @apiSuccess (Success 200) {Object[]}     data                   Data
 * @apiSuccess (Success 200) {Number}       data.title             title of award
 * @apiSuccess (Success 200) {Number}       data.point             point needed for awards
 * @apiSuccess (Success 200) {String}       data.imageUrl          image link for awards cover
 * @apiSuccess (Success 200) {Number}       data.awardType         award types
 * @apiSuccess (Success 200) {Number}       total                  total all data
 * @apiSuccess (Success 200) {String}       limit                  limit of current data
 * @apiSuccess (Success 200) {Number}       page                   curent page
 * @apiSuccess (Success 200) {String}       pages                  all pages
 *
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *      {
 *           "data": [
 *               {
 *                   "id": 1,
 *                   "title": "Vouchers Bersama",
 *                   "point": "1.000",
 *                   "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU",
 *                   "awardType": "Vouchers"
 *               },
 *               {
 *                   "id": 2,
 *                   "title": "Vouchers Sendiri",
 *                   "point": "5.000",
 *                   "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU",
 *                   "awardType": "Vouchers"
 *               },
 *               {
 *                   "id": 5,
 *                   "title": "Buy 1 Get 1",
 *                   "point": "7.000",
 *                   "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU",
 *                   "awardType": "Products"
 *               },
 *               {
 *                   "id": 6,
 *                   "title": "Buy 2 Get 1",
 *                   "point": "1.000",
 *                   "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU",
 *                   "awardType": "Products"
 *               }
 *           ],
 *           "total": 4,
 *           "limit": 5,
 *           "page": 1,
 *           "pages": 1
 *       }
 *
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 * @apiError (Unauthorized 401)  Unauthorized    Invalid token
 */
router.route('/').get(validate(rules.listAwards), controller.getAwards);

/**
 * @api {get} v1/awards/type
 * @apiDescription To get awards type
 * @apiVersion 1.0.0
 * @apiName Awards Type
 * @apiGroup Awards
 * @apiPermission public
 * 
 * @apiHeader {String} Authorization User's access token
 *
 * @apiSuccess (Success 200) {Object[]}     data                    Data
 * @apiSuccess (Success 200) {Number}       data.id                 id of award types
 * @apiSuccess (Success 200) {Number}       data.code               code of award types
 * @apiSuccess (Success 200) {String}       data.name               name of award types
 *
 * @apiSuccessExample {json} Success-Example
 *     HTTP/1.1 200 OK
 *      {
 *          "data": [
 *                      {
 *                          "id": 1,
 *                          "code": 1,
 *                          "name": "Vouchers"
 *                      },
 *                      {
 *                          "id": 2,
 *                          "code": 2,
 *                          "name": "Products"
 *                      },
 *                      {
 *                          "id": 3,
 *                          "code": 3,
 *                          "name": "Giftcard"
 *                      }
 *                   ]
 *       }
 *
 *
 * @apiError (Unauthorized 401)  Unauthorized    Invalid token
 */
router.route('/types').get(controller.getAwardTypes);

module.exports = router;
