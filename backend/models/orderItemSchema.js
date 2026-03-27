const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderItemSchema = new Schema({

  menuItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuItem"
  },

  quantity: Number,

  price: Number

});

module.exports = mongoose.model("OrderItem",orderItemSchema)