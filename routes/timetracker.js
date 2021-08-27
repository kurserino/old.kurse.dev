const express = require("express");
const app = express();
const axios = require("axios");
const path = require("path");
const fs = require("fs");

const router = express.Router();
router.get("/timetracker/api", function (req, res) {
  res.json({ foo: "bar" });
});

module.exports = router;