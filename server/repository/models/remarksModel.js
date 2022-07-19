const mongoose = require('mongoose');

const remarksSchema = new mongoose.Schema({
    remarkId: String,
    authorId: String,
    ownerId: String,
    content: String,
    approved: Boolean,
});

module.exports = new mongoose.model("Remarks", remarksSchema);