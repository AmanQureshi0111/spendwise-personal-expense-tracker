import express from "express"
import cors from "cors"
import "dotenv/config";
import {connectDB} from './config/db.js'
import userRouter from './routes/userRoute.js'

const app=express();
const port = 4000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//db
connectDB();
//routes
app.use("/api/user",userRouter);

app.get("/",(req,res)=>{
    res.send("API working ");
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})