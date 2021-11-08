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
    const createdUser = await User.create(body);
    res.status(201).json({
      success: true,
      message: "User Created",
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
    const { id } = req.params;
    const user = User.findOne({ where: { id } });
    res
      .status(200)
      .json({ success: true, message: `Get User with id ${id}`, data: user });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    const userToFind = await User.findOne({ where: { id } });
    if (!userToFind) {
      return res.status(200).json({
        success: false,
        message: `There is no user with id ${id}`,
      });
    }
    await User.update(body, {
      where: { id },
    });
    const updatedUser = await User.findOne({ where: { id } });

    res.status(200).json({
      success: true,
      message: `User with id ${id} Updated`,
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userToFind = await User.findOne({ where: { id } });
    console.log(userToFind);
    if (!userToFind)
      return res.status(200).json({
        success: false,
        message: `Cannot find user with id ${id}`,
      });
    await User.destroy({ where: { id } });

    res.status(200).json({
      success: true,
      message: `User with id ${id} destroyed`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
