const Sequelize = require("sequelize");
const sequelize = require("../config/dataBase");

const Product = sequelize.define("Product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  lib: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(5, 2),
    allowNull: false,
  },
  imageURL: { type: Sequelize.STRING },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
