const pool = require("./db.js");
const {decryptString} = require("./encyption.js")
const {find_dept} = require("./support_functions.js")

const cv_details=async(req,res)=>{
    try {
        const {regno,sem}=req.body;
        console.log(req.body)
        console.log(regno,sem)
        decrypted_regno=decryptString(regno)
        console.log(decrypted_regno)
        let code
        if (decrypted_regno.length === 7) {
          code = decrypted_regno.substring(2, 4);
        } else if (decrypted_regno.length === 11) {
          code = decrypted_regno.substring(6, 8);
        }
        let dept=find_dept(code).toUpperCase()
        console.log(dept)
        let cv_stud_table_name=dept+"_stud_details"
        let cv_res_table_name=dept+"_results"
        const [[cv_personals]]= await pool.query(
            `
            select studentname,dob,gender,batch
            from ??
            where regno=?
            `,
          [cv_stud_table_name,decrypted_regno]
        );

        const [cv_results]=await pool.query(
            `
            select *
            from ??
            where regno=? and current_sem=?
            `,
            [cv_res_table_name,decrypted_regno,sem]
        )
        // console.log(cv_personals)
        // console.log(cv_results)
        return res.json({Status:"Success",stud_details:cv_personals,stud_results:cv_results,reg_no:decrypted_regno,department:dept})
    } catch (error) {
        console.log(error);
    }
}
module.exports={
    cv_details
}