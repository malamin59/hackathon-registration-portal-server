import bcrypt from "bcrypt";
import User from "./auth.model.js";
import crypto from "crypto";
import { sendEmail } from "./email.service.js";

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

  // Generate 6-digit OTP
  const otp = crypto.randomInt(100000, 1000000).toString();

  // Hash OTP
  const otpHash = await bcrypt.hash(otp, 10);

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    fullName,
    email: email.toLowerCase(),
    password: hashedPassword,
    otpHash,
    otpExpiresAt: new Date(Date.now() + 10 * 60 * 1000),
  });

  // Send OTP Email
  await sendEmail(
    user.email,
    "Email Verification OTP",
    `
      <h2>Email Verification</h2>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>This OTP expires in 10 minutes.</p>
    `,
  );


  // Return response
  return {
    userId: user._id,
    fullName: user.fullName,
    email: user.email,
    message: "Registration successful. Please verify your email.",
  };
};

  const verifyOtp = async (userId, otp) => {
    // Find user and include hidden OTP fields
    const user = await User.findById(userId).select("+otpHash +otpExpiresAt");

    if (!user) {
      throw new Error("User not found");
    }

    if (user.isVerified) {
      throw new Error("Email already verified");
    }

    if (!user.otpHash || !user.otpExpiresAt) {
      throw new Error("OTP not found. Please request a new OTP");
    }

    // Check OTP expiration
    if (user.otpExpiresAt < new Date()) {
      throw new Error("OTP expired. Please request a new OTP");
    }

    // Compare OTP
    const isOtpValid = await bcrypt.compare(otp, user.otpHash);

    if (!isOtpValid) {
      throw new Error("Invalid OTP");
    }

    // Verify email and remove OTP
    user.isVerified = true;
    user.otpHash = undefined;
    user.otpExpiresAt = undefined;

    await user.save();

    return {
      userId: user._id,
      email: user.email,
      isVerified: user.isVerified,
      message: "Email verified successfully",
    };
  };

const getAllUsers = async () => {
  const users = await User.find().select("fullName email isVerified createdAt");

  return users;
};

export { signupUser, getAllUsers, verifyOtp };
