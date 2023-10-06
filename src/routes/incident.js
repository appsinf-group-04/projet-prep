const router = require("express").Router();

router.post("/create", (req, res) => {

  let body = req.body;
  console.log(body);

  res.redirect("/2");
});

module.exports = router;