import express from "express";
import {
  signup,
  getUsers,
  verifyEmailOtp,
  login,
  getMe,
} from "./auth.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const authRouter = express.Router();

// Signup
authRouter.post("/signup", signup);
authRouter.post("/verify-otp", verifyEmailOtp);
authRouter.post("/login", login);
authRouter.get("/me", authMiddleware, getMe);

// authRouter.get("/users" , authMiddleware, getUsers);

export default authRouter;
