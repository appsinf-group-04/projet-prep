const router = require("express").Router();

const checkAuth = require('../middlewares/auth');
const { createIncident } = require('../database');

router.post("/create", checkAuth, async (req, res) => {

  const { title, description, address } = req.body;
  await createIncident(title, description, address, req.session.user.name);

  console.log('incident saved')

  res.redirect("/");
});

module.exports = router;
