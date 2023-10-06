const router = require('express').Router();

router.get("/", (req, res) => {
  res.render("pages/index");
});
router.get("/2", (req, res) => {
  res.render("pages/index2");
})

module.exports = router;