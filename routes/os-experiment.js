const express = require("express");
const app = express();
const axios = require("axios");
const path = require("path");
const fs = require("fs");

const router = express.Router();
router.use("/os-experiment", express.static(path.join(__dirname, "../public/os-experiment")));

// router.get("/os-experiment", function (req, res) {
//   res.sendFile(path.join(__dirname, '../public/os-experiment/index.html'));
// });

module.exports = router;