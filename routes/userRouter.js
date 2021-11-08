const router = require("express").Router();

const UserController = require("../controllers/UserController");

router
  .route("/")
  .get(UserController.getAllUsers)
  .post(UserController.createUser);

router
  .route("/:id")
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = router;
