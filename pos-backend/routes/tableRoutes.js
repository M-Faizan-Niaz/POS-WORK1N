const express = require("express");
const router = express.Router();

const {
  addTable,
  getTables,
  updateTable,
} = require("../controllers/tableController");
const { isVerified } = require("../middlewares/tokenVerification");

router.route("/").post(isVerified, addTable).get(isVerified, getTables);
router.route("/:id").put(isVerified, updateTable);

module.exports = router;
