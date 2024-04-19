// const pdf=require('html-pdf');
const puppeteer = require('puppeteer');
const pdftemplate= require("./marksheet_template.js")
const pool = require("./db.js");

var reg_no,sem_no,sem_subs,stud_dept;

//name,dept,dob,reg_no,batch,gender

const res_publish= async (req,res)=>{
    try {
        const {regno,dept}=req.body;
        const res_publish_table=dept+"_publish"
        const [res_pub]= await pool.query(
            `
            select * 
            from ??
            where regno=?
            order by sem desc
            `,
            [res_publish_table,regno]
        )
        stud_dept=dept
        reg_no=regno
        sem_no=res_pub[0].current_sem
        sem_subs=res_pub
        res.status(200).send(res_pub)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}

const res_result= async (req,res)=>{
    try {
        const {regno,dept,sem}=req.body;
        console.log(regno,dept,sem)
        const res_result_table=dept+"_results"
        const [res_res]= await pool.query(
            `
            select *
            from ??
            where regno=? and current_sem=?
            `,
            [res_result_table,regno,sem]
        )
        stud_dept=dept
        reg_no=regno
        sem_no=res_res[0].current_sem
        sem_subs=res_res
        console.log(res_res)
        res.status(200).send(res_res)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}

const get_sem_list= async(req,res)=>{
    try {
        const {regno,dept}=req.body;
        const res_table=dept+"_results"
        const [sems]= await pool.query(
            `
            select distinct(current_sem)
            from ??
            where regno=?
            `,
            [res_table,regno]
        )
        res.status(200).send(sems)
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }
}

const download_prov_marksheet=async(req,res)=>{
    try {
        const bg=req.body.bgimage;
        let dept_table = stud_dept + "_stud_details";
        const [[student_details]] = await pool.query(
            `
            select studentname,dob,gender,batch,cgpa
            from ??
            where regno=?
            `,
            [dept_table, reg_no]
        );
        const { studentname, dob, gender, batch, cgpa } = student_details;

        // Launch a headless browser instance using Puppeteer
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Generate the HTML content using the template function
        const htmlContent = pdftemplate({ studentname, stud_dept, dob, reg_no, batch, gender, cgpa, sem_no, sem_subs,bg });

        // Set the HTML content on the Puppeteer page
        await page.setContent(htmlContent);

        // Generate the PDF file
        const pdfBuffer = await page.pdf();

        // Set HTTP headers for download
        const filename = `${reg_no}_Sem${sem_no}.pdf`;
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

        // Send the PDF buffer as response
        res.send(pdfBuffer);

        // Close the browser instance
        await browser.close();
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error });
    }
}

module.exports={
    res_publish,
    get_sem_list,
    res_result,
    download_prov_marksheet
}