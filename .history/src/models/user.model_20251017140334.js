import mongoose from "mongoose";

const userSchema = new Schema({
        username:{
            type:String
        }

})

export const User = mongoose.model("User" , userSchema)