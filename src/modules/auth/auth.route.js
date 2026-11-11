import express from "express";
import { signup } from "./auth.controller.js";

const authRouter = express.Router();

// Signup
authRouter.post("/signup", signup);

export default authRouter;
