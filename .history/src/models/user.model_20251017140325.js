import mongoose from "mongoose";

const userSchema = new Schema({
        username:{
            
        }

})

export const User = mongoose.model("User" , userSchema)