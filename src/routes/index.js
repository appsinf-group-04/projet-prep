const router = require('express').Router();
const crypto = require('crypto');

const User = require('../models/user');
const { getIncidents, searchIncident, accountExists, createAccount } = require('../database');

router.get("/", async (req, res) => {

  let loggedIn = req.session.user ? true : false;
  let error = req.session.error;

  let query = req.query.q;
  let incidents = [];

  if (query) {
    const regex = new RegExp(query, 'i');

    incidents = await searchIncident(regex);
  } else {
    incidents = await getIncidents();
  }

  req.session.error = null;
  res.render("pages/index", { incidents, loggedIn, user: req.session.user, error, query });
});

router.post("/signup", async (req, res) => {
  const { username, password, name, email } = req.body;

  // New code to verifie if the user already exists
  const userExists = await accountExists(username);
  if (userExists) {
    console.log("User already exists");
    req.session.error = "Nom d'utilisateur déjà existant";
    return res.redirect('/');
  }
  // and end here

  await createAccount(username, password, name, email);

  req.session.user = { name: name };

  req.session.error = null;

  res.redirect("/");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Find the user with the given username
  const user = await User.findOne({ username: username });

  if (!user) {
    console.log("User not found");
    req.session.error = "Utilisateur non trouvé";
    return res.redirect('/');
  }

  // Hash the provided password
  const hash = crypto.createHash('sha256');
  hash.update(password);
  const hashedPassword = hash.digest('hex');

  // Compare the hashed password with the stored password

  const incorrect = hashedPassword !== user.password;

  if (incorrect) {
    console.log("Invalid password");
    req.session.error = "Mot de passe incorrect";
    return res.redirect('/');
  }

  // If the password is correct, log the user in
  req.session.user = { name: user.name };

  req.session.error = null;

  res.redirect('/');
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
