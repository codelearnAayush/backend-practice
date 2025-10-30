import mongoose from "mongoose";

const userSchema = new Schema({
        username:{
            type: String ,
            required

        }

})

export const User = mongoose.model("User" , userSchema)