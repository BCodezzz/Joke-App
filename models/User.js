const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    require: true,
    lowercase: true,
  },
  username: {
    type: String,

    trim: true,
    unique: true,
    lowercase: true,
    max: 20,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = User = mongoose.model("users", userSchema);
