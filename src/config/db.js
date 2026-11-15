
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection;
    }

    if (mongoose.connection.readyState === 2) {
      await mongoose.connection.asPromise();
      return mongoose.connection;
    }

    await mongoose.connect(process.env.MONGODB_URL);

    console.log("MongoDB connected successfully!");
    console.log("Database Name:", mongoose.connection.name);

    return mongoose.connection;
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    throw error;
  }
};

export default connectDB;
