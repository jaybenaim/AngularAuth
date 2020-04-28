const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const mongoose = require("mongoose");

require("dotenv").config();

var db = process.env.DB;

var dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: false,
  useCreateIndex: true,
};

mongoose
  .connect(db, dbOptions)
  .then(() => console.log("MongoDB is running and connected"))
  .catch((err) => console.log(err));

const indexRouter = require("./api/routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "build")));
// app.use(express.static(__dirname + "/dist/"));

app.use("/api", indexRouter);
app.get("*", (req, res) => {
  res.sendFile("build/index.html", { root: __dirname });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// TODO Web Template Studio: Add your own error handler here.
if (app.settings.env === "production") {
  // Do not send stack trace of error message when in production
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send("Error occurred while handling the request.");
  });
} else {
  // Log stack trace of error message while in development
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.log(err);
    res.send(err.message);
  });
}

module.exports = app;
