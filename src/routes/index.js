const router = require('express').Router();

router.get("/", (req, res) => {
  let loggedIn = false;
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

  res.render("pages/index", { incidents, loggedIn });
});

module.exports = router;
