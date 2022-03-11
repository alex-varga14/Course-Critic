const dbConfig = require("../config/config.js");
const Sequelize  = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: 3306,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.courses = require("../models/course.model.js")(sequelize, Sequelize);

module.exports = db;
