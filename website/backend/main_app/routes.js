const express = require('express');
const router = express.Router();
const {login,verifyUser,logout}=require("./auth.js")
const {dashboard}=require("./protected_routes.js")

router.post('/api/login',login)

router.get('/api/logout',verifyUser,logout)

router.get('/api/dashboard',verifyUser,dashboard)

module.exports = router;