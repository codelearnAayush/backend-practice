import { Router } from "express";
import {registerUser} from "../controllers/user.controller.js";
impor
const router = Router()

router.route("/register").post(registerUser)

export default router