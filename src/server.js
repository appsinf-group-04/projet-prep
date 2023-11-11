const path = require("path");
const express = require("express");
const { default: mongoose } = require("mongoose");
const session = require("express-session");
const crypto = require("crypto");

const app = express();

app
  .set("view engine", "ejs")
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use("/public", express.static(
    path.join(__dirname, "..", "public")
  ))
  .use("/", require("./routes/index"))
  .use("/incidents", require("./routes/incident"))
  .use(session({
    secret : "secret",
  }));

app.listen(process.env.PORT || 8080, () => {
  console.log("Listening at http://localhost:8080");

  mongoose.connect("mongodb://localhost:27017/projet-prep")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
});