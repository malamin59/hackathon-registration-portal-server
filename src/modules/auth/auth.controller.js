import User from "./auth.model.js";
import { getAllUsers, loginUser, verifyOtp } from "./auth.service.js";

import { signupUser } from "./auth.service.js";

const signup = async (req, res, next) => {
  try {
    const result = await signupUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const verifyEmailOtp = async (req, res, next) => {
  try {
    const { userId, otp } = req.body;

    if (!userId || !otp) {
      throw new Error("User ID and OTP are required");
    }

    const result = await verifyOtp(userId, otp);

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Login Controller
const login = async (req, res, next) => {
  try {
    const result = await loginUser(req.body);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get Current Logged-in User
const getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId).select(
      "fullName email isVerified createdAt",
    );
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      totalUsers: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { signup, getUsers, verifyEmailOtp, login, getMe };
