const { Sequelize } = require("sequelize");
require("dotenv").config(); // npm i dotenv

//connect to db
//postgres://username:password@<hostname>:5432/dbname
const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
  })
  .finally();


Sequelize.define()