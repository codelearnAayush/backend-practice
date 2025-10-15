import mongoose from "mongoose";
import{DB_NAME} from "./constants";


const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect
        (`${process.env,MONGODB_URI} / ${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: $
            {connectionInstance.conn}`)
    }
}


// import express from "express"
// const app = express()


// ( async ()=> {
//     try{
//      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//      app.on("errror",(error) => {
//         console.log("ERRR:" , error);
//         throw error
//      })

// app.listen(process.env.PORT,() => {
//     console.log(`App is listening on port ${process.env.PORT}`);
// })

//     }
//     catch(error){
//         console.log("ERROR:", error)
//         throw err
//     }
// })()