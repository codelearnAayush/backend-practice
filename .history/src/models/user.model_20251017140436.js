import mongoose from "mongoose";

const userSchema = new Schema({
        username:{
            type: String ,
            required: true,
            unique : true,
            lowercase : tr

        }

})

export const User = mongoose.model("User" , userSchema)