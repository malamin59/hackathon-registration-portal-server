import express from "express";

import authRouter from "../modules/auth/auth.route.js";
import registrationRoute from "../modules/registration/registration.route.js";


const router = express.Router();

// Authentication Routes
router.use("/auth", authRouter);
router.use("/hackathon", registrationRoute);

export default router;