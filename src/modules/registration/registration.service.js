import Registration from "./registration.model.js";

const createRegistration = async (registrationData) => {
  const registration = await Registration.create(registrationData);
  return registration;
};

const getRegistration = async (userId) => {
  const registration = await Registration.find({ user: userId });
  return registration;
};

export { createRegistration, getRegistration };
