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


module.exports={
    res_publish
}