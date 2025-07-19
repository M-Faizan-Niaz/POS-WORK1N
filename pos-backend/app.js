
require("dotenv").config()
const express = require("express");
const connectDB = require("./config/database")
const config = require("./config/config")
const userRoutes = require("./routes/userRoutes")

const app = express();
const PORT = config.port;
connectDB();

app.use(express.json())

app.use("/api/user", userRoutes)



app.get("/", (req, res) => {
  res.json({message: "Hello from POS server!"})
})




app.listen(PORT, (req, res) => {
  console.log(`POS server is listening on port ${PORT}`)
})