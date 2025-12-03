import { Router } from "express";
import {reg}

const router = Router()

router.route("/register").post(registerUser)

export default router