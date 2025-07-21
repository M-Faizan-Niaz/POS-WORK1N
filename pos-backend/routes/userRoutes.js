const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")
const tokenVerification = require("../middlewares/tokenVerification")
// Authentication routes 
router.route("/register").post(userController.register);
router.route("/login").post(userController.login);

router.route("/").get(tokenVerification.isVerified,userController.getUserData)

module.exports = router;

