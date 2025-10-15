import mongoose from "mongoose";
import{DB_NAME} from 

( async ()=> {
    try{
     mongoose.connect(`${process.env.MONGODB_URI}`)
    }
    catch(error){
        console.log("ERROR:", error)
        throw err
    }
})()