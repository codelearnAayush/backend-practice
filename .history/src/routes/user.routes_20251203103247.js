import { Router } from "express";
import {re}

const router = Router()

router.route("/register").post(registerUser)

export default router