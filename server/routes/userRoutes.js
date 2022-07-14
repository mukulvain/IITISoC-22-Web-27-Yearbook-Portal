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
      res.status(201).json({"newUser": query});
    }
  } catch (err) {
    res.status(404).json({ "message": err });
  }
});

module.exports = router;
