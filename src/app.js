import express from "express";
import router from "./routes";

const app = express();

// Middleware
app.use(express.json());

app.use('/api', router)
// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hackathon Registration Server is Running!",
  });
});

export default app;
