const nodemailer = require("nodemailer");
const pool=require("./db.js");
const {find_dept}=require('./support_functions.js');

let otpData = {};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "acgcet25@gmail.com",
    pass: "aimykdsvzkgbkqag",
  },
});

const sendquery = async (req,res) => {
  try{
    const coename= req.body.coename;
    const coeemail=req.body.coeemail;
    const coephno=req.body.coephno;
    const coequery=req.body.coequery;
    console.log(req.body.coename);
    transporter.sendMail(
      {
        from: "acgcet25@gmail.com",
        to: "coe@accet.ac.in",
        subject: `Query from ${coename} through COE site`,
        text: `Mail id: ${coeemail},\n Phone no: ${coephno},\n Query: ${coequery}`,
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
            .json({ success: true, message: "Email sent successfully", coeemail });
        }
      }
    );
  }catch(error){
    console.log(error);
  }
};
let email;
// app.post('/send-otp', cors(), async(req, res) => {
const sendOTP = async (req, res) => {
  try{
    const username=req.body.regno;
    console.log(username);
    let code;
          if (username.length === 7) {
            code = username.substring(2, 4);
          } else if (username.length === 11) {
            code = username.substring(6, 8);
          }
          let dept=find_dept(code)+"_stud_details";
  // console.log("Request received:", req.body);
  // const { email } = req.body;
  const [[db_email]]=await pool.query(
    `select mailid
    from ??
    where regno=?
    `,
    [dept,username]
  );
  email=db_email.mailid;
  console.log(email);
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
}catch(error){
  console.log(error);
}
};
// );

// app.post('/validate-otp', cors(), async (req, res) => {
  const validateOTP = async (req, res) => {
    try {
      console.log(email);
      const { otp } = req.body;
      console.log("email:", email, "otp:", otp);
      if (otpData.hasOwnProperty(email) && otpData[email] === otp) {
        res.status(200).json({ success: true, message: "valid otp" });
        console.log("Otp is validated");
      } else {
        res.status(500).json({ success: false, error: "Invalid OTP" });
        console.log("otp is not valid");
      }
    } catch (error) {
      console.log(error)
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
  sendquery
};
