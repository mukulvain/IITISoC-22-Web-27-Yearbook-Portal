const express = require("express");
const remarksModel = require("../repository/models/remarksModel");
const router = express.Router();
const { uuid } = require('uuid');

// get remarks
router.post('/getRemarks', async (req, res) => {
    try {
        const userId = req.body.userId;
        const ownerId = req.body.ownerId;

        if (userId == ownerId) {
            const query = await remarksModel.find({ ownerId: ownerId });
            res.status(202).json({ "data": query });
        } else {
            const query = await remarksModel.find({ $or: [{ authorId: userId, ownerId: ownerId }, { approved: true, ownerId: ownerId }] });
            res.status(202).json({ "data": query });
        }
    } catch (err) {
        res.status(404).json({ "message": err });
    }
});

// post remark
router.post('/postRemark', async (req, res) => {
    try {
        const userId = req.body.userId;
        const ownerId = req.body.ownerId;

        if (userId != ownerId) {
            const remark = await remarksModel.create({
                remarksId: uuid(),
                authorId: userId,
                ownerId: ownerId,
                content: req.body.content,
                approved: false,
            });
            res.status(201).json({ "data": remark });
        } else {
            res.status(405).json({ "alert": "Users can't write remarks on their own profile!" });
        }
    } catch (err) {
        res.status(404).json({ "message": err });
    }
});

module.exports = router;
