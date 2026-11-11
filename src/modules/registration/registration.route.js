
import express from "express";
// import {
//   registerHackathon,
//   getMyEntry,
//   deleteHackathonEntry,
// } from "./hackathon.controller.js";

const hackathonRouter = express.Router();

hackathonRouter.post("/register", registerHackathon);
// hackathonRouter.get("/my-entry", getMyEntry);
// hackathonRouter.delete("/:id", deleteHackathonEntry);

export default hackathonRouter;
