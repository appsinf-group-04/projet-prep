const path = require("path");
const express = require("express");
const { default: mongoose } = require("mongoose");
const session = require("express-session");
const https = require("https");
const fs = require("fs");

const app = express();

app
  .set("view engine", "ejs")
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use("/public", express.static(
    path.join(__dirname, "..", "public")
  ))
  .use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  }))
  .use("/", require("./routes/index"))
  .use("/incidents", require("./routes/incident"))

https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: 'secret'
}, app).listen(process.env.PORT || 8080, () => {
  console.log("Listening at https://localhost:8080");

  mongoose.connect("mongodb://127.0.0.1:27017/projet-prep")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
});
