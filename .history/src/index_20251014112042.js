import mongoose from "mongoose";
import{DB_NAME} from "./constants";

( async ()=> {
    try{
     amongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch(error){
        console.log("ERROR:", error)
        throw err
    }
})()