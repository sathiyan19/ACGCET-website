const express = require('express');
const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const pool = require('./db'); // Assuming this is correctly set up

// Initialize Express app
const app = express();

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

// Function to fetch data, generate PDF, send email, and truncate the table
const generatePdfAndSendEmail = async (req, res) => {
    try {
        console.log("Fetching data from the database...");
        const [rows] = await pool.query('SELECT * FROM SupplierFeedback');
        console.log("Fetched data:", rows);

        if (rows.length === 0) {
            throw new Error("No data available to generate PDF.");
        }

        console.log("Generating PDF...");
        const htmlContent = getPdfTemplate(rows);

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(htmlContent);
        const pdfBuffer = await page.pdf({ format: 'A4' });
        const pdfPath = path.join(__dirname, 'supplier-feedback.pdf');
        fs.writeFileSync(pdfPath, pdfBuffer);
        await browser.close();
        console.log("PDF generated successfully.");

        // Set headers for file download
        const filename = `feedback.pdf`;
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

        // Send the PDF buffer as response
        res.send(pdfBuffer);

        // After sending the response, proceed to send the email
        console.log("Sending email...");
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Set secure to false for STARTTLS
            auth: {
                user: "acgcet25@gmail.com",
                pass: "aimykdsvzkgbkqag", // Use an App Password
            },
            connectionTimeout: 10000, // 10 seconds timeout
            socketTimeout: 10000, // 10 seconds timeout
        });

        const mailOptions = {
            from: 'acgcet25@gmail.com',
            to: 'acgcet25@gmail.com',
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
        console.log("Email sent successfully.");

        // Finally, truncate the table after sending the email
        console.log("Truncating SupplierFeedback table...");
        await pool.query('TRUNCATE TABLE SupplierFeedback');
        console.log("Table truncated successfully.");

        // Optionally remove the file after sending it and sending the email
        fs.unlink(pdfPath, (err) => {
            if (err) console.error("Error removing file:", err);
        });

    } catch (error) {
        console.error('Error during PDF generation, email sending, or truncating table:', error);
        res.status(500).send('Failed to complete the operation.');
    }
}

// Route to handle PDF generation, email sending, and table truncation
app.post('/api/generate_pdf', generatePdfAndSendEmail);

// Export the function for testing or other purposes
module.exports = {
    generate_pdf: generatePdfAndSendEmail,
};
