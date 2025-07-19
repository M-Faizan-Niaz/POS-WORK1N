
require("dotenv").config()
const express = require("express");
const connectDB = require("./config/database")
const config = require("./config/config")

const app = express();

const PORT = config.PORT;
connectDB()

app.get("/", (req, res) => {
  res.json({message: "Hello from POS server!"})
})


app.listen(PORT, () => {
  console.log(`POS server is listening on port ${PORT}`)
})