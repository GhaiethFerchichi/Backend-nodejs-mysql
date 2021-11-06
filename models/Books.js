const Sequelize = require("sequelize");
const sequelize = require("../config/dataBase");

const Book = sequelize.define("book", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Book;
