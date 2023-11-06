const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("Everything works here.");
});

module.exports = router;
