

const dashboard=(req,res)=>{
    return res.json({Status:"Success",reg_no:req.reg_no})
}

module.exports={
    dashboard
}