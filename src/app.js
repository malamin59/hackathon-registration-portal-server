import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hackathon Registration Server is Running!",
  });
});

export default app;
