const express = require("express");
const userModel = require("../repository/models/userModel");
const router = express.Router();

// create new user
router.post('/createNewUser', async (req, res) => {
  try {
    const query = await userModel.findOne({ googleId: req.body.googleId });
    if (!query) {
      const user = await userModel.create(req.body);
      res.status(201).json({ "newUser": user });
    } else {
      res.status(201).json({ "newUser": query });
    }
  } catch (err) {
    res.status(404).json({ "message": err });
  }
});

// get user
router.post('/getUser', async (req, res) => {
  try {
    const query = await userModel.findOne({ googleId: req.body.googleId });
    res.status(201).json({ "user": query });
  } catch (err) {
    res.status(404).json({ "message": err });
  }
});

// find Users
router.post('/findUsers', async (req, res) => {
  try {
    const query = await userModel.find({ name: new RegExp(req.body.name, 'i') });
    res.status(201).json({ "data": query });
  } catch (err) {
    res.status(404).json({ "message": err });
  }
});


module.exports = router;
