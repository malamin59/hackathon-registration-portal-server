import express from "express";
import router from "./routes/index.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cors from "cors";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://codeanova-hackathon-portal.vercel.app",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hackathon Registration Server is Running!",
  });
});

app.use(errorMiddleware);

export default app;
