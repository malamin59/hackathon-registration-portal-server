import mongoose from "mongoose";

const connectBD = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDb database connect Successfully!");
    

console.log("Database Name:", mongoose.connection.name);
console.log("Host:", mongoose.connection.host);
console.log("Collections:", Object.keys(mongoose.connection.collections));

  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    throw error;
  }
};

export default connectBD;
