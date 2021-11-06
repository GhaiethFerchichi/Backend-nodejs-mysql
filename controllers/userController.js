const User = require("../models/Users");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { body } = req;
    const createdUser = User.create(body);
    res.status(201).json({
      success: true,
      data: createdUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
