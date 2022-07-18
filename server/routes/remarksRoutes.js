const express = require("express");
const remarksModel = require("../repository/models/remarksModel");
const router = express.Router();

// get remarks
router.post('/getRemarks', async (req, res) => {
    try {
        const userId = req.body.userId;
        const ownerId = req.body.ownerId;

        if (userId == ownerId) {
            const query = await remarksModel.find({ ownerId: ownerId });
            console.log(query);
            res.status(202).json({ "data": query });
        } else {
            const query = await remarksModel.find({ $or: [{ authorId: userId }, { approved: true }] });
            res.status(202).json({ "data": query });
        }
    } catch (err) {
        res.status(404).json({ "message": err });
    }
});

module.exports = router;
