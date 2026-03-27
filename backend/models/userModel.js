import mongoose from "mongoose";
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
 cartData:{
  type:Object,
  default:{}
 }
},{ minimize: false });


const userModel = mongoose.model.user || mongoose.model("user",userSchema);
export default userModel;
