const express = require("express");
const { registerUser, authUser, allUsers } = require("../controllers/userCintrollers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router()

router.route('/').post(registerUser).get(protect, allUsers);
router.post('/logins', authUser);

module.exports = router;