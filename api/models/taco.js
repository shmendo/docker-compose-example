const Promise = require('bluebird');
const config = require('../config');

const options = {
  promiseLib: Promise,
};

const pgp = require('pg-promise')(options);

const { endpoint, port, database, username, password } = config.postgres;
const connectionString = `postgres://${username}:${password}@${endpoint}:${port}/${database}`;
const db = pgp(connectionString);

const getAll = () => {
  return db.query('SELECT * FROM tacos ORDER BY id');
};

module.exports = {
  getAll,
};
