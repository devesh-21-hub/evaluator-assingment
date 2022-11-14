const mongoose = require("mongoose");

const ValueSchema = new mongoose.Schema({
  letter: {
    type: String,
  },
  value: {
    type: Number,
  },
});

const Value = mongoose.model("Value", ValueSchema);

module.exports = { Value, ValueSchema };
