
const subjects_list=require('./subjects')
const pdftemplate=({studentname,stud_dept,dob,reg_no,batch,gender,cgpa,sem_no,sem_subs,bg})=>{
    const today= new Date();
    const sub_dept=stud_dept+'_subs'
    var tableRows='';
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
    return `

    <!doctype html>
    <html>
        <head>
            <meta charSet='utf-8'/>
            <title>Certificate</title>
            <style>
                
.certificate{
    width: 575px;
    height: 818px;
    padding: 5px;
    background-color: #f1f1f1;
}
.certificate_layout{
  background-image:url('${imgpath}');
  background-repeat: no-repeat;
  background-position: center;
  background-size:contain;
  border: 2px solid black;
  width: 565px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position:relative;
    /* align-items: center; */
}

.cert_head{
    font-size: 15px;
    text-align:center;
    letter-spacing: .1ch;
    font-weight: 500;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cert_sub_head{
    font-size: 15px;
    font-weight: 100;
}

.cert_sub_text{
    font-size: 12px;
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
  font-size: 10px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.cert-td-head{
  text-align: center;
  padding: 10px;
  line-height: 1rem;
  color: black;
  white-space: pre-line;
  font-size: 10px;
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
  ont-family: Arial, Helvetica, sans-serif;
   border-collapse: collapse;
   width: 100%;
   position:absolute;
   bottom:0;
}
.cert-th{
  /* border: 1px solid #dddddd; */
    color: #00134d;
    padding: 10px;
    text-align: center;
    font-size: 10px;
}
.cert-td{
  /* border:1px #dddddd solid; */
    text-align: center;
    padding: 2px;
    line-height: 1rem;
    color: black;
    white-space: pre-line;
    font-size: 10px;
    font-weight: 600;
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
  font-size: 12px;
  margin-top: 5px;
  color: #00134d;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


.cert-sem{
  font-size: 14px !important;
  text-align:center;
  font-weight: 600;
  color: #00134d;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
            </style>
        </head>
        <body>
        <div class='certificate'>
      <div class='certificate_layout'>
        <div class="cert-top">
        <div class='cert_head'>Alagappa Chettiar Government College Of</div>
        <div class='cert_head'>Engineering and Technology-Karaikudi</div>
        <div class='cert_sub_text'>Provisional Marksheet</div>
        <div class="cert-res-head">
        <table class="cert-table1">
                <tr class="cert-tr-head">
                    <th class="cert-th1">Name:</th>
                    <th class="cert-th1">Dept:</th>
                    <th class="cert-th1">DOB:</th>
                </tr>
                <tr>
                    <td class="cert-td-head">${studentname}</td>
                    <td class="cert-td-head">${stud_dept}</td>
                    <td class="cert-td-head">${dob}</td>
                </tr>
            </br>
                <tr class="cert-tr-head">
                    <th class="cert-th1">Register no:</th>
                    <th class="cert-th1">Batch:</th>
                    <th class="cert-th1">Gender:</th>
                </tr>
                <tr>
                    <td class="cert-td-head">${reg_no}</td>
                    <td class="cert-td-head">${batch}</td>
                    <td class="cert-td-head">${gender}</td>
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

    <div class="cert-grade">
        <p class="cert-cgpa"><div class="cert-cgpa-div">CGPA: ${cgpa}</div></p>
    </div>
</div>

<table class="cert-table2">
    <tr>
        <td class="cert-td-head">Date:${today.getDate()}-${today.getMonth()}-${today.getFullYear()}</td>
        <td class="cert-td-head">Signature of the Candidate</td>
        <td class="cert-td-head">Controller Of Examination</td>
    </tr>
</table>
        </body>
    </html>
    `
  };
module.exports = pdftemplate;
