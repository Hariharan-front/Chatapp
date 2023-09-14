const express = require("express");
const { accessChat, fetchChat, createGroupChat, renameGroup, removeFromGroup, addToGroup } = require("../controllers/chatControllers"); // Make sure the path is correct
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat);

router.route("/").get(protect, fetchChat);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;