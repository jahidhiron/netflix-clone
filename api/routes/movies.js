// external imports
const router = require("express").Router();

// internal imports
const authGaurd = require("../middlewares/authGaurd");
const {
  addMove,
  updateMovie,
  deleteMovie,
  getMovies,
  getRandom,
  getMovie,
} = require("../controllers/movieController");

// CREATE
router.post("/", authGaurd, addMove);

// UPDATE
router.put("/:id", authGaurd, updateMovie);

// DELETE
router.delete("/:id", authGaurd, deleteMovie);

// GET ALL MOVIE
router.get("", getMovies);

// GET RANDOM
router.get("/random", getRandom);

// GET BY ID
router.get("/:id", getMovie);

module.exports = router;
