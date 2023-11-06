const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("POST API");
});

module.exports = router;
