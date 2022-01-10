// external imports
const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");

// internal imports
const authRoute = require("./routes/auth");
const userRouter = require("./routes/users");
const movieRouter = require("./routes/movies");
const listRouter = require("./routes/lists");

const app = express();

// configuration
env.config();
app.use(express.json());

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull!"))
  .catch((err) => console.log(err));

// cors origin
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// route configuration
app.use("/api/auth", authRoute);
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/lists", listRouter);

app.listen(process.env.PORT, () =>
  console.log(`Backend server is running ${process.env.PORT}`)
);
