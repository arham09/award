const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const httpStatus = require('http-status');
const passport = require('passport');
const routes = require('../api/routes/v1');
const config = require('./vars');
const errorHandler = require('../api/middlewares/errorHandler');
const strategies = require('./passport');

/**
 * Express instance
 * @public
 */
const app = express();

// request logging. dev: console | production: file
app.use(morgan(config.logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// enable authentication
app.use(passport.initialize());
passport.use('local', strategies.local);
passport.use('jwt', strategies.jwt);

// serving files
app.use('/files', express.static('files'));

// mount api v1 routes
app.use('/v1', routes);

// mount errors handlers
app.use(errorHandler);

//  handle 404 page
app.use((req, res) => res.status(httpStatus.NOT_FOUND).send('Not found'));

module.exports = app;
