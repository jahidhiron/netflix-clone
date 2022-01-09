// external imports
const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");

// internal imports
const authRoute = require("./routes/auth");
const userRouter = require("./routes/users");
const movieRouter = require("./routes/movies");

const app = express();

// configuration
env.config();
app.use(express.json());

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull!"))
  .catch((err) => console.log(err));

// route configuration
app.use("/api/auth", authRoute);
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);

app.listen(process.env.PORT, () =>
  console.log(`Backend server is running ${process.env.PORT}`)
);
