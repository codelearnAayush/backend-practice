import mongoose from "mongoose";

const userSchema = new Schema({
        username:{
            type:Sting
        }

})

export const User = mongoose.model("User" , userSchema)