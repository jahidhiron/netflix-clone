// external imports
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

// internal imports
const User = require("../models/User");

const addUser = async (req, res, next) => {
  // prepare user object
  const userObj = {
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  };

  // instantiate user object
  const newUser = new User(userObj);

  try {
    // store user to db
    const user = await newUser.save();
    const { password, ...info } = user._doc;
    res.status(201).json(info);
  } catch (err) {
    res.status(500).json({
      message: "Internal server error !",
    });
  }
};

const login = async (req, res, next) => {
  try {
    // fetch user
    const user = await User.findOne({ email: req.body.email });
    !user &&
      res.status(401).json({
        message: "Authentication failure!",
      });

    // decrypt password
    const bytes = CryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJs.enc.Utf8);

    // compare password
    originalPassword !== req.body.password &&
      res.status(401).json({
        message: "Authentication failure!",
      });

    // jwt
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    // response
    const { password, ...info } = user._doc;
    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error !",
    });
  }
};

module.exports = {
  addUser,
  login,
};
