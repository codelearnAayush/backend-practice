import mongoose from "mongoose";


( async ()=> {
    try{
     mongoose.connect(`${process.en}`)
    }
    catch(error){
        console.log("ERROR:", error)
        throw err
    }
})()