// internal imports
const Movie = require("../models/Movie");

const addMove = async (req, res, next) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);

    try {
      const movie = await newMovie.save();
      res.status(201).json(movie);
    } catch (err) {
      res.status(500).json({
        message: `Internal server error: ${err}`,
      });
    }
  } else {
    res.status(403).json({
      message: "You are not allowed !",
    });
  }
};

const updateMovie = async (req, res, next) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(201).json(updatedMovie);
    } catch (err) {
      res.status(500).json({
        message: "Internal server error !",
      });
    }
  } else {
    res.status(403).json({
      message: "You are not allowed !",
    });
  }
};

const deleteMovie = async (req, res, next) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(201).json("Movie has been deleted successfully !");
    } catch (err) {
      res.status(500).json({
        message: "Internal server error !",
      });
    }
  } else {
    res.status(403).json({
      message: "You are not allowed !",
    });
  }
};

const getMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({
      message: "Internal server error !",
    });
  }
};

const getRandom = async (req, res, next) => {
  const type = req.query.type;
  let movie;
  console.log("type " + type);

  try {
    if (type === "series") {
      console.log("ok");
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({
      message: "Internal server error !",
    });
  }
};

const getMovies = async (req, res, next) => {
  try {
    const movies = await (await Movie.find()).reverse();
    res.status(201).json(movies);
  } catch (err) {
    res.status(500).json({
      message: "Internal server error !",
    });
  }
};

module.exports = {
  addMove,
  updateMovie,
  deleteMovie,
  getMovies,
  getRandom,
  getMovie,
};
