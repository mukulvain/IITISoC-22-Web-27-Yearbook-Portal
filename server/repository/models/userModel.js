const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    imageUrl: String,
});

module.exports = new mongoose.model("Users", userSchema);