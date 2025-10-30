import mongoose from "mongoose";

const userSchema = new Schema({
        username:{
            type: String ,
            required: true,
            unique : true,
            lowercase : true,
            trim :true,
            index: true

        },
        email:{
             type: String ,
            required: true,
            unique : true,
            lowercase : true,
            trim :true
        },
        fullname:{
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar:{
            type: Stri
        }

})

export const User = mongoose.model("User" , userSchema)