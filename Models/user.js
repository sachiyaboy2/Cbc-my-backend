import mongoose from "mongoose";

const userScema = new mongoose.Schema(
    {
        email : {
            type : String,
            required: true,
            unique : true
        },

        firstName : {
            type : String,  
            required: true
        },

        lastName : {
            type : String,  
            required: true
        },

        password : {
            type : String,  
            required: true
        },

        role : {
            type : String,  
            required: true,
            default: "user"
        },

        isBlock: {
            type : Boolean,
            default: false
        },
        isEmailVerified: {
            type: Boolean,
            default: false
        },
        image : {
            type: String,
            default: "https://thumbs.dreamstime.com/b/glossy-black-aviator-sunglasses-design-summer-79740742.jpg"
        }
    }
)

const User = mongoose.model("User", userScema)
export default User