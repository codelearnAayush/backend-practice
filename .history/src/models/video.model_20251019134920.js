import mongoose from "mongoose";

const videoSchema = new Schema(
    {
       videoFile:{
        type:Sr
       }
    },
    {
        timestamps :true
    }

)

export const Video = mongoose.model("Video",videoSchema)