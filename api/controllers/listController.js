// internal imports
const List = require("../models/List");

const addList = async (req, res, next) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);

    try {
      const list = await newList.save();
      res.status(201).json(list);
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

const deleteList = async (req, res, next) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(201).json({
        message: "Movie has been deleted successfully",
      });
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

const getList = async (req, res, next) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];

  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $match: { type: typeQuery, genre: genreQuery } },
          { $sample: { size: 5 } },
        ]);
      } else {
        list = await List.aggregate([
          { $match: { type: typeQuery } },
          { $sample: { size: 5 } },
        ]);
      }
    } else {
      console.log("ok");
      list = await List.aggregate([{ $sample: { size: 5 } }]);
    }
    res.status(201).json(list);
  } catch (err) {
    res.status(500).json({
      message: "Internal server error !",
    });
  }
};

module.exports = {
  addList,
  deleteList,
  getList,
};
