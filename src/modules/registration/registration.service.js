import { sendEmail } from "../auth/email.service.js";
import Registration from "./registration.model.js";

const createRegistration = async (registrationData) => {
  const registration = await Registration.create(registrationData);
  await sendEmail(
    registration.email,
    "Hackathon Registration Confirmation - Code-a-Nova",
    `
      <h2>Registration Successful!</h2>
      <p>Hello ${registration.fullName},</p>
      <p>Your hackathon registration has been completed successfully.</p>
      <h3>Registration Details</h3>
      <p><strong>Project Name:</strong> ${registration.projectName}</p>
      <p><strong>Domain:</strong> ${registration.domain}</p>
      <p><strong>Registration ID:</strong> ${registration._id}</p>
      <p>Thank you for registering with Code-a-Nova!</p>
    `,
  );

  return registration;
};

const getRegistration = async (userId) => {
  const registration = await Registration.find({ user: userId });
  return registration;
};

export { createRegistration, getRegistration };
