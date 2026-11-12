import { sendEmail } from "../auth/email.service.js";
import { registrationConfirmationEmail } from "./registration.email.js";
import Registration from "./registration.model.js";

const createRegistration = async (registrationData) => {
  const registration = await Registration.create(registrationData);

  await sendEmail(
    registration.email,
    "Registration Confirmed | Code-a-Nova",
    registrationConfirmationEmail(registration),
  );

  return registration;
};

const getRegistration = async (userId) => {
  const registration = await Registration.find({ user: userId });
  return registration;
};

export { createRegistration, getRegistration };
