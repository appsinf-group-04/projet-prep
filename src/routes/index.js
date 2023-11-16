const router = require('express').Router();
const crypto = require('crypto');

const User = require('../models/user');
const Incident = require('../models/incident');

router.get("/", async (req, res) => {

  let loggedIn = req.session.user ? true : false;
  let error = req.session.error;

  // récupère tous les incidents dans une liste
  const incidents = await Incident.find({})
    .sort({ date: -1 })
    .limit(20);

  res.render("pages/index", { incidents, loggedIn, user: req.session.user, error });
});

router.post("/signup", async (req, res) => {
  const { username, password, name, email } = req.body;

  const hash = crypto.createHash('sha256');
  hash.update(password);
  const hashedPassword = hash.digest('hex');

  // New code to verifie if the user already exists
  const userExists = await User.findOne({ username: username });

  if (userExists) {
    console.log("User already exists");
    req.session.error = "Nom d'utilisateur déjà existant";
    return res.redirect('/');
  }
  // and end here

  await user.save();

  req.session.user = { name: user.name };

  res.redirect("/");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Find the user with the given username
  const user = await User.findOne({ username: username });

  if (!user) {
    console.log("User not found");
    return res.redirect('/');
  }

  // Hash the provided password
  const hash = crypto.createHash('sha256');
  hash.update(password);
  const hashedPassword = hash.digest('hex');

  // Compare the hashed password with the stored password
  if (hashedPassword !== user.password) {
    console.log("Invalid password");
    return res.redirect('/');
  }

  // If the password is correct, log the user in
  req.session.user = { name: user.name };

  res.redirect('/');
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
