const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("shop", "root", "Ghaieth1602", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
