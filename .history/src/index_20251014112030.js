import mongoose from "mongoose";
import{DB_NAME} from "./constants";

( async ()=> {
    try{
     mongoose.connect(`${process.env.MONGODB_URI}/${DB}`)
    }
    catch(error){
        console.log("ERROR:", error)
        throw err
    }
})()