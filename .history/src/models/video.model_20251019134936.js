import mongoose from "mongoose";

const videoSchema = new Schema(
    {
       videoFile:{
        type:String,
        required:true
       },
       thi
    },
    {
        timestamps :true
    }

)

export const Video = mongoose.model("Video",videoSchema)