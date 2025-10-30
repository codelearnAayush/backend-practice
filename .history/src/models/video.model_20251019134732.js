import mongoose from "mongoose";

const videoSchema = new Schema(
    {
       videoFile:{
        
       }
    },
    {
        timestamps :true
    }

)

export const Video = mongoose.model("Video",videoSchema)