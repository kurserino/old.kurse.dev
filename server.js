const express = require("express");
const bodyParser = require("body-parser");
const Instagram = require("instagram-web-api");
const axios = require("axios");
const path = require("path");
const app = express();
const api = express.Router();
require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/kurse", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Mongodb connected.");
});

app.use(express.static(path.join(__dirname, "public")));

app.get("*", function (req, res, next) {
  if (req.url.startsWith("/api")) return next();
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Running message
api.get("/", function (req, res) {
  res.json({ message: "Api running." });
});

// Get illustrations from instagram
api.get("/illustrations", async (req, res) => {
  const { IG_USER, IG_PASSWORD } = process.env;

  res.json({ message: "Nozes" });
});

app.use("/api", api);

app.listen(process.env.PORT || 8080);
