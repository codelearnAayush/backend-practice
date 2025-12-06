import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js" 

const registerUser = asyncHandler(async (req,res) =>{
    // return res.status(200).json({
    //     message: "ok"
// })

    //get user details from frontemd
    //validation - not empty
    //check if user already exists : email,username
    //check for image ,check for avatar
    // upload them to cloudinary
   // create user object - create entry in db
   // remove password and refresh token filed from response
   // check for user creation
   //return response(res)

  
   const {fullname,email, username,password} = req.body
    console.log("email : " , email);

    if( 
        [fullname,email,username,password].some((field) =>
        field)
    ){
    }
 
})


export {
    registerUser,
}