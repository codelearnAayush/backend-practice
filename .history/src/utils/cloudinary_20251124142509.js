import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.e, 
  api_key: '', 
  api_secret: ''
});