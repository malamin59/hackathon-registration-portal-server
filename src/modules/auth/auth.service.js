
import bcrypt from "bcrypt";
import User from "./auth.model.js";

const signupUser = async (userData) => {
  const { fullName, email, password, confirmPassword } = userData;

  // Check required fields
  if (!fullName || !email || !password || !confirmPassword) {
    throw new Error("All fields are required");
  }

  // Check password confirmation
  if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  // Check existing user
  const existingUser = await User.findOne({
    email: email.toLowerCase(),
  });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    fullName,
    email: email.toLowerCase(),
    password: hashedPassword,
  });

  return {
    userId: user._id,
    fullName: user.fullName,
    email: user.email,
  };
};




const getAllUsers = async () => {
  const users = await User.find().select(
    "fullName email isVerified createdAt"
  );

  return users;
};

export { signupUser, getAllUsers };
