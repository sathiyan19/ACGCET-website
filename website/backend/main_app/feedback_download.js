const express = require('express');
const mysql = require('mysql');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'your_database'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// Endpoint to truncate the data
app.post('/api/truncate-data', (req, res) => {
    const query = 'TRUNCATE TABLE SupplierFeedback';

    db.query(query, (err, result) => {
        if (err) {
            console.error('Error truncating data:', err);
            return res.status(500).send('Error truncating data');
        }
        res.send('Data truncated successfully');
    });
});

// Endpoint to generate the PDF
app.post('/api/generate-pdf', async (req, res) => {
    const {
        supplier_name,
        product_supplied,
        branch,
        procurement_process,
        payment_process,
        staff_professionalism,
        receipt_process,
        paperwork_process,
        communication_efficiency,
        ethical_practices,
        feedback_date
    } = req.body;

    const html = fb_pdftemplate({
        supplier_name,
        product_supplied,
        branch,
        procurement_process,
        payment_process,
        staff_professionalism,
        receipt_process,
        paperwork_process,
        communication_efficiency,
        ethical_practices,
        feedback_date
    });

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(html);
        const buffer = await page.pdf({ format: 'A4' });
        await browser.close();

        res.setHeader('Content-Disposition', 'attachment; filename=Supplier_Feedback_Report.pdf');
        res.setHeader('Content-Type', 'application/pdf');
        res.send(buffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
