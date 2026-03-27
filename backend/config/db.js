import mongoose from "mongoose";

export const connectDB = ()=>{
   try{
      mongoose.connect('mongodb+srv://nehaBoda:NBuG5rtHpX6N1nyw@cluster0.lnvz6ew.mongodb.net/ordernest')
        console.log("db connected");
   }catch(err){
    console.error("db connection failed:", err.message);

   }
}



