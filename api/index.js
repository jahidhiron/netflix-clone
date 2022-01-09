// external imports
const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");

const app = express();
env.config();

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull!"))
  .catch((err) => console.log(err));

app.listen(8080, () => console.log("Backend server is running"));
