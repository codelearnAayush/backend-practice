import mongoose from "mongoose";

const userSchema = new Schema({
        username:{
            type: String ,
            required: true,
            unique : tru

        }

})

export const User = mongoose.model("User" , userSchema)