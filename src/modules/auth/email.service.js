
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, html) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  });
};

const verifyEmailConnection = async () => {
  try {
    await transporter.verify();
    console.log("Email server is ready!");
  } catch (error) {
    console.error("Email configuration error:", error.message);
  }
};


export { sendEmail, verifyEmailConnection };
