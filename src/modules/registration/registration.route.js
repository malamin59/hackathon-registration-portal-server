import { Router } from "express";
import { registerHackathon } from "./registration.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const registrationRoute = Router();

registrationRoute.post("/register", authMiddleware, registerHackathon);

export default registrationRoute;
