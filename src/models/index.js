const dbConfig = require("../config/db");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.societies = require("../modules/societies/models/society")(
  sequelize,
  Sequelize
);
db.users = require("../modules/users/models/users")(sequelize, Sequelize);
db.societies.belongsToMany(db.users, { through: "societies_users" });
db.users.belongsToMany(db.societies, { through: "societies_users" });

module.exports = db;
