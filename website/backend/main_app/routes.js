const express = require('express');
const router = express.Router();
const {login,verifyUser,logout,reset}=require("./auth.js")
const {sendOTP,validateOTP}=require("./otp.js")
const {dashboard}=require("./protected_routes.js")
const {get_Tables,excel_to_SQL}=require("./admin.js")

router.post('/api/login',login)

router.get('/api/logout',verifyUser,logout)

router.get('/api/dashboard',verifyUser,dashboard)

router.post('/api/send-otp',sendOTP)

router.post('/api/validate-otp',validateOTP)

router.post('/api/reset-pswd',reset)

router.post('/api/gettables',get_Tables)

app.post('/api/exceltosql', upload.single('file'),excel_to_SQL);

module.exports = router;