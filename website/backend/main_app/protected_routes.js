const pool = require("./db.js");
const {find_dept}=require('./support_functions.js')

const dashboard=async(req,res)=>{
    try{  
        const reg_no=req.reg_no;
        const dept=req.dept;
        if(reg_no==='91762115000'){
          return res.json({Status:"Success",stud_details:{regno:reg_no}})
        }
        console.log(dept);
          let dept_table=dept+"_stud_details";
    const [[dash]]= await pool.query(
        `
        select *
        from ??
        where regno=?
        `,
      [dept_table,reg_no]
    );
    // dash.department=dept.toUpperCase()
    return res.json({Status:"Success",stud_details:dash})

}catch(error){
    console.log(error);
}
};

module.exports={
    dashboard
}