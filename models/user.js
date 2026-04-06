const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  event: String,
  year: String,
  status: { type: String, default: "not checked-in" },
  registeredAt: { type: Date, default: Date.now },
  checkedInAt: Date
});

module.exports = mongoose.model("User", userSchema);