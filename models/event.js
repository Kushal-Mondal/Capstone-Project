const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: String,
  capacity: { type: Number, default: 100 } // 👈 add this
});

module.exports = mongoose.model("Event", eventSchema);
