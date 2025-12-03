import { Router } from "express";
import {regis}

const router = Router()

router.route("/register").post(registerUser)

export default router