const express = require("express");
const path = require("path");
const app = express();
const api = express.Router();
const fs = require("fs");
const https = require("https");
const http = require("http");
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
var routesFiles = fs.readdirSync(path.join(__dirname, "routes"));
routesFiles.forEach((file) => {
  var route = file.replace(".js", "");
  app.use(require(path.join(__dirname, "routes", file)));
  routes.push("/" + route);
});

app.get("*", function (req, res, next) {
  routes.forEach((route) => {
    if (req.url.startsWith(route)) return next();
  });
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Running message
api.get("/", function (req, res) {
  res.json({ message: "Api running." });
});

app.use("/api", api);

if (process.env.NODE_ENV === "development") {
  app.listen(process.env.PORT || 8080);
} else {
  const httpsServer = https.createServer(
    {
      key: fs.readFileSync(process.env.SSL_KEY),
      cert: fs.readFileSync(process.env.SSL_CERT),
    },
    app
  );

  httpsServer.listen(443, () => {
    console.log("HTTPS Server running on port 443");
  });

  http
    .createServer(function (req, res) {
      res.writeHead(301, {
        Location: "https://" + req.headers["host"] + req.url,
      });
      res.end();
    })
    .listen(80);
}
