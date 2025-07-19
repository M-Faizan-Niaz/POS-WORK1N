const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")

// Authentication routes 
router.route("/register").post(userController.register);
router.route("/login").post(userController.login);

module.exports = router; PORT=8000
MONGODB_URI=mongodb+srv://faizanniaz17905:<password>@pos-cluster.opa3zyl.mongodb.net/?retryWrites=true&w=majority&appName=pos-cluster
NODE_ENV=development
