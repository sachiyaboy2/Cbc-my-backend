import express from "express";
import mongoose from "mongoose";
import studentRouter from "./Routers/StudentsRT.js";
import userRouter from "./Routers/userRouter.js";
import jwt from "jsonwebtoken"
import productRouter from "./Routers/productRouter.js";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();

const app = express()
app.use(cors())

/// middle man
app.use(express.json())

/// authontication part

app.use(
    (req,res,next)=>{
        let token = req.header("Authorization");
        if(token != null){
            token = token.replace("Bearer ","")
            console.log(token)
            jwt.verify(token,"jwt-anykey",
                (err, decoded)=>{
                    if(decoded == null){
                        res.json({
                            message: "Invalid token please ligin again !"
                         })
                        return
                    }else{
                         req.user = decoded
                    }
                }
             )
        }
        next()
    }

)


const ConnectionString = process.env.Mongo_URL

mongoose.connect(ConnectionString).then(
    ()=>{
        console.log("Data base Connected")
    }
).catch(
    ()=>{
        console.log("Data Base Not Connected")
    }
)
app.use("/students", studentRouter)
app.use("/users", userRouter)
app.use("/products", productRouter)




app.listen(5000, 
    ()=>{
        console.log("server is started")
    }
)

