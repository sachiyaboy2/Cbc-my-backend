import express from "express";
import Student from "../Models/student.js";
import { createStudents, getStudents } from "../controller/studentsController.js";
const studentRouter = express.Router();

studentRouter.get("/", getStudents)
studentRouter.post("/", createStudents)
studentRouter.delete("/", 
    ()=>{
        console.log("Delete riq into studentRouter")
    }
)

studentRouter.put("/",
    ()=>{
        console.log("Put riq into studentRouter")
    }
)

export default studentRouter; 


 
