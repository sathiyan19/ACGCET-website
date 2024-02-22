const express = require('express');
const router = express.Router();
const multer = require('multer');
const {login,verifyUser,logout,reset}=require("./auth.js")
const {sendOTP,validateOTP}=require("./otp.js")
const {dashboard}=require("./protected_routes.js")
const {res_publish, res_result}=require("./results.js")
const {get_Tables,excel_to_SQL}=require("./admin.js")

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/api/login',login)

router.get('/api/logout',verifyUser,logout)

router.get('/api/dashboard',verifyUser,dashboard)

router.post('/api/send-otp',sendOTP)

router.post('/api/validate-otp',validateOTP)

router.post('/api/reset-pswd',reset)

router.post('/api/gettables',get_Tables)

router.post('/api/respublish',res_publish)

router.post('/api/resresult',res_result)

router.post('/api/exceltosql', upload.single('file'),excel_to_SQL);

module.exports = router;