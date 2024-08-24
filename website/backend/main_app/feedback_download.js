const express = require('express');
const puppeteer = require('puppeteer');
const pool = require('./db'); // Assuming this is correctly set up
const nodemailer = require('nodemailer');
const fs = require('fs'); // Import the fs module if needed
require('dotenv').config(); // Import dotenv to manage environment variables

const app = express();
app.use(express.json()); // To handle JSON payloads

// HTML template functions for each feedback type
const getSupplierFeedbackTemplate = (feedbackData) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supplier Feedback</title>
    <style>
          body {
            font-family: Arial, sans-serif;
            margin: 15px;
            font-size:10px;
            font-weight:unset;
        }
        h1 {
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            table-layout: auto; /* Makes columns evenly spaced */
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 2px;
            text-align: left;
          
        }
        th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
    <h1>Supplier Feedback Summary</h1>
    <div class="table-container">
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
    </div>
</body>
</html>
`;

const getParentsFeedbackTemplate = (feedbackData) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parents Feedback</title>
    <style>

  body {
            font-family: Arial, sans-serif;
            margin: 15px;
            
            font-size: 10px;
            font-weight: unset;
        }

        h1 {
            color: #333;
        }

        /* Container to enable horizontal scrolling */
        .table-container {
            overflow-x: auto;
            padding-left: 15px; /* Add left margin */
    padding-right: 15px; /* Add right margin */
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            table-layout: auto; /* Ensures the table layout is fixed for better control */
        }

        table, th, td {
            border: 1px solid #ddd;
        }

        th, td {
            padding: 2px;
            text-align: left;
            // word-break: break-word; 
        }

        th {
            background-color: #f4f4f4;
          }

        // td {
        //     white-space: nowrap; 
        //     overflow: hidden; 
        // }

        @media print {
            body {
                margin: 10px; /* Remove margin to utilize the full printable area */
                font-size: 8px; /* Reduce font size for better fit in PDF */
            }

            .table-container {
                overflow-x: visible; /* Ensure full table is printed */
               padding-left: 15px; /* Add left margin */
    padding-right: 15px; /* Add right margin */
            }
  table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            table-layout: auto; /* Ensures the table layout is fixed for better control */
        }

            th, td {
                font-size: 8px; /* Reduce font size for better fit */
                padding: 2px 4px; /* Adjust padding for space optimization */
                overflow: visible; /* Allow content overflow if necessary */
            }

            thead {
                display: table-header-group; /* Repeat header on each page */
            }

            tfoot {
                display: table-footer-group; /* Optionally add footer if needed */
            }
        }

    </style>
</head>
<body>
    <h1>Parents Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    <table>
        <tr>
            <th>Student Name</th>
            <th>Register Number</th>
            <th>Branch</th>
            <th>Passed Out Year</th>
            <th>Infrastructure</th>
            <th>College Ambience</th>
            <th>Authority Approachability</th>
            <th>Hostel Facilities</th>
            <th>Library & Sports Facilities</th>
            <th>Security & Safety Measures</th>
            <th>Faculty Academic Skills</th>
            <th>Learning Experience</th>
            <th>Environment Diversity</th>
            <th>Placement Opportunities</th>
            <th>Technical Knowledge Improvement</th>
            <th>College Environment Development</th>
        </tr>
        ${feedbackData.map(row => `
        <tr>
            <td>${row.student_name}</td>
            <td>${row.register_number}</td>
            <td>${row.branch}</td>
            <td>${row.passed_out_year}</td>
            <td>${row.infrastructure_facilities}</td>
            <td>${row.college_ambience}</td>
            <td>${row.authority_approachability}</td>
            <td>${row.hostel_facilities}</td>
            <td>${row.library_sports_facilities}</td>
            <td>${row.security_safety_measures}</td>
            <td>${row.faculty_academic_skills}</td>
            <td>${row.learning_experience}</td>
            <td>${row.environment_diversity}</td>
            <td>${row.placement_opportunities}</td>
            <td>${row.technical_knowledge_improvement}</td>
            <td>${row.college_environment_development}</td>
        </tr>`).join('')}
    </table>
</body>
</html>
`;

const generatePdfAndSendEmail = async (req, res) => {
    const { option } = req.body;

    try {
        let feedbackData;
        let htmlContent;

        // Fetch data based on the selected option
        switch (option) {
            case 'supplier':
                [feedbackData] = await pool.query('SELECT * FROM SupplierFeedback');
                htmlContent = getSupplierFeedbackTemplate(feedbackData);
                break;
            case 'parents':
                [feedbackData] = await pool.query('SELECT * FROM ParentsFeedback');
                htmlContent = getParentsFeedbackTemplate(feedbackData);
                break;
            default:
                return res.status(400).send('Invalid option selected.');
        }

        if (feedbackData.length === 0) {
            throw new Error("No data available to generate PDF.");
        }

        const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        const page = await browser.newPage();
        await page.setContent(htmlContent);
        const pdfBuffer = await page.pdf({ format: 'A4' });
        await browser.close();

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${option}-feedback.pdf"`);
        res.send(pdfBuffer);

        console.log("Sending email...");
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "acgcet25@gmail.com",

                pass: "aimykdsvzkgbkqag", // Use environment variable for password
            },
            connectionTimeout: 10000, // 10 seconds timeout
            socketTimeout: 10000, // 10 seconds timeout
        });

        const mailOptions = {
            from: 'mohanamala07gmail.com',
            to:'mohanamala07@gmail.com' ,
            subject: `${option.charAt(0).toUpperCase() + option.slice(1)} Feedback PDF`,
            text: 'Please find the attached Feedback PDF.',
            attachments: [
                {
                    filename: `${option}-feedback.pdf`,
                    content: pdfBuffer // Attach the generated PDF from buffer
                },
            ],
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully.");

        // Finally, truncate the table after sending the email
        console.log(`Truncating ${option.charAt(0).toUpperCase() + option.slice(1)}Feedback table...`);
        await pool.query(`TRUNCATE TABLE ${option.charAt(0).toUpperCase() + option.slice(1)}Feedback`);
        console.log("Table truncated successfully.");

    } catch (error) {
        console.error('Error during PDF generation:', error);
        res.status(500).send('Failed to generate the file.');
    }
}
module.exports = {
    generatePdfAndSendEmail,
};
app.post('/api/generate_pdf', generatePdfAndSendEmail);

// app.listen(3001, () => {
//     console.log('Server is running on port 3001');
// });
