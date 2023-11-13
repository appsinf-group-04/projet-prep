const router = require('express').Router();
const crypto = require('crypto');

const User = require('../models/user');

router.get("/", (req, res) => {

  let loggedIn = false;
  let user = null;

  if (req.session && req.session.user) {
    loggedIn = true;
    user = req.session.user;
  }

  console.log(req.session);

  let incidents = [
    {
      title: "Test",
      date: Date.now(),
      address: "Address",
      user: {
        fullname: "User",
      }
    },
    {
      title: "Test2",
      date: Date.now(),
      address: "Address",
      user: {
        fullname: "User",
      }
    }
  ];

  res.render("pages/index", { incidents, loggedIn, user });
});

router.post("/signup", async (req, res) => {
  const { username, password, name, email } = req.body;

  const hash = crypto.createHash('sha256');
  hash.update(password);
  const hashedPassword = hash.digest('hex');

  const user = new User({
    username: username,
    password: hashedPassword,
    name: name,
    email: email,
  });

  // Insert the user data into the database
  await user.save();
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
  console.log("User logged in");

  // c'est censé marcher ça bordel
  req.session.user = user;

  res.redirect('/');
});

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
