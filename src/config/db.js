import mongoose from "mongoose";

const connectBD = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDb database connect Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    throw error;
  }
};

export default connectBD;
