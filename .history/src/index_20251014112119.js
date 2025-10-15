import mongoose from "mongoose";
import{DB_NAME} from "./constants";

import express from "express"
const app = expre


( async ()=> {
    try{
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch(error){
        console.log("ERROR:", error)
        throw err
    }
})()