const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoeSchema = new Schema({
  Style: { type: String, required: true },
  
  Style: { type: String, required: true },
  Color: { type: String, required: true },
  Size: { type: Number, required: true },
  Image: { type: String },
  Stock: { type: Number, required: true },
  Gender: { type: String },
  Description: { type: String, required: true },
  Ratings: { type: Number },
  Reviews: { type: Number },
  Price: { type: Number, required: true },
});

const Shoe = mongoose.model("Shoe", shoeSchema);
module.exports = Shoe;
