const { Sequelize, DataTypes } = require("sequelize");

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

//modelname, attribute, options
 const UserModel = sequelize.define(
    "recruiters",
 {
     //attribute
     //id, firstName, lastName, createdAt, updatedAt
     firstName:{
         type: DataTypes.STRING, 
         allowNull:false,
     },
     lastName:{
        type: DataTypes.STRING, 
        allowNull:false,
     }
 },
 {
     //options
      freezeTableName:true  // => tablo ismini değiştirmeye gerek kalmıyor. Default olarak tablo ismini "sequelize" çogul olarak kullanıyor
 })

 module.exports = UserModel;