// external imports
const router = require("express").Router();

// internal imports
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  getUserStats,
} = require("../controllers/userController");
const authGaurd = require("../middlewares/authGaurd");

// UPDATE
router.put("/:id", authGaurd, updateUser);

// DELETE
router.delete("/:id", authGaurd, deleteUser);

// GET USERS
router.get("/", authGaurd, getUsers);

// GET USER STATISTICS
router.get("/stats", authGaurd, getUserStats);

// GET USER
router.get("/:id", getUser);

module.exports = router;
