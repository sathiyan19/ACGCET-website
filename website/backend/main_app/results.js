const pool = require("./db.js");

const res_publish= async (req,res)=>{
    try {
        const {regno,dept}=req.body;
        console.log(regno,dept)
        const res_publish_table=dept+"_publish"
        const [res_pub]= await pool.query(
            `
            select * 
            from ??
            where regno=?
            `,
            [res_publish_table,regno]
        )
        console.log(res_pub)
        res.status(200).send(res_pub)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}

const res_result= async (req,res)=>{
    try {
        const {regno,dept,sem}=req.body;
        console.log(regno,dept,sem)
        const res_result_table=dept+"_results"
        const [res_res]= await pool.query(
            `
            select * 
            from ??
            where regno=? , sem=?
            `,
            [res_result_table,regno,sem]
        )
        console.log(res_res)
        res.status(200).send(res_res)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}


module.exports={
    res_publish,res_result
}