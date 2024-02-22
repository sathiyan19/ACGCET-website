const pool = require("./db.js");

const res_publish= async (req,res)=>{
    try {
        const {regno,dept}=req.body;
        // console.log(regno,dept)
        const res_publish_table=dept+"_publish"
        const [res_pub]= await pool.query(
            `
            select * 
            from ??
            where regno=?
            `,
            [res_publish_table,regno]
        )
        // console.log(res_pub)
        res.status(200).send(res_pub)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}

const get_sem_list= async(req,res)=>{
    try {
        const {regno,dept}=req.body;
        const res_table=dept+"_results"
        const [[sems]]= await pool.query(
            `
            select min(sem) as min,max(sem) as max
            from ??
            where regno=?
            `,
            [res_table,regno]
        )
        console.log(sems)
        res.status(200).send(sems)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}


module.exports={
    res_publish,
    get_sem_list
}