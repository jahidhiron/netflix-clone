// external imports
const router = require("express").Router();

// internal imports
const authGaurd = require("../middlewares/authGaurd");
const {
  addList,
  deleteList,
  getList,
} = require("../controllers/listController");

// CREATE
router.post("/", authGaurd, addList);

// DELETE
router.delete("/:id", authGaurd, deleteList);

// GET
router.get("/", getList);

module.exports = router;
