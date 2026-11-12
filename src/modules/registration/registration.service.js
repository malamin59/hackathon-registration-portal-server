import Registration from "./registration.model.js";

const createRegistration = async (registrationData) => {
  const registration = await Registration.create(registrationData);
  return registration;
};

export { createRegistration };
