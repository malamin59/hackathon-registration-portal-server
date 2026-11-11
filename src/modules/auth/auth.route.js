import express from "express";
import { signup, getUsers, verifyEmailOtp } from "./auth.controller.js";

const authRouter = express.Router();

// Signup
authRouter.post("/signup", signup);

authRouter.get("/users", getUsers);
authRouter.post("/verify-otp", verifyEmailOtp);

export default authRouter;
