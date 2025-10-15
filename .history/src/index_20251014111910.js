import mongoose from "mongoose";
i

( async ()=> {
    try{
     mongoose.connect(`${process.env.MONGODB_URI}`)
    }
    catch(error){
        console.log("ERROR:", error)
        throw err
    }
})()