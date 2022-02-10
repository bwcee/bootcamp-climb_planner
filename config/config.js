require("dotenv").config();
const { DB_HOST, DB_USERNAME } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: null,
    database: 'climbing_dev',
    host: DB_HOST,
    dialect: 'postgres',
  },
};
