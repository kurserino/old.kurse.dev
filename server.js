const express = require("express");
const path = require("path");
const app = express();
const api = express.Router();
const fs = require("fs");
require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Mongodb connected.");
});

app.use(express.static(path.join(__dirname, "build")));

// Additional routes
const routes = ["/api"];
routesFiles = fs.readdirSync(path.join(__dirname, "/routes"));

routesFiles.forEach((file) => {
  var route = file.replace(".js", "");
  var routeFolder = path.join(__dirname, route);
  if (fs.existsSync(routeFolder)) {
    app.use("/" + route, express.static(routeFolder));
  }
  routes.push(route);
});

app.get("*", function (req, res, next) {
  routes.forEach((route) => {
    if (req.url.startsWith(route)) return next();
  });
  res.sendFile(path.join(__dirname, process.env.NODE_ENV == "development" ? "public" : "build", "index.html"));
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
