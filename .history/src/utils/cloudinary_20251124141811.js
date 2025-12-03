import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
  cloud_name: 'aayushstore', 
  api_key: 'my_key', 
  api_secret: 'my_secret'
});