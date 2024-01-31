const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const mysql2 = require('mysql2');


const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Badminton19@',
    database: 'clgdata'
  };

  const pool= mysql2.createPool(dbConfig).promise()

//   const connection = mysql.createConnection(dbConfig);
//   connection.connect()
  

router.post('/api/login',async (req,res)=>{
    const {username,password}=req.body
    // console.log(username,password)

    const [[fetched_pswd]]=await pool.query(`
    select pswd 
    from login_cred 
    where reg_no=?
    `,[username])
    const user_pswd=fetched_pswd.pswd
    // const user_pswd=await pool.query(`select * from login_cred`)

    // await connection.query(`select pswd from login_cred where reg_no=${username}`, (error,results)=>{
    //     if(error){
    //         console.error('Error fetching users from the database: ' + error.stack);
    //     }else{
    //         // console.log(results[0].pswd)
    //         // user_pswd=results[0].pswd
    //         console.log("1st",user_pswd)
    //         return results[0].pswd
    //     }
    // })

    let data;
    if(password==user_pswd){
        console.log("Matched")
        data = {pswd_status: 1}
    }else{
        data={pswd_status:2}
    }
    
    res.status(200).json(data)
})

module.exports = router;