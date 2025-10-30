import mongoose from "mongoose";

const userSchema = new Schema({
        username:{
            type:String.fromCharC
        }

})

export const User = mongoose.model("User" , userSchema)