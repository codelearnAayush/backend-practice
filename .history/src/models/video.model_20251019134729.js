import mongoose from "mongoose";

const videoSchema = new Schema(
    {
       videoF
    },
    {
        timestamps :true
    }

)

export const Video = mongoose.model("Video",videoSchema)