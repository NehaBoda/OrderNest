const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const menuCategorySchema = new Schema({

  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant"
  },

  name: String

});

module.exports = mongoose.model("MenuCategory",menuCategorySchema)