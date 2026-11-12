import { createRegistration } from "./registration.service.js";
import User from "../auth/auth.model.js";

const registerHackathon = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const registrationData = { ...req.body, email: user.email, user: user._id };

    const registration = await createRegistration(registrationData);

    return res.status(201).json({
      success: true,
      message: "Hackathon registration successful",
      data: registration,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { registerHackathon };
