import mongoose from "mongoose";


( async ()=> {
    try{
     mongoose.connect(`${pr}`)
    }
    catch(error){
        console.log("ERROR:", error)
        throw err
    }
})()