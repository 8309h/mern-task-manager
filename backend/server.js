const express = require("express");
const cors = require("cors");
require("dotenv").config()
const authRoutes = require("./routes/authRoutes");
const boardRoutes = require("./routes/boardRoutes")

const connectDB = require("./config/db");


connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/boards", boardRoutes);
app.use("/api/lists", require("./routes/listRoutes"));
app.use("/api/cards", require("./routes/cardRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
});