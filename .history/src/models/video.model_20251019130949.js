import mongoose from "mongoose";

const videoSchema = new Schema(
    {

    },
    {
        timestamps 
    }

    

export const Video = mongoose.model("Video",videoSchema)