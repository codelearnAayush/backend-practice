import mongoose from "mongoose";


( async ()=> {
    try{
     mongoose.connect(`${p}`)
    }
    catch(error){
        console.log("ERROR:", error)
        throw err
    }
})()