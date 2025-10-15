import mongoose from "mongoose";
import{DB_NAME} from "./constants";

impo


( async ()=> {
    try{
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch(error){
        console.log("ERROR:", error)
        throw err
    }
})()