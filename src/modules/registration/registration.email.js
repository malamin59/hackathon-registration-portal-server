
const registrationConfirmationEmail = (registration) => {
  return `
    <div style="margin: 0; padding: 35px 15px; background-color: #f4f6f9; font-family: Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden;">

        <div style="background-color: #172554; padding: 28px 20px; text-align: center;">
          <h1 style="margin: 0; color: #ffffff; font-size: 25px;">
            Code-a-Nova
          </h1>
          <p style="margin: 8px 0 0; color: #cbd5e1; font-size: 14px;">
            Hackathon Registration
          </p>
        </div>

        <div style="padding: 35px 30px;">
          <h2 style="margin: 0 0 15px; color: #15803d; font-size: 23px;">
            Registration Confirmed!
          </h2>

          <p style="color: #334155; font-size: 15px; line-height: 1.7;">
            Hello <strong>${registration.fullName}</strong>,
          </p>

          <p style="color: #475569; font-size: 15px; line-height: 1.7;">
            Congratulations! Your hackathon registration has been
            successfully submitted. We're excited to have you participate.
          </p>

          <div style="margin: 25px 0; padding: 22px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="margin: 0 0 18px; color: #0f172a; font-size: 17px;">
              Registration Details
            </h3>

            <p style="margin: 10px 0; color: #475569; font-size: 14px;">
              <strong>Project Name:</strong> ${registration.projectName}
            </p>

            <p style="margin: 10px 0; color: #475569; font-size: 14px;">
              <strong>Domain:</strong> ${registration.domain}
            </p>

            <p style="margin: 10px 0; color: #475569; font-size: 14px;">
              <strong>Registration ID:</strong>
            </p>

            <div style="padding: 12px; background-color: #e0e7ff; border-radius: 6px; color: #1e40af; font-size: 14px; font-weight: bold; word-break: break-all;">
              ${registration._id}
            </div>
          </div>

          <p style="color: #475569; font-size: 14px; line-height: 1.7;">
            Please keep your Registration ID for future reference.
          </p>

          <p style="margin-top: 28px; color: #334155; font-size: 14px; line-height: 1.7;">
            Best Regards,<br />
            <strong>Team Code-a-Nova</strong>
          </p>
        </div>

        <div style="padding: 18px; background-color: #f1f5f9; text-align: center;">
          <p style="margin: 0; color: #64748b; font-size: 12px;">
            &copy; ${new Date().getFullYear()} Code-a-Nova. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  `;
};

export { registrationConfirmationEmail };
