import { Router } from "express";
import {registerUser} from "../controllers/u"

const router = Router()

router.route("/register").post(registerUser)

export default router