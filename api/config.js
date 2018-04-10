module.exports = {
  postgres: {
    endpoint: process.env.POSTGRES_ENDPOINT,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
};
