const express = require("express");
const remarksModel = require("../repository/models/remarksModel");
const router = express.Router();

// get remarks
router.post('/getRemarks', async (req, res) => {
    try {
        const userId = req.body.userId;
        const ownerId = req.body.ownerId;

        if (userId === ownerId) {
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
        const content = req.body.content;

        if (userId !== ownerId) {
            const remark = await remarksModel.create({
                authorId: userId,
                ownerId: ownerId,
                content: content,
                approved: false,
            });
            res.status(201).json({ "data": remark });
        } else {
            res.status(405).json({ "alert": "Users can't write remarks on their own profile!" });
        }
    } catch (err) {
        console.log(err);
        res.status(404).json({ "message": err });
    }
});

// approve remark
router.post('/approveRemark', async (req, res) => {
    try {
        const id = req.body.id;
        const userId = req.body.userId;
        const ownerId = req.body.ownerId;

        if (userId === ownerId) {
            const remark = await remarksModel.updateOne({
                _id: id,
            }, {
                approved: true,
            });
            res.status(201).json({ "data": remark });
        } else {
            res.status(405).json({ "alert": "Users can't update remarks on someone else's profile!" });
        }
    } catch (err) {
        console.log(err);
        res.status(404).json({ "message": err });
    }
});

router.post('/deleteRemark', async (req, res) => {
    try {
        const id = req.body.id;
        const userId = req.body.userId;
        const ownerId = req.body.ownerId;

        if (userId === ownerId) {
            const remark = await remarksModel.deleteOne({
                _id: id,
            });
            res.status(201).json({ "data": remark });
        } else {
            res.status(405).json({ "alert": "Users can't update remarks on someone else's profile!" });
        }
    } catch (err) {
        console.log(err);
        res.status(404).json({ "message": err });
    }
});

module.exports = router;
