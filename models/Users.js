const Sequelize = require("sequelize");
const sequelize = require("../config/dataBase");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: { type: Sequelize.STRING, allowNull: false },
});

module.exports = User;
