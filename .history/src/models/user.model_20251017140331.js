import mongoose from "mongoose";

const userSchema = new Schema({
        username:{
            type:S
        }

})

export const User = mongoose.model("User" , userSchema)