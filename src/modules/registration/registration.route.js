import { Router } from "express";
import { getMyEntry, registerHackathon } from "./registration.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const registrationRoute = Router();

registrationRoute.post("/register", authMiddleware, registerHackathon);
registrationRoute.get("/my-entry", authMiddleware, getMyEntry);

export default registrationRoute;
