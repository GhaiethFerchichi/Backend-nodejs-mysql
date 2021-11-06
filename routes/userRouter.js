const router = require("express").Router();

const UserController = require("../controllers/userController");

router
  .route("/")
  .get(UserController.getAllUsers)
  .post(UserController.createUser);

module.exports = router;
