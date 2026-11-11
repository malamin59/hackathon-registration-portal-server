
import express from "express";
import {
  signup,
  verifyOTP,
  login,
} from "./auth.controller.js";

const authRouter = express.Router();

// Signup
authRouter.post("/signup", signup);

// Verify OTP
authRouter.post("/verify-otp", verifyOTP);

// Login
authRouter.post("/login", login);

export default authRouter;
