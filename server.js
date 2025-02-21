const express = require("express");
const app = express();
const User = require("./models/user");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("connected to db"))
  .catch((err) => console.error("Could not connect to db", err));

// Define routes
app.get("/", async (req, res) => {
  const Users = await User.find();
  res.json(Users);
});

app.post("/", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
    });
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
