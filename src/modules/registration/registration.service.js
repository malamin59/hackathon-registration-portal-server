
import { sendEmail } from "../auth/email.service.js";
import { registrationConfirmationEmail } from "./registration.email.js";
import Registration from "./registration.model.js";

const createRegistration = async (registrationData) => {
  // Check existing registration
  const existingRegistration = await Registration.findOne({
    user: registrationData.user,
  });

  if (existingRegistration) {
    throw new Error("You have already registered for this hackathon");
  }

  // Create registration
  const registration = await Registration.create(registrationData);

  // Send confirmation email
  await sendEmail(
    registration.email,
    "Registration Confirmed | Code-a-Nova",
    registrationConfirmationEmail(registration),
  );

  return registration;
};

// Get logged-in user's registration
const getRegistration = async (userId) => {
  return await Registration.findOne({ user: userId });
};

export { createRegistration, getRegistration };
