import mongoose from "mongoose";


( async ()=> {
    try{
     mongoose.connect(`${process}`)
    }
    catch(error){
        console.log("ERROR:", error)
        throw err
    }
})()