const User = require("../models/Users");

module.exports = dummyUser = async (req, res, next) => {
  req.user = await User.findOne({ where: { id: 1 } });
  next();
};
