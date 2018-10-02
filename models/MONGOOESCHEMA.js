const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongooseSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  url: String,
  date: { type: Date, default: Date.now }
});

const Mongoose = mongoose.model("MONGOOSE", mongooseSchema);

module.exports = Mongoose;
