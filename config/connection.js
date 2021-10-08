// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');
const dbConfig = require("../config/db.config.js");
require('dotenv').config();

// Create connection to our database, pass in your MySQL information for username and password
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
 sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
 
});
}

module.exports = sequelize;