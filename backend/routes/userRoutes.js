const express = require("express");
const router = express.Router();
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require("../controllers/userController.js");
const {
  bearerAuthorization,
  admin,
} = require("../middleware/authMiddleware.js");

router.route("/").post(registerUser).get(bearerAuthorization, admin, getUsers);
router.post("/login", authUser);

router
  .route("/profile")
  .get(bearerAuthorization, getUserProfile)
  .put(bearerAuthorization, updateUserProfile);
router
  .route("/:id")
  .delete(bearerAuthorization, admin, deleteUser)
  .get(bearerAuthorization, admin, getUserById)
  .put(bearerAuthorization, admin, updateUser);

module.exports = router;
