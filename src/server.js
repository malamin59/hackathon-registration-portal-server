import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";
import { verifyEmailConnection } from "./modules/auth/email.service.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
       verifyEmailConnection();
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
