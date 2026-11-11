import express from "express";
import { getMyProfile, updateProfile } from "./user.controller.js";

const userRouter = express.Router();

// Get logged-in user's profile
userRouter.get("/me", getMyProfile);

// Update user profile
userRouter.put("/update", updateProfile);

export default userRouter;
