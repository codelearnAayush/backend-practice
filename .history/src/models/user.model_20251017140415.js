import mongoose from "mongoose";

const userSchema = new Schema({
        username:{
            type: String ,
            required: true,
            uni

        }

})

export const User = mongoose.model("User" , userSchema)