const router = require("express").Router();

const Incident = require('../models/incident');
const User = require('../models/user');
const checkAuth = require('../middlewares/auth');

router.post("/create", checkAuth, async (req, res) => {
  
  const { title, description, address } = req.body;
  const incident = new Incident({
    title: title,
    description: description,
    address: address,
    name: req.session.user.name
  })

  await incident.save()
  console.log('incident saved')

  res.redirect("/");
});

module.exports = router;