const pool = require("./db.js");
const { hashPassword, compareHash } = require("./hashing");
const jwt = require("jsonwebtoken");
const axios = require("axios"); //for recaptcha
const {find_dept}=require('./support_functions.js')

const login = async (req, res) => {
  try {
    const { username, password, retoken } = req.body; //for recaptcha token only

    let success = false;
    const SECRET_KEY_v2 = "6LfdMIUpAAAAAIWvkfqc7d-wLd1UBGWd9i1wLpVH";
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY_v2}&response=${retoken}`
    );
    if (recaptchaResponse.data.success) {
      success = true;
    }
    const [[fetched_pswd]] = await pool.query(
      `
        select pswd, p_flag
        from login_cred 
        where reg_no=?
        `,
      [username]
    );
    if (!fetched_pswd) {
      return res.status(200).json({ username_not_found: true });
    }
    const hashed_pswd = fetched_pswd.pswd;
    const pswd_flag = fetched_pswd.p_flag;
    let token;
    let ispswd;
    if (pswd_flag === 1) {
      ispswd = hashed_pswd === password;
    } else {
      ispswd = await compareHash(hashed_pswd, password);
    }

    //--------------changes-----------------
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.setHeader('Access-Control-Allow-Credentials', 'true');
    //--------------changes-----------------

    if (ispswd) {
      token = jwt.sign({ user: username }, "acgcet25", {});
      res
        .status(200)
        .cookie("token", token, { httpOnly: true })
        .json({ pswd_status: ispswd, p_flag: pswd_flag ,regno :username});
    } else {
      res.status(200).json({ pswd_status: ispswd });
    }
  } catch (error) {
    console.log(error);
  }
};

const login_verify = async (req, res) => {
  console.log("jii")
  const token = req.cookies.token;
  if (!token) {
    console.log("No Token!")
    return res.json({ token_status: "not authenticated" });
  } else {
    jwt.verify(token, "acgcet25", (err, decoded) => {
      if (err) {
        console.log("Error!")
        return res.json({ token_status: "token not okay" });
      } else {
        console.log("Okay!")
        res.reg_no = decoded.user;
        return res.json({token_status: "okay"});
      }
    });
  }
};

const reset = async (req, res) => {
  try {
    const { regno, password } = req.body;
    const hash_pswd = await hashPassword(password);
    console.log(hash_pswd);
    console.log(regno);

    const trial = await pool.query(
      `
        update login_cred
        set pswd=?, p_flag=? 
        where reg_no=?
        `,
      [hash_pswd, 2, regno]
    );
    console.log(trial);
    res.status(200).json({ message: "password-reset" });
  } catch (error) {
    console.log(error);
  }
};



const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "not authenticated" });
  } else {
    jwt.verify(token, "acgcet25", (err, decoded) => {
      if (err) {
        return res.json({ Error: "token not okay" });
      } else {
        req.reg_no = decoded.user;
        let code;
          if (decoded.user.length === 7) {
            code = decoded.user.substring(2, 4);
          } else if (decoded.user.length === 11) {
            code = decoded.user.substring(6, 8);
          }
          let dept=find_dept(code)
          console.log("VERIFY USER: ",dept)
          req.dept = dept;
        next();
      }
    });
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success", reg_no: req.reg_no });
};

module.exports = {
  login,
  login_verify,
  reset,
  verifyUser,
  logout
};
