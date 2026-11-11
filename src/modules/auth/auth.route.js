import express from "express";
import { signup, getUsers, verifyEmailOtp, login } from "./auth.controller.js";

const authRouter = express.Router();

// Signup
authRouter.post("/signup", signup);
authRouter.post("/verify-otp", verifyEmailOtp);
authRouter.post("/login", login);


authRouter.get("/users", getUsers);
export default authRouter;
