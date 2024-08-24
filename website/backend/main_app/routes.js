const express = require('express');
const router = express.Router();
const multer = require('multer');
const {generatePdfAndSendEmail}= require("./feedback_download.js")
const {ratingsubmit,parentsfeedbackSubmit, EmployeeFeedbackSubmit} =require("./feedback.js")
const {login,login_verify,verifyUser,logout,reset}=require("./auth.js")
const {sendOTP,validateOTP, sendquery}=require("./otp.js")
const {dashboard}=require("./protected_routes.js")
const {cv_details}=require("./cert_verify.js")
const {res_publish, res_result,get_sem_list,download_prov_marksheet}=require("./results.js")
const {get_Tables,excel_to_SQL}=require("./admin.js")

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/api/login',login)

router.get('/api/login_verification',login_verify)

router.get('/api/logout',verifyUser,logout)

router.get('/api/dashboard',verifyUser,dashboard)

router.post('/api/cv_details',cv_details)

router.post('/api/send-otp',sendOTP)

router.post('/api/validate-otp',validateOTP)

router.post('/api/reset-pswd',reset)

router.post('/api/gettables',get_Tables)

router.post('/api/respublish',verifyUser,res_publish)

router.post('/api/resresult',res_result)

router.post('/api/getsemlist',get_sem_list)

router.post('/api/sendquery',sendquery)
router.post('/api/parentsfeedbacksubmit', parentsfeedbackSubmit)
router.post('/api/ EmployeeFeedbackSubmit',  EmployeeFeedbackSubmit)

router.post('/api/supplier_ratingsubmit',supplier_ratingsubmit);

router.post('/api/consultancy_ratingsubmit',consultancy_ratingsubmit);

router.post('/api/collaborator_ratingsubmit',collaborator_ratingsubmit);

router.post('/api/generate_pdf',generatePdfAndSendEmail);

router.post('/api/download_marksheet',download_prov_marksheet)

router.post('/api/exceltosql', upload.single('file'),excel_to_SQL);

module.exports = router;