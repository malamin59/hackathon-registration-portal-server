import express from "express";
import { sendEmail } from "../controllers/email.controller.js";

const emailRouter = express.Router();

emailRouter.post("/send", sendEmail);

export default emailRouter;
