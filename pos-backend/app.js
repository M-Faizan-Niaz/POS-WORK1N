require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const config = require("./config/config");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const orderRoutes = require("./routes/orderRoutes");
const tableRoutes = require("./routes/tableRoutes");
const cors = require("cors");
const app = express();
const PORT = config.port;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"], // <-- use http
  })
);

app.use("/api/user", userRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/table", tableRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello from POS server!" });
});

app.listen(PORT, (req, res) => {
  console.log(`POS server is listening on port ${PORT}`);
});
