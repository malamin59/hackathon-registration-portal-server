import transporter from "../config/email.js";


export const sendEmail = async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      text: message,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Email sending failed",
      error: error.message,
    });
  }
};