import mongoose from "mongoose";

const videoSchema = new Schema(
    {

    },
    {
        timestamps :true
    }

    

export const Video = mongoose.model("Video",videoSchema)