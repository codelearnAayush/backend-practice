import mongoose from "mongoose";


( async ()=> {
    try{
     mongoose.connectDB
    }
    catch(error){
        console.log("ERROR:", error)
        throw err
    }
})()