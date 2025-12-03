import { Router } from "express";
import {registerUser}

const router = Router()

router.route("/register").post(registerUser)

export default router