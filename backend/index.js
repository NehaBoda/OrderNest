import { setServers } from "node:dns/promises";
// Force Node to use Cloudflare + Google DNS
setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

const app = express()
const port = process.env.PORT ||4000;

app.use(express.json())
app.use(cors())

connectDB();

//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

app.get("/",(req,res)=>{
  res.send("working");
})

app.listen(port,()=>{
 console.log(`server started on ${port}`);
})