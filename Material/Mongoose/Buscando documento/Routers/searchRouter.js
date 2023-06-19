const express = require("express");
const router = express.Router();
const controll = require("../Controller/controller");

router.get("/:title", controll);

router.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
