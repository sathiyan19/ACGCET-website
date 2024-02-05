const pool = require("./db.js");
const { hashPassword, compareHash } = require("./hashing");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const [[fetched_pswd]] = await pool.query(
      `
        select pswd 
        from login_cred 
        where reg_no=?
        `,
      [username]
    );
    const hashed_pswd = fetched_pswd.pswd;
    let token
    const ispswd = await compareHash(hashed_pswd, password);

    //--------------changes-----------------
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.setHeader('Access-Control-Allow-Credentials', 'true');
    //--------------changes-----------------

    if (ispswd) {
      token = jwt.sign({ user: username }, "acgcet25", {});
      res.status(200).cookie("token", token,{ httpOnly: true }).json({ pswd_status: ispswd });
    }else{
      res.status(200).json({ pswd_status: ispswd });
    }
    
  } catch (error) {
    console.log(error);
  }
};

const reset = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hash_pswd = await hashPassword(password);
    console.log(hash_pswd);

    const trial = await pool.query(
      `
        update login_cred
        set pswd=? 
        where reg_no=?
        `,
      [hash_pswd, username]
    );
    console.log(trial)
    res.status(200).json({ message: "password-reset" });
  } catch (error) {
    console.log(error);
  }
};

const verifyUser = (req,res,next)=>{
  const token = req.cookies.token
  if(!token){
      return res.json({Error:"not authenticated"})
  }
  else{
      jwt.verify(token,"acgcet25",(err,decoded)=>{
          if(err){
              return res.json({Error:"token not okay"});
          }
          else{
              req.reg_no=decoded.user;
              next();
          }
      })
  }
}

const logout=(req,res)=>{
  res.clearCookie('token')
  return res.json({Status:"Success",reg_no:req.reg_no})
}

module.exports = {
  login,reset,verifyUser,logout
};
