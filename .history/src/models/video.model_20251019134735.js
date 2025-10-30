import mongoose from "mongoose";

const videoSchema = new Schema(
    {
       videoFile:{
        type:
       }
    },
    {
        timestamps :true
    }

)

export const Video = mongoose.model("Video",videoSchema)