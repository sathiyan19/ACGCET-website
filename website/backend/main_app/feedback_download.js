const pool = require("./db.js");
const express = require('express');
const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// Initialize Express app
const app = express();
const port = 5000;

// HTML template function for the PDF
const getPdfTemplate = (feedbackData) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supplier Feedback</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
    <h1>Supplier Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    
    <table>
        <tr>
            <th>Supplier Name</th>
            <th>Product Supplied</th>
            <th>Branch</th>
            <th>Procurement Process</th>
            <th>Payment Process</th>
            <th>Staff Professionalism</th>
            <th>Receipt Process</th>
            <th>Paperwork Process</th>
            <th>Communication Efficiency</th>
            <th>Ethical Practices</th>
            <th>Business Relationship</th>
        </tr>
        ${feedbackData.map(row => `
        <tr>
            <td>${row.supplier_name}</td>
            <td>${row.product_supplied}</td>
            <td>${row.branch}</td>
            <td>${row.procurement_process}</td>
            <td>${row.payment_process}</td>
            <td>${row.staff_professionalism}</td>
            <td>${row.receipt_process}</td>
            <td>${row.paperwork_process}</td>
            <td>${row.communication_efficiency}</td>
            <td>${row.ethical_practices}</td>
            <td>${row.business_relationship}</td>
        </tr>`).join('')}
    </table>
</body>
</html>
`;

// Function to fetch data, generate PDF, truncate the table, and send email
async function generatePdfAndSendEmail() {
    // Fetching the data from the SupplierFeedback table
    const [rows] = await pool.query('SELECT * FROM SupplierFeedback');

    // Create HTML content using the template
    const htmlContent = getPdfTemplate(rows);

    // Generate PDF using Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    // Save PDF to file
    const pdfPath = path.join(__dirname, 'supplier-feedback.pdf');
    fs.writeFileSync(pdfPath, pdfBuffer);

    // Truncate the SupplierFeedback table
    await pool.query('TRUNCATE TABLE SupplierFeedback');

    // Send PDF via email using Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password',
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'admin-email@example.com',
        subject: 'Supplier Feedback PDF',
        text: 'Please find the attached Supplier Feedback PDF.',
        attachments: [
            {
                filename: 'supplier-feedback.pdf',
                path: pdfPath,
            },
        ],
    };

    await transporter.sendMail(mailOptions);
}

// Route to handle PDF generation, table truncation, and email sending
const generate_pdf = async (req, res) => {
    try {
        await generatePdfAndSendEmail();
        res.status(200).send('PDF generated, table truncated, and email sent!');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Failed to generate PDF and send email.');
    }
};

// Start the Express server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
module.exports={
    generate_pdf

};