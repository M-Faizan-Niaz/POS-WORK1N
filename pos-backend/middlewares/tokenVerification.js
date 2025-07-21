const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const config = require("../config/config"); // Make sure to import your config

const isVerified = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      return next(createHttpError(401, "Please provide Token!"));
    }

    const decodeToken = jwt.verify(accessToken, config.accessTokenSecret);
    const user = await User.findById(decodeToken._id); // Typo: `findbyId` ➝ `findById`

    if (!user) {
      return next(createHttpError(401, "User does not exist!"));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(createHttpError(401, "Invalid Token!"));
  }
};

module.exports = { isVerified };
