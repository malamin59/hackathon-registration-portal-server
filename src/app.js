
import express from "express";
import router from "./routes/index.js";
// import emailRouter from "./routes/email.route.js";
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", router);
// app.use("/api/email", emailRouter);

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hackathon Registration Server is Running!",
  });
});

export default app;
