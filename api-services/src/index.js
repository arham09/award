Promise = require('bluebird'); // eslint-disable-line no-global-assign
const conf = require('./config/vars');
const app = require('./config/express');

app.listen(conf.PORT, () =>
  console.info(`Server started on port ${conf.PORT} (${conf.NODE_ENV})`),
);

/**
 * Exports express
 * @public
 */
module.exports = app;
