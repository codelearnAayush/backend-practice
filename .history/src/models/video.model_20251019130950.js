import mongoose from "mongoose";

const videoSchema = new Schema(
    {

    },
    {
        timestamps :t
    }

    

export const Video = mongoose.model("Video",videoSchema)