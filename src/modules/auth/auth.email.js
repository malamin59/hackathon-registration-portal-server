const otpVerificationEmail = (otp) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Email Verification</title>
      </head>

      <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: Arial, Helvetica, sans-serif;">

        <table width="100%" cellpadding="0" cellspacing="0" style="padding: 35px 12px; background-color: #f1f5f9;">
          <tr>
            <td align="center">

              <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 500px; background-color: #ffffff; border-radius: 12px; overflow: hidden;">

                <tr>
                  <td align="center" style="background-color: #111827; padding: 28px 20px;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 25px;">
                      Code-a-Nova
                    </h1>
                    <p style="margin: 8px 0 0; color: #9ca3af; font-size: 13px;">
                      EMAIL VERIFICATION
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 35px 30px; text-align: center;">

                    <h2 style="margin: 0 0 15px; color: #111827; font-size: 23px;">
                      Verify Your Email
                    </h2>

                    <p style="color: #64748b; font-size: 14px; line-height: 1.7;">
                      Thank you for registering with Code-a-Nova.
                      Use the verification code below to verify your email address.
                    </p>

                    <div style="margin: 28px 0; padding: 20px; background-color: #eef2ff; border: 1px solid #c7d2fe; border-radius: 8px;">
                      <p style="margin: 0 0 10px; color: #4338ca; font-size: 12px; font-weight: bold; letter-spacing: 1px;">
                        YOUR VERIFICATION CODE
                      </p>

                      <h1 style="margin: 0; color: #1e3a8a; font-size: 34px; letter-spacing: 8px;">
                        ${otp}
                      </h1>
                    </div>

                    <p style="color: #64748b; font-size: 13px; line-height: 1.7;">
                      This verification code will expire in
                      <strong>10 minutes</strong>.
                    </p>

                    <p style="color: #94a3b8; font-size: 12px; line-height: 1.7;">
                      If you did not create an account, you can safely ignore this email.
                    </p>

                  </td>
                </tr>

                <tr>
                  <td align="center" style="padding: 20px; background-color: #f8fafc; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0; color: #94a3b8; font-size: 11px;">
                      &copy; ${new Date().getFullYear()} Code-a-Nova. All rights reserved.
                    </p>
                  </td>
                </tr>

              </table>
             </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};

export { otpVerificationEmail };
