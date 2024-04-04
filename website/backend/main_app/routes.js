const express = require('express');
const router = express.Router();
const {login,verifyUser,logout,reset}=require("./auth.js")
const {sendOTP,validateOTP}=require("./otp.js")
const {dashboard}=require("./protected_routes.js")

router.post('/api/login',login)

router.get('/api/logout',verifyUser,logout)

router.get('/api/dashboard',verifyUser,dashboard)

router.post('/api/send-otp',sendOTP)

router.post('/api/validate-otp',validateOTP)

router.post('/api/reset-pswd',reset)

module.exports = router;