
import express from "express";


import hackathonRouter from "../modules/registration/registration.route.js";
import authRouter from "../modules/auth/auth.route.js";
import userRouter from "../modules/user/user.route.js";


const router = express.Router();

// Authentication Routes
router.use("/auth", authRouter);

// User Routes
router.use("/user", userRouter);

// Hackathon Routes
router.use("/hackathon", hackathonRouter);

export default router;
