const pool = require("./db.js");

const cv_details=async(req,res)=>{
    try {
        const {regno,dept}=req.body;
        console.log(req.body)
        console.log(regno,dept)
        let cv_table_name=dept+"_stud_details"
        const [[cv_personals]]= await pool.query(
            `
            select studentname,dob,gender,batch
            from ??
            where regno=?
            `,
          [cv_table_name,regno]
        );
        console.log(cv_personals)
        return res.json({Status:"Success",stud_details:cv_personals})
    } catch (error) {
        console.log(error);
    }
}
module.exports={
    cv_details
}