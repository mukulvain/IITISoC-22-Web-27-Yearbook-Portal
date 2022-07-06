const express = require("express");
const router = express.Router();

// database part
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://dbUser:yearbook2021@cluster0.tfcmwn3.mongodb.net/?retryWrites=true&w=majority"
); // will put this in an env later
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database!"));

// create new user
router.post('/createNewUser', (req, res) => {
    // define a schema first
});
// read user data

module.exports = router;
