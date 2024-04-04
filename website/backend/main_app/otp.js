const nodemailer = require("nodemailer");

let otpData = {};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "acgcet25@gmail.com",
    pass: "aimykdsvzkgbkqag",
  },
});

// app.post('/send-otp', cors(), async(req, res) => {
const sendOTP = async (req, res) => {
  console.log("Request received:", req.body);
  const { email } = req.body;
  const otp = generateOTP();
  console.log("Generated OTP:", otp);
  otpData[email] = otp;

  transporter.sendMail(
    {
      from: "acgcet25@gmail.com",
      to: email,
      subject: "OTP to reset password",
      text: `Your OTP to reset password is ${otp}`,
    },
    (error, info) => {
      if (error) {
        console.log("error:", error);
        res
          .status(500)
          .json({ success: false, message: "Error sending email" });
      } else {
        console.log("email sent", info.response);
        res
          .status(200)
          .json({ success: true, message: "Email sent successfully", otp });
      }
    }
  );
};
// );

// app.post('/validate-otp', cors(), async (req, res) => {
const validateOTP = async (req, res) => {
  const { email, otp } = req.body;
  console.log("email:", email, "otp:", otp);
  if (otpData.hasOwnProperty(email) && otpData[email] === otp) {
    res.status(200).json({ success: true, message: "valid otp" });
    console.log("Otp is validated");
  } else {
    res.status(500).json({ success: false, error: "Invalid OTP" });
    console.log("otp is not valid");
  }
};
//   );

function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

module.exports = {
  generateOTP,
  sendOTP,
  validateOTP,
};
