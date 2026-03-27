const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const menuItemSchema = new Schema({

  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant"
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuCategory"
  },

  name: String,

  description: String,

  price: Number,

  image: String,

  isAvailable: {
    type: Boolean,
    default: true
  }

}, { timestamps: true });

module.exports = mongoose.model("MenuItem",menuItemSchema)

