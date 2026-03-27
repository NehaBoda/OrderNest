const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    street: String,
    city: String,
    state: String,
    pincode: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Address", addressSchema);
