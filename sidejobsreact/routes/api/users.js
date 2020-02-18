const router = require("express").Router();
const usersController = require("../../controllers/userController");

router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

router
  .route("/:id")
  // .get(usersController.findById)
  .get(usersController.userPosts)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;