import mongoose from "mongoose";

export const connectDB = ()=>{
   try{
      mongoose.connect(process.env.MONGO_URL)
        console.log("db connected");
   }catch(err){
    console.error("db connection failed:", err.message);

   }
}


