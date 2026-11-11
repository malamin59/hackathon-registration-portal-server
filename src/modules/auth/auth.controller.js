import { getAllUsers } from "./auth.service.js";

import { signupUser } from "./auth.service.js";

const signup = async (req, res, next) => {
  try {
    const result = await signupUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result
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


export { signup, getUsers};
