const fs = require('fs');
const path = require('path');
global.appRoot = path.resolve(__dirname);


const {generate_QR}= require("./qr_gen.js")
const subjects_list = require('./subjects');

const pdftemplate = ({ studentname, stud_dept, dob, reg_no, batch, gender, cgpa, sem_no, sem_subs,verification_link }) => {
  const today = new Date();
  const sub_dept = stud_dept + '_subs';
  var tableRows = '';
  var QR_base64=generate_QR(verification_link)
  const dataUri = `data:image/png;base64,${QR_base64}`
  sem_subs.forEach(subject => {
    tableRows += `
          <tr class="cert-tr">
              <td class="cert-td">${subject.subcode}</td>
              <td class="cert-td">${subjects_list[sub_dept][subject.subcode].subname}</td>
              <td class="cert-td">${subjects_list[sub_dept][subject.subcode].credits}</td>
              <td class="cert-td">${subject.grade}</td>
              <td class="cert-td">${subject.result}</td>
          </tr>
      `;
  });


  return `<!doctype html>
  <html>
      <head>
          <meta charSet='utf-8'/>
          <title>Certificate</title>
          <style>
            .certificate {
              width: 575px;
              height: 818px;
              padding: 5px;
              
            }
            .certificate_layout {
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              border: 2px solid black;
              width: 765px;
              height: 1090px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              position: relative;
            }

.cert_head{
    font-size: 20px;
    text-transform:uppercase;
    text-align:center;
    letter-spacing: .1ch;
    font-weight: 500;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cert_sub_head{
  margin-top:15px;
    font-size: 14px;
    font-weight: 100;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align:center;
    
}    

.cert_sub_text{
    font-size: 20px;
    text-align:center;
    text-transform: uppercase;
    margin-top: 20px;
    letter-spacing: 0.6ch;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.cert-tr-head{
  color: #00134d;
  padding: 10px;
  text-align: center;
  font-size: 13px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.cert-td-head{
  text-align: center;
  padding: 10px;
  line-height: 1rem;
  color: black;
  white-space: pre-line;
  font-size: 14px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.cert-heading{
    margin-bottom: 10px;
  font-weight:600 ;
  color: #00134d !important;
  font-size: 10px !important;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.cert-personal1{
    margin-top: 10px;
    font-size: 8px !important;
  }
  .cert-personal2{
    margin-top: 10px;
    font-size: 8px !important;
  }
  .cert-personal3{
    margin-top: 10px;
    font-size: 8px !important;
  }
.cert-table1{
  font-family: Arial, Helvetica, sans-serif;
   border-collapse: collapse;
   width: 100%;
}
.cert-table2{
  font-family: Arial, Helvetica, sans-serif;
   border-collapse: collapse;
   width: 100%;
   position:absolute;
   bottom:0;
   margin-bottom:20px;
}
.cert-th{
  /* border: 1px solid #dddddd; */
    color: #00134d;
    padding: 15px;
    text-align: center;
    font-size: 15px;
}
.cert-td{
  /* border:1px #dddddd solid; */
    text-align: center;
    padding: 2px;
    line-height: 1rem;
    color: black;
    white-space: pre-line;
    font-size: 15px;
    font-weight: 600;
}
.cert-td-foot{
  text-align:center;
  font-size:20px:
  font-weight:500;
  color:black;
}
.cert-footer{
  display: flex;
  margin-top: 40px;
  font-weight: 600;
  justify-content: space-between;
  align-items: center;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.cert-footer-div1-p{
  font-size: 12px;
}
.cert-footer-div2-p{
  font-size: 12px;
}
.cert-footer-div3-p{
  font-size: 12px;
}
.cert-footer-div2{
  margin-top: 20px;
}
.cert-footer-div3{
  margin-top: 20px;
}
.cert-grade{
  display: flex;
  text-align:center;
  font-size: 16px;
  margin-top: 5px;
  color: #00134d;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


.cert-sem{
  font-size: 20px !important;
  text-align:center;
  font-weight: 600;
  color: #00134d;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.cert-top{
  margin-top:25px
}
.sec2{
  text-align:left !important;
}
.cert-eos{
  text-align:center !important;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.cert-disclaimer{
  display:flex;
  justify-content:justify;
  text-align:center;
  padding:5px;
  margin-bottom:90px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size:12px;
  background-color:#f1f1f1;
}
.cert_qr_code{
  width:80px;
  height:80px;
}
            </style>
        </head>
        <body>
        <div class='certificate'>
      <div class='certificate_layout'>
        <div class="cert-top">
        <div class='cert_head'>Alagappa Chettiar Government College Of</div>
        <div class='cert_head'>Engineering and Technology,Karaikudi-630003</div>
        <div class='cert_sub_head'>(A Government Autonomous Institution Affiliated to Anna University)</div>
        <div class='cert_sub_text'>Provisional Gradesheet</div>
        <div class="cert-res-head">
        <table class="cert-table1">
                <tr class="cert-tr-head">
                    <th class="cert-th1">Name</th>
                    <th class="cert-th1 sec2">Dept</th>
                    <th class="cert-th1 sec2">DOB</th>
                </tr>
                <tr>
                    <td class="cert-td-head">${studentname}</td>
                    <td class="cert-td-head sec2">${stud_dept}</td>
                    <td class="cert-td-head sec2">${dob}</td>
                </tr>
            </br>
                <tr class="cert-tr-head">
                    <th class="cert-th1">Register no</th>
                    <th class="cert-th1 sec2">Batch</th>
                    <th class="cert-th1 sec2">Gender</th>
                </tr>
                <tr>
                    <td class="cert-td-head">${reg_no}</td>
                    <td class="cert-td-head sec2">${batch}</td>
                    <td class="cert-td-head sec2">${gender}</td>
                </tr>
            </table>

    </div>
    <p class="cert-sem">Semester ${sem_no}</p>
 
        <table class="cert-table1">
            <tr class="cert-tr">
                <th class="cert-th">Subject code</th>
                <th class="cert-th">Subject name</th>
                <th class="cert-th">Grade Points</th>
                <th class="cert-th">Grade</th>
                <th class="cert-th">Result</th>
            </tr>
            ${tableRows}
            
        </table>
<div class="cert-eos">*************End-of-Statement************</div>
    <div class="cert-grade">
        <p class="cert-cgpa"><div class="cert-cgpa-div">CGPA: ${cgpa}</div></p>
    </div>
    
</div>

<table class="cert-table2">
<div class="cert-disclaimer">**********<p>Please be aware that this document is a provisional gradesheet and does not confer any official status. It is issued temporarily until the original certificate is issued. Users are advised to exercise caution and verify the marks by scanning the QR code.</p>**********
<img class="cert_qr_code" src="${dataUri}" alt="Base64 Image">
</div>
    <tr>
        <td class="cert-td-foot">Date:${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}</td>
        <td class="cert-td-foot">Signature of the Candidate</td>
        <td class="cert-td-foot">Controller Of Examination</td>
    </tr>
</table>
        </body>
    </html>
    `
  };
module.exports = pdftemplate;