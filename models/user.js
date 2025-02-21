const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  contact: {
    // Corrected typo from 'constact' to 'contact'
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
});

module.exports = mongoose.model("User", userSchema);
