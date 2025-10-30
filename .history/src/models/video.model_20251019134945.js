import mongoose from "mongoose";

const videoSchema = new Schema(
    {
       videoFile:{
        type:String,
        required:true
       },
       thumbnail:{
        ty
       }
    },
    {
        timestamps :true
    }

)

export const Video = mongoose.model("Video",videoSchema)