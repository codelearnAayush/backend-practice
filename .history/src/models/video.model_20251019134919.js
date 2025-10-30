import mongoose from "mongoose";

const videoSchema = new Schema(
    {
       videoFile:{
        type:S
       }
    },
    {
        timestamps :true
    }

)

export const Video = mongoose.model("Video",videoSchema)