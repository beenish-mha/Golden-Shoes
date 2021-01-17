const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoeSchema = new Schema({
  Style: { type: String, required: true },
  Color: { type: String, required: true },
  Size: { type: Number, required: true},
  Image: { type: String},
  Quantity: { type: String, required: true },
  Gender: { type: String },
  Description: { type: String},
  Ratings: { type: String },
  Reviews: { type: Number },
});

const Shoe = mongoose.model("Shoe", shoeSchema);
module.exports = Shoe;
