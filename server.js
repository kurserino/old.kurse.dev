const express = require("express");
const bodyParser = require("body-parser");
const Instagram = require("instagram-web-api");
const path = require("path");
const app = express();
const api = express.Router();
require("dotenv").config();

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

  const client = new Instagram({ IG_USER, IG_PASSWORD });
  console.log(IG_USER);

  await client.login();

  var illustrations = await client.getUserByUsername({
    username: IG_USER,
  });
  res.json(illustrations);
});

app.use("/api", api);

app.listen(process.env.PORT || 8080);
