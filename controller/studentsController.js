import Student from "../Models/student.js"


export function getStudents(req,res){

        Student.find().then(

            (students)=>{
               res.json(
                   students
               )
            }
        ).catch(
            ()=>{

            }
        )

    };

export function createStudents(req,res){


    if(req.user == null){
        res.status(401).json(
            {
                message: "Please login and try again"
            }
        )
        return
    }

    if(req.user.roll != "admin"){
        res.status(403).json({
            message: "You not Addmin @"
        })
        return
    }

        const student = new Student(
            {
                name : req.body.name,
                age : req.body.age,
                city : req.body.city
            }
        )

        student.save().then(
            ()=>{
                res.json(
                    {
                        message: "Stydent created Successfully"
                    }
                )
            }
        ).catch(
            ()=>{
                res.json(
                    {
                        message: "Student save Faild !"
                    }
                )
            }
        )
        
    

        console.log("Post rec on Fire !")
    };    