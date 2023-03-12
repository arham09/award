const env = require('../config/vars');

module.exports = {
  development: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
  },
  test: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: `${env.DB_DATABASE}_test`,
    host: env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: `${env.DB_DATABASE}_prod`,
    host: env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 20,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
  },
};
