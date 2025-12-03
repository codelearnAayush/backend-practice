import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.C, 
  api_key: '', 
  api_secret: ''
});