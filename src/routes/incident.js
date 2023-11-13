const router = require("express").Router();

const Incident = require('../models/incident');
const User = require('../models/user');

router.post("/create", async (req, res) => {

  // récupère le NOM ET PRENOM et pas le pseudo
  User.findOne({ username: req.session.user });
  
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