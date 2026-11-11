import express from "express";
import { signup, getUsers } from "./auth.controller.js";

const authRouter = express.Router();

// Signup
authRouter.post("/signup", signup);

authRouter.get("/users", getUsers);

export default authRouter;
