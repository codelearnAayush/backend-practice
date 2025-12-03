import { Router } from "express";
impo

const router = Router()

router.route("/register").post(registerUser)

export default router