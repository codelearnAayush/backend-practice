import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js" 
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"



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
        field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required")
    }
 
    const existedUser = User.findOne({
        $or : [{username} , {email}]
    })

   if(existedUser) {
    throw new ApiError(409, "User with email or username already exist")
   }    

   const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if(!avatarLocalPath){
    throw new ApiError(400, "Avatar file is required")
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath)
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)

  if(!avatar){
    throw new ApiError(400,"Avatar file is required")
  }

  User.create({
    fullname,
    
  })
})
 

export {
    registerUser,
}