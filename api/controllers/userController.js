// external imports
const CryptoJs = require("crypto-js");

// internal imports
const User = require("../models/User");

const updateUser = async (req, res, next) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    // first encrypt password
    if (req.body.password) {
      req.body.password = CryptoJs.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      const { password, ...info } = updatedUser._doc;

      res.status(201).json(info);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json({
      message: "You are not allowed to updated user !",
    });
  }
};

const deleteUser = async (req, res, next) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(201).json({
        message: "User deleted successfully !",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json({
      message: "You are not allowed to delete user !",
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, ...info } = user._doc;

    res.status(201).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUsers = async (req, res, next) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      res.status(201).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json({
      message: "You are not allowed to fetch users !",
    });
  }
};

const getUserStats = async (req, res, next) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);

  try {
    const userPerMonth = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(201).json(userPerMonth);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  getUserStats,
};
