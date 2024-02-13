const pool = require("./db.js");
const {find_dept}=require('./support_functions.js')

const dashboard=async(req,res)=>{
    try{  
        const reg_no=req.reg_no;
        // console.log(reg_no);
        let code;
          if (reg_no.length === 7) {
            code = reg_no.substring(2, 4);
          } else if (reg_no.length === 11) {
            code = reg_no.substring(6, 8);
          }
          let dept=find_dept(code)+"_stud_details";
    const [[dash]]= await pool.query(
        `
        select *
        from ??
        where regno=?
        `,
      [dept,reg_no]
    );
    // console.log(dash)
    return res.json({Status:"Success",stud_details:dash})

}catch(error){
    console.log(error);
}
};

module.exports={
    dashboard
}