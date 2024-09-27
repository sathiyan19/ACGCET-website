const express = require('express');
const puppeteer = require('puppeteer');
const pool = require('./db'); // Assuming this is correctly set up
const nodemailer = require('nodemailer');
const fs = require('fs'); // Import the fs module if needed
require('dotenv').config(); // Import dotenv to manage environment variables

const app = express();
app.use(express.json()); // To handle JSON payloads

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
            margin: 30px; /* Added margin for the whole page */
            font-size: 10px; /* Adjusted font size for readability */
        }
        h1 {
            color: #333;
        }
             .bordered-container {
            margin: 30px; /* Added margin around the border */
            padding: 20px; /* Padding inside the border */
            border: 2px solid #000; /* Black border */
            border-radius: 10px; /* Rounded corners */
        }

        .title-container {
            text-align: center;
            margin-top: 50px; /* Top margin for title */
            margin-bottom: 40px; /* Bottom margin for title */
        }
        .title-container h2 {
            font-size: 24px;
            line-height: 1; /* Adjusted line-height for tighter spacing */
            margin: 0; /* Removed default margin for individual h2 */
        }
        // .page-break {
        //     page-break-before: always;
        // }
        @media print {
            // .page-break {
            //     page-break-before: always;
            //     padding-top: 20px; /* Add padding at the top of new pages */
            // }
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
            padding: 8px; /* Reduced padding to save space */
            text-align: left;
            word-wrap: break-word; /* Enable word wrapping */
        }
        th {
            background-color: #f4f4f4;
            color: #333;
            font-weight: bold;
        }
        tbody tr:nth-child(even) {
            background-color: #f9f9f9; /* Alternate row color */
        }
        tbody tr:hover {
            background-color: #e0e0e0; /* Highlight row on hover */
        }
        .question-column {
            width: 50%; /* Adjusted width for better balance */
        }
        .points-column {
            width: 50%; /* Adjusted width for better balance */
            text-align: center;
        }
        .table-container {
            margin-bottom: 20px; /* Consistent margin for separation */
        }
    </style>
</head>
<body>
<div class="bordered-container">
    <div class="title-container">
        <h2>ALAGAPPA CHETTIAR GOVERNMENT COLLEGE OF </h2>
        <h2>ENGINEERING AND TECHNOLOGY KARAIKUDI-630003</h2>
        <h2>(A Government Autonomous Institution Affiliated to Anna University)</h2>
    </div>

    <h1>Supplier Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    
    ${feedbackData.map((row, index) => 
    `<div class="table-container ${index > 0 ? 'page-break' : ''}">
        <h2>Feedback #${index + 1}</h2>
        <table>
            <thead>
                <tr>
                    <th class="question-column">Question</th>
                    <th class="points-column">Points Given</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Supplier Name</td>
                    <td>${row.supplier_name}</td>
                </tr>
                <tr>
                    <td>Product Supplied</td>
                    <td>${row.product_supplied}</td>
                </tr>
                <tr>
                    <td>Branch</td>
                    <td>${row.branch}</td>
                </tr>
                <tr>
                    <td>Procurement Process</td>
                    <td>${row.procurement_process}</td>
                </tr>
                <tr>
                    <td>Payment Process</td>
                    <td>${row.payment_process}</td>
                </tr>
                <tr>
                    <td>Staff Professionalism</td>
                    <td>${row.staff_professionalism}</td>
                </tr>
                <tr>
                    <td>Receipt Process</td>
                    <td>${row.receipt_process}</td>
                </tr>
                <tr>
                    <td>Paperwork Process</td>
                    <td>${row.paperwork_process}</td>
                </tr>
                <tr>
                    <td>Communication Efficiency</td>
                    <td>${row.communication_efficiency}</td>
                </tr>
                <tr>
                    <td>Ethical Practices</td>
                    <td>${row.ethical_practices}</td>
                </tr>
                <tr>
                    <td>Business Relationship</td>
                    <td>${row.business_relationship}</td>
                </tr>
            </tbody>
        </table>
    </div>`
    ).join('')}
    </div>
</body

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
            font-size: 10px; /* Adjusted font size for readability */
        }
        h1 {
            color: #333;
        }
              h2 {
        font-size: 24px;
        margin-top: 5px; /* Reduced top margin for smaller gap */
        margin-bottom: 15px; /* Reduced bottom margin for smaller gap */
        line-height: 1; /* Adjusted line-height for tighter spacing */
        text-align: center; /* Center the titles */
    }
   .bordered-container {
            margin: 30px; /* Added margin around the border */
            padding: 20px; /* Padding inside the border */
            border: 2px solid #000; /* Black border */
            border-radius: 10px; /* Rounded corners */
        }
        .page-break {
            page-break-before: always;
        }
            .title-container {
            text-align: center;
            margin-top: 50px; /* Top margin for title */
            margin-bottom: 40px; /* Bottom margin for title */
        }
        .title-container h2 {
            font-size: 24px;
            line-height: 1; /* Adjusted line-height for tighter spacing */
            margin: 0; /* Removed default margin for individual h2 */
        }
        @media print {
            .page-break {
                page-break-before: always;
                padding-top: 20px; /* Add padding at the top of new pages */
            }
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td 
        {
            padding: 8px; /* Reduced padding to save space */
            text-align: left;
            word-wrap: break-word; /* Enable word wrapping */
        }
        th 
        {
            background-color: #f4f4f4;
            color: #333;
            font-weight: bold;
        }
        tbody tr:nth-child(even) 
        {
            background-color: #f9f9f9; /* Alternate row color */
        }
        tbody tr:hover {
            background-color: #e0e0e0; /* Highlight row on hover */
        }
        .question-column {
            width: 50%; /* Adjusted width for better balance */
        }
        .points-column {
            width: 50%; /* Adjusted width for better balance */
            text-align: center;
        }
        .table-container {
            margin-bottom: 20px; /* Consistent margin for separation */
        }
    </style>
</head>
<body>
<div class="bordered-container">
  <div class="title-container">
        <h2>ALAGAPPA CHETTIAR GOVERNMENT COLLEGE OF </h2>
        <h2>ENGINEERING AND TECHNOLOGY KARAIKUDI-630003</h2>
        <h2>(A Government Autonomous Institution Affiliated to Anna University)</h2>
    </div>

    <h1>Parents Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    
    ${feedbackData.map((row, index) => 
    `<div class="table-container">
        <h2>Feedback #${index + 1}</h2>
        <table>
            <thead>
                <tr>
                    <th class="question-column">Question</th>
                    <th class="points-column">Points Given</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Student Name</td>
                    <td>${row.student_name}</td>
                </tr>
                <tr>
                    <td>Register Number</td>
                    <td>${row.student_register_number}</td>
                </tr>
                <tr>
                    <td>Branch</td>
                    <td>${row.branch}</td>
                </tr>
                <tr>
                    <td>Passed Out Year</td>
                    <td>${row.passed_out_year}</td>
                </tr>
                <tr>
                    <td>Program</td>
                    <td>${row.programme}</td>
                </tr>
                <tr>
                    <td>Infrastructure</td>
                    <td>${row.infrastructure_facilities}</td>
                </tr>
                <tr>
                    <td>College Ambience</td>
                    <td>${row.college_ambience}</td>
                </tr>
                <tr>
                    <td>Authority Approachability</td>
                    <td>${row.authority_approachability}</td>
                </tr>
                <tr>
                    <td>Hostel Facilities</td>
                    <td>${row.hostel_facilities}</td>
                </tr>
                <tr>
                    <td>Library & Sports Facilities</td>
                    <td>${row.library_sports_facilities}</td>
                </tr>
                <tr>
                    <td>Security & Safety Measures</td>
                    <td>${row.security_safety_measures}</td>
                </tr>
                <tr>
                    <td>Faculty Academic Skills</td>
                    <td>${row.faculty_academic_skills}</td>
                </tr>
                <tr>
                    <td>Learning Experience</td>
                    <td>${row.learning_experience}</td>
                </tr>
                <tr>
                    <td>Environment Diversity</td>
                    <td>${row.environment_diversity}</td>
                </tr>
                <tr>
                    <td>Placement Opportunities</td>
                    <td>${row.placement_opportunities}</td>
                </tr>
                <tr>
                    <td>Technical Knowledge Improvement</td>
                    <td>${row.technical_knowledge_improvement}</td>
                </tr>
                <tr>
                    <td>College Environment Development</td>
                    <td>${row.college_environment_development}</td>
                </tr>
            </tbody>
        </table>
    </div>`
    ).join('')}
    </div>
</body>
</html>
`;

    

const getEmployeeFeedbackTemplate = (feedbackData) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Feedback</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 15px;
            font-size: 10px; /* Increased font size for readability */
        }
            .title-container {
            text-align: center;
            margin-top: 50px; /* Top margin for title */
            margin-bottom: 40px; /* Bottom margin for title */
        }
        .title-container h2 {
            font-size: 24px;
            line-height: 1; /* Adjusted line-height for tighter spacing */
            margin: 0; /* Removed default margin for individual h2 */
        }
        h1 {
            color: #333;
        }
               .bordered-container {
            margin: 30px; /* Added margin around the border */
            padding: 20px; /* Padding inside the border */
            border: 2px solid #000; /* Black border */
            border-radius: 10px; /* Rounded corners */
        }
        .page-break {
            page-break-before: always;
        }
        @media print {
            .page-break {
                page-break-before: always;
                padding-top: 20px; /* Add padding at the top of new pages */
            }
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
            padding: 8px; /* Increased padding for better readability */
            text-align: left;
            word-wrap: break-word; /* Enable word wrapping */
        }
        th {
            background-color: #f4f4f4;
            color: #333;
            font-weight: bold;
        }
        tbody tr:nth-child(even) {
            background-color: #f9f9f9; /* Alternate row color */
        }
        tbody tr:hover {
            background-color: #e0e0e0; /* Highlight row on hover */
        }
        .question-column {
            width: 50%; /* Adjusted width for better balance */
        }
        .points-column {
            width: 50%; /* Adjusted width for better balance */
        }
        .table-container {
            margin-bottom: 20px; /* Consistent margin for separation */
        }
    </style>
</head>
<body>
<div class="bordered-container">
  <div class="title-container">
        <h2>ALAGAPPA CHETTIAR GOVERNMENT COLLEGE OF </h2>
        <h2>ENGINEERING AND TECHNOLOGY KARAIKUDI-630003</h2>
        <h2>(A Government Autonomous Institution Affiliated to Anna University)</h2>
    </div>

    <h1>Employee Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    
    ${feedbackData.map((row, index) => 
    `<div class="table-container ${index > 0 ? 'page-break' : ''}">
        <h2>Feedback #${index + 1}</h2>
        <table>
            <thead>
                <tr>
                    <th class="question-column">Question</th>
                    <th class="points-column">Points Given</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>HR Name</td>
                    <td>${row.hr_name}</td>
                </tr>
                <tr>
                    <td>Company Name</td>
                    <td>${row.company_name}</td>
                </tr>
                <tr>
                    <td>Company Address</td>
                    <td>${row.company_address}</td>
                </tr>
                <tr>
                    <td>Student Name</td>
                    <td>${row.student_name}</td>
                </tr>
                <tr>
                    <td>Programme</td>
                    <td>${row.programme}</td>
                </tr>
                <tr>
                    <td>Branch</td>
                    <td>${row.branch}</td>
                </tr>
                <tr>
                    <td>Year of Joining</td>
                    <td>${row.year_of_joining}</td>
                </tr>
                <tr>
                    <td>Entry Level Position</td>
                    <td>${row.entry_level_position}</td>
                </tr>
                <tr>
                    <td>Current Position</td>
                    <td>${row.current_position}</td>
                </tr>
                <tr>
                    <td>Responsibilities</td>
                    <td>${row.responsibilities}</td>
                </tr>
                <tr>
                    <td>Achievements/Awards</td>
                    <td>${row.achievements_awards}</td>
                </tr>
                <tr>
                    <td>Technical Knowledge</td>
                    <td>${row.technical_knowledge}</td>
                </tr>
                <tr>
                    <td>Communication Skill</td>
                    <td>${row.communication_skill}</td>
                </tr>
                <tr>
                    <td>Independent Thinking</td>
                    <td>${row.independent_thinking}</td>
                </tr>
                <tr>
                    <td>New Technology Inclination</td>
                    <td>${row.new_technology_inclination}</td>
                </tr>
                <tr>
                    <td>Extra Responsibility</td>
                    <td>${row.extra_responsibility}</td>
                </tr>
                <tr>
                    <td>Work Beyond Schedule</td>
                    <td>${row.work_beyond_schedule}</td>
                </tr>
                <tr>
                    <td>Organizational Contribution</td>
                    <td>${row.organizational_contribution}</td>
                </tr>
                <tr>
                    <td>Planning/Organization Skills</td>
                    <td>${row.planning_organization_skills}</td>
                </tr>
                <tr>
                    <td>Leadership Qualities</td>
                    <td>${row.leadership_qualities}</td>
                </tr>
                <tr>
                    <td>Relationship with Seniors</td>
                    <td>${row.relationship_with_seniors}</td>
                </tr>
            </tbody>
        </table>
    </div>`
    ).join('')}
    </div>
</body>
</html>
`;

const getCounsaltancyFeedbackTemplate = (feedbackData) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counsaltancy Feedback</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 15px;
            font-size: 10px; /* Adjusted font size for readability */
        }
            .title-container {
            text-align: center;
            margin-top: 50px; /* Top margin for title */
            margin-bottom: 40px; /* Bottom margin for title */
        }
        .title-container h2 {
            font-size: 24px;
            line-height: 1; /* Adjusted line-height for tighter spacing */
            margin: 0; /* Removed default margin for individual h2 */
        }
               .bordered-container {
            margin: 30px; /* Added margin around the border */
            padding: 20px; /* Padding inside the border */
            border: 2px solid #000; /* Black border */
            border-radius: 10px; /* Rounded corners */
        }
        h1 {
            color: #333;
        }
              h2 {
        font-size: 24px;
        margin-top: 5px; /* Reduced top margin for smaller gap */
        margin-bottom: 15px; /* Reduced bottom margin for smaller gap */
        line-height: 1; /* Adjusted line-height for tighter spacing */
        text-align: center; /* Center the titles */
    }

        // .page-break {
        //     page-break-before: always;
        // }
        @media print {
            .page-break {
                // page-break-before: always;
                padding-top: 20px; /* Add padding at the top of new pages */
            }
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td 
        {
            padding: 8px; /* Reduced padding to save space */
            text-align: left;
            word-wrap: break-word; /* Enable word wrapping */
        }
        th 
        {
            background-color: #f4f4f4;
            color: #333;
            font-weight: bold;
        }
        tbody tr:nth-child(even) 
        {
            background-color: #f9f9f9; /* Alternate row color */
        }
        tbody tr:hover {
            background-color: #e0e0e0; /* Highlight row on hover */
        }
        .question-column {
            width: 50%; /* Adjusted width for better balance */
        }
        .points-column {
            width: 50%; /* Adjusted width for better balance */
            text-align: center;
        }
        .table-container {
            margin-bottom: 20px; /* Consistent margin for separation */
        }
        // @media print {
        //     body {
        //         margin: 10px;
        //         font-size: 8px; 
        //     }
        //     .page-break {
        //         page-break-before: always;
        //         padding-top: 20px; 
        //     }
        //     table {
        //         width: 100%;
        //         border-collapse: collapse;
        //     }
        //     th, td {
        //         font-size: 8px; 
        //         padding: 2px 4px; 
        //     }
        //     thead {
        //         display: table-header-group;
        //     }
        //     tfoot {
        //         display: table-footer-group; 
        //     }
        // }
    </style>
</head>
<body>
<div class="bordered-container">
  <div class="title-container">
        <h2>ALAGAPPA CHETTIAR GOVERNMENT COLLEGE OF </h2>
        <h2>ENGINEERING AND TECHNOLOGY KARAIKUDI-630003</h2>
        <h2>(A Government Autonomous Institution Affiliated to Anna University)</h2>
    </div>

    <h1>Counsaltancy Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    
    ${feedbackData.map((row, index) => 
    `<div class="table-container ${index > 0 ? 'page-break' : ''}">
        <h2>Feedback #${index + 1}</h2>
        <table>
            <thead>
                <tr>
                    <th class="question-column">Question</th>
                    <th class="points-column">Points Given</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Work Undertaking Department</td>
                    <td>${row.work_undertaking_dept}</td>
                </tr>
                <tr>
                    <td>Company Offering</td>
                    <td>${row.company_offering}</td>
                </tr>
                <tr>
                    <td>Nature of Work</td>
                    <td>${row.nature_of_work}</td>
                </tr>
                <tr>
                    <td>Date of Commencement</td>
                    <td>${row.date_of_commencement}</td>
                </tr>
                <tr>
                    <td>Programme</td>
                    <td>${row.programme}</td>
                </tr>
                <tr>
                    <td>Consultancy Fee</td>
                    <td>${row.consultancy_fee}</td>
                </tr>
                <tr>
                    <td>Meeting Deadline</td>
                    <td>${row.meeting_deadline}</td>
                </tr>
                <tr>
                    <td>Work Quality</td>
                    <td>${row.work_quality}</td>
                </tr>
                <tr>
                    <td>Approach</td>
                    <td>${row.approach}</td>
                </tr>
            </tbody>
        </table>
    </div>`
    ).join('')}
    </div>
</body>
</html>
`;

const getCollaboratarFeedbackTemplate = (feedbackData) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Collaborator Feedback</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 15px;
            font-size: 10px; /* Consistent font size with Consultancy */
        }
            .title-container {
            text-align: center;
            margin-top: 50px; /* Top margin for title */
            margin-bottom: 40px; /* Bottom margin for title */
        }
        .title-container h2 {
            font-size: 24px;
            line-height: 1; /* Adjusted line-height for tighter spacing */
            margin: 0; /* Removed default margin for individual h2 */
        }
        h1 {
            color: #333;
            font-size:18px;
        }
               .bordered-container {
            margin: 30px; /* Added margin around the border */
            padding: 20px; /* Padding inside the border */
            border: 2px solid #000; /* Black border */
            border-radius: 10px; /* Rounded corners */
        }
        h2 {
            font-size: 24px;
            margin-top: 5px; /* Reduced top margin */
            margin-bottom: 15px; /* Reduced bottom margin */
            line-height: 1; /* Adjusted line-height */
            text-align: center; /* Center the titles */
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
            padding: 8px; /* Consistent padding */
            text-align: left;
            word-wrap: break-word; /* Enable word wrapping */
        }
        th {
            background-color: #f4f4f4;
            color: #333;
            font-weight: bold;
        }
        tbody tr:nth-child(even) {
            background-color: #f9f9f9; /* Alternate row color */
        }
        tbody tr:hover {
            background-color: #e0e0e0; /* Highlight row on hover */
        }
        .table-container {
            margin-bottom: 20px; /* Consistent margin for separation */
        }
        .question-column {
            width: 50%; /* Adjusted width for balance */
        }
        .points-column {
            width: 50%; /* Adjusted width for balance */
            text-align: center;
        }
        @media print {
            .page-break {
                // page-break-before: always;
                padding-top: 20px; /* Padding at the top of new pages */
            }
        }
    </style>
</head>
<body>
<div class="bordered-container">
  <div class="title-container">
        <h2>ALAGAPPA CHETTIAR GOVERNMENT COLLEGE OF </h2>
        <h2>ENGINEERING AND TECHNOLOGY KARAIKUDI-630003</h2>
        <h2>(A Government Autonomous Institution Affiliated to Anna University)</h2>
    </div>

<h1>Collaborator Feedback Summary</h1>
<p>Date: ${new Date().toLocaleDateString()}</p>

${feedbackData.map((row, index) => 
`<div class="table-container ${index > 0 ? 'page-break' : ''}">
    <h2>Feedback #${index + 1}</h2>
    <table>
        <thead>
            <tr>
                <th class="question-column">Question</th>
                <th class="points-column">Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Project Name</td>
                <td>${row.project_name}</td>
            </tr>
            <tr>
                <td>Funding Agency</td>
                <td>${row.funding_agency}</td>
            </tr>
            <tr>
                <td>Duration</td>
                <td>${row.duration}</td>
            </tr>
            <tr>
                <td>Principal Invigilator</td>
                <td>${row.principal_invigilator}</td>
            </tr>
            <tr>
                <td>Authority Name</td>
                <td>${row.authority_name}</td>
            </tr>
            <tr>
                <td>Proposal Objective</td>
                <td>${row.proposal_objective}</td>
            </tr>
            <tr>
                <td>State Of Art</td>
                <td>${row.state_of_art}</td>
            </tr>
            <tr>
                <td>Methodology And Action Plan</td>
                <td>${row.methodology_and_action_plan}</td>
            </tr>
            <tr>
                <td>Performance Milestone</td>
                <td>${row.performance_milestone}</td>
            </tr>
            <tr>
                <td>Deliverables</td>
                <td>${row.deliverables}</td>
            </tr>
            <tr>
                <td>Estimated Expenditure</td>
                <td>${row.estimated_expenditure}</td>
            </tr>
            <tr>
                <td>Appoinment Of Staffs</td>
                <td>${row.appoinment_of_staffs}</td>
            </tr>
            <tr>
                <td>Completion In Time</td>
                <td>${row.completion_in_time}</td>
            </tr>
            <tr>
                <td>Expected Result</td>
                <td>${row.expected_result}</td>
            </tr>
            <tr>
                <td>Review Performance</td>
                <td>${row.review_performance}</td>
            </tr>
            <tr>
                <td>Project Closure Time</td>
                <td>${row.project_closure_time}</td>
            </tr>
            <tr>
                <td>Literature Collected</td>
                <td>${row.literature_collected}</td>
            </tr>
            <tr>
                <td>Final Technical Report</td>
                <td>${row.final_technical_report}</td>
            </tr>
            <tr>
                <td>Developed Hardware Or Software</td>
                <td>${row.developed_hardware_or_software}</td>
            </tr>
            <tr>
                <td>Proposal Deliverables</td>
                <td>${row.proposal_deliverables}</td>
            </tr>
            <tr>
                <td>Publications</td>
                <td>${row.publications}</td>
            </tr>
            <tr>
                <td>Patents</td>
                <td>${row.patents}</td>
            </tr>
        </tbody>
    </table>
</div>`
).join('')}
</div>
</body>
</html>
`;



const getTeachingFeedbackTemplate = (feedbackData) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teaching and Learning Feedback</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 15px;
            font-size: 10px; /* Adjusted font size for readability */
        }
            .title-container {
            text-align: center;
            margin-top: 50px; /* Top margin for title */
            margin-bottom: 40px; /* Bottom margin for title */
        }
        .title-container h2 {
            font-size: 24px;
            line-height: 1; /* Adjusted line-height for tighter spacing */
            margin: 0; /* Removed default margin for individual h2 */
        }
        h1 {
            color: #333;
        }
               .bordered-container {
            margin: 30px; /* Added margin around the border */
            padding: 20px; /* Padding inside the border */
            border: 2px solid #000; /* Black border */
            border-radius: 10px; /* Rounded corners */
        }
              h2 {
        font-size: 24px;
        margin-top: 5px; /* Reduced top margin for smaller gap */
        margin-bottom: 15px; /* Reduced bottom margin for smaller gap */
        line-height: 1; /* Adjusted line-height for tighter spacing */
        text-align: center; /* Center the titles */
    }

        // .page-break {
        //     page-break-before: always;
        // }
        @media print {
            .page-break {
                page-break-before: always;
                padding-top: 20px; /* Add padding at the top of new pages */
            }
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td 
        {
            padding: 8px; /* Reduced padding to save space */
            text-align: left;
            word-wrap: break-word; /* Enable word wrapping */
        }
        th 
        {
            background-color: #f4f4f4;
            color: #333;
            font-weight: bold;
        }
        tbody tr:nth-child(even) 
        {
            background-color: #f9f9f9; /* Alternate row color */
        }
        tbody tr:hover {
            background-color: #e0e0e0; /* Highlight row on hover */
        }
        .question-column {
            width: 30%; 
        }
        .points-column {
            width: 30%;
            text-align: center;
        }
        .table-container {
            margin-bottom: 20px; /* Consistent margin for separation */
        }
    </style>
</head>
<body>
<div class="bordered-container">
  <div class="title-container">
        <h2>ALAGAPPA CHETTIAR GOVERNMENT COLLEGE OF </h2>
        <h2>ENGINEERING AND TECHNOLOGY KARAIKUDI-630003</h2>
        <h2>(A Government Autonomous Institution Affiliated to Anna University)</h2>
    </div>

<h1>Teaching and Learning Feedback Summary</h1>
<p>Date: ${new Date().toLocaleDateString()}</p>

${feedbackData.map((row, index) => 
`<div class="table-container ${index > 0 ? 'page-break' : ''}">
    <h2>Feedback #${index + 1}</h2>
    <table>
        <thead>
            <tr>
                <th>question-column</th>
                <th>points-column</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Programme Name</td>
                <td>${row.programme}</td>
            </tr>
            <tr>
                <td>Semester</td>
                <td>${row.semester}</td>
            </tr>
            <tr>
                <td>Course Title</td>
                <td>${row.course_title}</td>
            </tr>
            <tr>
                <td>Course Code</td>
                <td>${row.course_code}</td>
            </tr>
            <tr>
                <td>Faculty Name</td>
                <td>${row.faculty}</td>
            </tr>
            <tr>
                <td>Student Email</td>
                <td>${row.student_email}</td>
            </tr>
            <tr>
                <td>Knowledge in Fundamentals</td>
                <td>${row.knowledge_in_fundamentals}</td>
            </tr>
            <tr>
                <td>Analyzing Engineering Problems</td>
                <td>${row.analyze_engineering_problems}</td>
            </tr>
            <tr>
                <td>Identify Design Solutions</td>
                <td>${row.identify_design_solutions}</td>
            </tr>
            <tr>
                <td>Data Analysis Interpretation</td>
                <td>${row.data_analysis_interpretation}</td>
            </tr>
            <tr>
                <td>Use Modern Tools</td>
                <td>${row.use_modern_tools}</td>
            </tr>
            <tr>
                <td>Contextual Knowledge</td>
                <td>${row.contextual_knowledge}</td>
            </tr>
            <tr>
                <td>Importance of Solutions</td>
                <td>${row.importance_of_solutions}</td>
            </tr>
            <tr>
                <td>Ethical Principles</td>
                <td>${row.ethical_principles}</td>
            </tr>
            <tr>
                <td>Teamwork Ability</td>
                <td>${row.teamwork_ability}</td>
            </tr>
            <tr>
                <td>Communication Effectiveness</td>
                <td>${row.communication_effectiveness}</td>
            </tr>
            <tr>
                <td>Project Management & Finance</td>
                <td>${row.project_management_finance}</td>
            </tr>
            <tr>
                <td>Learn New Techniques</td>
                <td>${row.learn_new_techniques}</td>
            </tr>
            <tr>
                <td>Analyze Design Solutions (Electronics)</td>
                <td>${row.analyze_design_solutions_electronics}</td>
            </tr>
            <tr>
                <td>Analyze Design Solutions (RF/Microwaves)</td>
                <td>${row.analyze_design_solutions_rf_microwaves}</td>
            </tr>
            <tr>
                <td>Design Web/Mobile Apps</td>
                <td>${row.design_web_mobile_apps}</td>
            </tr>
        </tbody>
    </table>
</div>`).join('')}
</div>
</body>
</html>
`;


const getPracticalFeedbackTemplate = (feedbackData) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practical and Laboratory Feedback</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 15px;
            font-size: 10px; /* Adjusted font size for readability */
        }
            .title-container {
            text-align: center;
            margin-top: 50px; /* Top margin for title */
            margin-bottom: 40px; /* Bottom margin for title */
        }
        .title-container h2 {
            font-size: 24px;
            line-height: 1; /* Adjusted line-height for tighter spacing */
            margin: 0; /* Removed default margin for individual h2 */
        }
               .bordered-container {
            margin: 30px; /* Added margin around the border */
            padding: 20px; /* Padding inside the border */
            border: 2px solid #000; /* Black border */
            border-radius: 10px; /* Rounded corners */
        }
        h1 {
            color: #333;
        }
        h2 {
            font-size: 24px;
            margin-top: 5px; /* Reduced top margin for smaller gap */
            margin-bottom: 15px; /* Reduced bottom margin for smaller gap */
            line-height: 1; /* Adjusted line-height for tighter spacing */
            text-align: center; /* Center the titles */
        }
        @media print {
            .page-break {
                page-break-before: always;
                padding-top: 20px; /* Add padding at the top of new pages */
            }
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
            padding: 8px; /* Reduced padding to save space */
            text-align: left;
            word-wrap: break-word; /* Enable word wrapping */
        }
        th {
            background-color: #f4f4f4;
            color: #333;
            font-weight: bold;
        }
        tbody tr:nth-child(even) {
            background-color: #f9f9f9; /* Alternate row color */
        }
        tbody tr:hover {
            background-color: #e0e0e0; /* Highlight row on hover */
        }
        .question-column {
            width: 30%; 
        }
        .points-column {
            width: 30%;
            text-align: center;
        }
        .table-container {
            margin-bottom: 20px; /* Consistent margin for separation */
        }
    </style>
</head>
<body>
<div class="bordered-container">
  <div class="title-container">
        <h2>ALAGAPPA CHETTIAR GOVERNMENT COLLEGE OF </h2>
        <h2>ENGINEERING AND TECHNOLOGY KARAIKUDI-630003</h2>
        <h2>(A Government Autonomous Institution Affiliated to Anna University)</h2>
    </div>

<h1>Practical and Laboratory Feedback Summary</h1>
<p>Date: ${new Date().toLocaleDateString()}</p>

${feedbackData.map((row, index) => 
`<div class="table-container ${index > 0 ? 'page-break' : ''}">
    <h2>Feedback #${index + 1}</h2>
    <table>
        <thead>
            <tr>
                <th>Question</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Programme Name</td>
                <td>${row.programme}</td>
            </tr>
            <tr>
                <td>Semester</td>
                <td>${row.semester}</td>
            </tr>
            <tr>
                <td>Course Title</td>
                <td>${row.course_title}</td>
            </tr>
            <tr>
                <td>Course Code</td>
                <td>${row.course_code}</td>
            </tr>
            <tr>
                <td>Faculty Name</td>
                <td>${row.faculty}</td>
            </tr>
            <tr>
                <td>Student Email</td>
                <td>${row.student_email}</td>
            </tr>
            <tr>
                <td>Lab Manual Supply</td>
                <td>${row.lab_manual_supply}</td>
            </tr>
            <tr>
                <td>Cleanliness and Neatness of Lab</td>
                <td>${row.clean_and_neatness_of_lab}</td>
            </tr>
            <tr>
                <td>Equipment Working Condition</td>
                <td>${row.equipment_working_condition}</td>
            </tr>
            <tr>
                <td>Student Performance on Own Hand</td>
                <td>${row.student_performance_on_own_hand}</td>
            </tr>
            <tr>
                <td>Lab Hours for Experiment</td>
                <td>${row.lab_hours_for_experiment}</td>
            </tr>
            <tr>
                <td>Faculty Cooperation</td>
                <td>${row.faculty_cooperation}</td>
            </tr>
            <tr>
                <td>Faculty Knowledge</td>
                <td>${row.faculty_knowledge}</td>
            </tr>
            <tr>
                <td>Lab Reports Checking</td>
                <td>${row.lab_reports_checking}</td>
            </tr>
            <tr>
                <td>Conducting Model Exams</td>
                <td>${row.conducting_model_exams}</td>
            </tr>
            <tr>
                <td>On-Time Practical Exams</td>
                <td>${row.on_time_of_practical_exams}</td>
            </tr>
            <tr>
                <td>Helpfulness of Experiments</td>
                <td>${row.helpful_of_experiments}</td>
            </tr>
        </tbody>
    </table>
</div>`).join('')}
</div>
</body>
</html>
`;



// const getTeachingFeedbackTemplate = (feedbackData) => `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Colloborator Feedback</title>
//     <style>

//    body {
//         font-family: Arial, sans-serif;
//         margin: 15px;
//         font-size: 8px; /* Reduced font size */
//     }

//     h1 {
//         color: #333;
//     }

//     .table-container {
//         width: 100%; 
//         margin: 0 auto;
//         overflow-x: auto;
//     }

//     table {
//         width: 100%;
//         border-collapse: collapse;
//         margin-top: 20px;
//         table-layout: auto; /* Allow table to auto adjust */
//     }

//     th, td {
//         border: 1px solid #ddd;
//         padding: 2px;
//         text-align: left;
//         word-wrap: break-word; /* Enable word wrapping */
//         font-size: 8px; /* Reduced font size */
//     }

//     th {
//         background-color: #f4f4f4;
//     }

//     @media print {
//         body {
//             margin: 10px;
//         }

//         .table-container {
//             width: 100%; 
//         }

//         table {
//             width: 100%; 
//         }

//         th, td {
//             font-size: 8px;
//             padding: 2px;
//             word-wrap: break-word; /* Ensure word wrapping */
//         }

//         thead {
//             display: table-header-group;
//         }

//         tfoot {
//             display: table-footer-group;
//         }
//     }

//     </style>
// </head>
// <body>
//     <h1>Collaboratar Feedback Summary</h1>
//     <p>Date: ${new Date().toLocaleDateString()}</p>
//     <table>
//         <tr>
// <th>Programme Name</th>
// <th>Semester</th>
// <th>Course Title</th>
// <th>Course Code</th>
// <th>Faculty Name</th>
// <th>Student Email</th>
// <th>knowledge in fundamentals</th>
// <th>Analyzing engineering problems</th>
// <thIdentify design solutions</th>
// <th> Data analysis interpretation</th>
// <th>Use Modern Tools</th>
// <th>contextual knowledge</th>
// <th>Importance of Solutions</th>
// <th> Ethical Principles</th>
// <th> Teamwork Ability</th>
// <th>Communication Effectiveness</th>
// <th> Project Management Finance</th>
// <th> Learn New Techniques</th>
// <th>Analyze Design Solutions Electronics</th>
// <th>Analyze Design Solutions rf Microwaves</th>
// <th>Design web mobile apps</th>

// </tr>
// ${feedbackData.map(row => `
// <tr>
// <td>${row.programme}</td>
// <td>${row.semester}</td>
// <td>${row.course_title}</td>
// <td>${row.course_code}</td>
// <td>${row.faculty}</td>
// <td>${row.student_email}</td>
// <td>${row.knowledge_in_fundamentals}</td>
// <td>${row.analyze_engineering_problems}</td>
// <td>${row.identify_design_solutions}</td>
// <td>${row.data_analysis_interpretation}</td>
// <td>${row.use_modern_tools}</td>
// <td>${row.contextual_knowledge}</td>
// <td>${row.importance_of_solutions}</td>
// <td>${row.ethical_principles}</td>
// <td>${row.teamwork_ability}</td>
// <td>${row.communication_effectiveness}</td>
// <td>${row.project_management_finance}</td>
// <td>${row.learn_new_techniques}</td>
// <td>${row.analyze_design_solutions_electronics}</td>
// <td>${row.analyze_design_solutions_rf_microwaves}</td>
// <td>${row.design_web_mobile_apps}</td>



// </tr>`).join('')}
//     </table>
// </body>
// </html>
// `;

const getMiniFeedbackTemplate = (feedbackData) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Project and Project Feedback</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 15px;
            font-size: 10px; /* Adjusted font size for readability */
        }
            .title-container {
            text-align: center;
            margin-top: 50px; /* Top margin for title */
            margin-bottom: 40px; /* Bottom margin for title */
        }
        .title-container h2 {
            font-size: 24px;
            line-height: 1; /* Adjusted line-height for tighter spacing */
            margin: 0; /* Removed default margin for individual h2 */
        }
               .bordered-container {
            margin: 30px; /* Added margin around the border */
            padding: 20px; /* Padding inside the border */
            border: 2px solid #000; /* Black border */
            border-radius: 10px; /* Rounded corners */
        }
        h1 {
            color: #333;
            text-align: center; /* Center the title */
        }
        h2 {
            font-size: 24px;
            margin-top: 5px; /* Reduced top margin for smaller gap */
            margin-bottom: 15px; /* Reduced bottom margin for smaller gap */
            line-height: 1; /* Adjusted line-height for tighter spacing */
            text-align: center; /* Center the titles */
        }
        .table-container {
            margin-bottom: 20px; /* Consistent margin for separation */
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
            padding: 8px; /* Increased padding for better readability */
            text-align: left;
            word-wrap: break-word; /* Enable word wrapping */
        }
        th {
            background-color: #f4f4f4;
            font-weight: bold;
        }
        tbody tr:nth-child(even) {
            background-color: #f9f9f9; /* Alternate row color */
        }
        tbody tr:hover {
            background-color: #e0e0e0; /* Highlight row on hover */
        }
        @media print {
            .page-break {
                page-break-before: always;
                padding-top: 20px; /* Add padding at the top of new pages */
            }
        }
              table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td 
        {
            padding: 8px; /* Reduced padding to save space */
            text-align: left;
            word-wrap: break-word; /* Enable word wrapping */
        }
        th 
        {
            background-color: #f4f4f4;
            color: #333;
            font-weight: bold;
        }
        tbody tr:nth-child(even) 
        {
            background-color: #f9f9f9; /* Alternate row color */
        }
        tbody tr:hover {
            background-color: #e0e0e0; /* Highlight row on hover */
        }
        .question-column {
            width: 30%; /* Adjusted width for better balance */
        }
        .points-column {
            width: 30%; /* Adjusted width for better balance */
            text-align: center;
        }
        .table-container {
            margin-bottom: 20px; /* Consistent margin for separation */
        }
    </style>
</head>
<body>
<div class="bordered-container">
      <div class="title-container">
        <h2>ALAGAPPA CHETTIAR GOVERNMENT COLLEGE OF </h2>
        <h2>ENGINEERING AND TECHNOLOGY KARAIKUDI-630003</h2>
        <h2>(A Government Autonomous Institution Affiliated to Anna University)</h2>
    </div>

    <h1>Mini Project and Project Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>

     ${feedbackData.map((row, index) => `
    <div class="table-container ${index > 0 ? 'page-break' : ''}">
        <h2>Feedback #${index + 1}</h2>
        <table>
            <thead>
                <tr>
                    <th class="question-column">Question</th>
                    <th class="points-column">Points Given</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Programme</td>
                    <td>${row.programme}</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>${row.semester}</td>
                </tr>
                <tr>
                    <td>Course Title</td>
                    <td>${row.course_title}</td>
                </tr>
                <tr>
                    <td>Course Code</td>
                    <td>${row.course_code}</td>
                </tr>
                <tr>
                    <td>Faculty</td>
                    <td>${row.faculty}</td>
                </tr>
                <tr>
                    <td>Student Email</td>
                    <td>${row.student_email}</td>
                </tr>
                <tr>
                    <td>Faculty Objectives Plan</td>
                    <td>${row.faculty_objectives_plan}</td>
                </tr>
                <tr>
                    <td>Faculty Advice Topics</td>
                    <td>${row.faculty_advice_topics}</td>
                </tr>
                <tr>
                    <td>Effectiveness Modern Aids</td>
                    <td>${row.effectiveness_modern_aids}</td>
                </tr>
                <tr>
                    <td>Faculty Support Skills</td>
                    <td>${row.faculty_support_skills}</td>
                </tr>
                <tr>
                    <td>Seminar Class Environment</td>
                    <td>${row.seminar_class_environment}</td>
                </tr>
                <tr>
                    <td>Motivation To Do Best</td>
                    <td>${row.motivation_to_do_best}</td>
                </tr>
                <tr>
                    <td>Appreciation Of Ideas</td>
                    <td>${row.appreciation_of_ideas}</td>
                </tr>
                <tr>
                    <td>Enthusiasm Interest</td>
                    <td>${row.enthusiasm_interest}</td>
                </tr>
                <tr>
                    <td>Faculty Accessibility</td>
                    <td>${row.faculty_accessibility}</td>
                </tr>
                <tr>
                    <td>Course Interest Platform</td>
                    <td>${row.course_interest_platform}</td>
                </tr>
            </tbody>
        </table>
    </div>`).join('')}
    </div>
</body>
</html>
`;

const getSeminarFeedbackTemplate = (feedbackData) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Project and Project Feedback</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 15px;
            font-size: 10px; /* Adjusted font size for readability */
        }
            .title-container {
            text-align: center;
            margin-top: 50px; /* Top margin for title */
            margin-bottom: 40px; /* Bottom margin for title */
        }
        .title-container h2 {
            font-size: 24px;
            line-height: 1; /* Adjusted line-height for tighter spacing */
            margin: 0; /* Removed default margin for individual h2 */
        }
               .bordered-container {
            margin: 30px; /* Added margin around the border */
            padding: 20px; /* Padding inside the border */
            border: 2px solid #000; /* Black border */
            border-radius: 10px; /* Rounded corners */
        }
        h1 {
            color: #333;
            text-align: center; /* Center the title */
        }
        h2 {
            font-size: 24px;
            margin-top: 5px; /* Reduced top margin for smaller gap */
            margin-bottom: 15px; /* Reduced bottom margin for smaller gap */
            line-height: 1; /* Adjusted line-height for tighter spacing */
            text-align: center; /* Center the titles */
        }
        .table-container {
            margin-bottom: 20px; /* Consistent margin for separation */
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
            padding: 8px; /* Increased padding for better readability */
            text-align: left;
            word-wrap: break-word; /* Enable word wrapping */
        }
        th {
            background-color: #f4f4f4;
            font-weight: bold;
        }
        tbody tr:nth-child(even) {
            background-color: #f9f9f9; /* Alternate row color */
        }
        tbody tr:hover {
            background-color: #e0e0e0; /* Highlight row on hover */
        }
        @media print {
            .page-break {
                page-break-before: always;
                padding-top: 20px; /* Add padding at the top of new pages */
            }
        }
              table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td 
        {
            padding: 8px; /* Reduced padding to save space */
            text-align: left;
            word-wrap: break-word; /* Enable word wrapping */
        }
        th 
        {
            background-color: #f4f4f4;
            color: #333;
            font-weight: bold;
        }
        tbody tr:nth-child(even) 
        {
            background-color: #f9f9f9; /* Alternate row color */
        }
        tbody tr:hover {
            background-color: #e0e0e0; /* Highlight row on hover */
        }
        .question-column {
            width: 50%; /* Adjusted width for better balance */
        }
        .points-column {
            width: 50%; /* Adjusted width for better balance */
            text-align: center;
        }
        .table-container {
            margin-bottom: 20px; /* Consistent margin for separation */
        }
    </style>
</head>
<body>
<div class="bordered-container">
  <div class="title-container">
        <h2>ALAGAPPA CHETTIAR GOVERNMENT COLLEGE OF </h2>
        <h2>ENGINEERING AND TECHNOLOGY KARAIKUDI-630003</h2>
        <h2>(A Government Autonomous Institution Affiliated to Anna University)</h2>
    </div>

    <h1>Technical Seminar Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
     ${feedbackData.map((row, index) => `
    <div class="table-container ${index > 0 ? 'page-break' : ''}">
        <h2>Feedback #${index + 1}</h2>
        <table>
            <thead>
                <tr>
                    <th class="question-column">Question</th>
                    <th class="points-column">Points Given</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Programme</td>
                    <td>${row.programme}</td>
                </tr>
                <tr>
                    <td>Semester</td>
                    <td>${row.semester}</td>
                </tr>
                <tr>
                    <td>Course Title</td>
                    <td>${row.course_title}</td>
                </tr>
                <tr>
                    <td>Course Code</td>
                    <td>${row.course_code}</td>
                </tr>
                <tr>
                    <td>Faculty</td>
                    <td>${row.faculty}</td>
                </tr>
                <tr>
                    <td>Student Email</td>
                    <td>${row.student_email}</td>
                </tr>
                <tr>
                    <td>Faculty Objectives Plan</td>
                    <td>${row.faculty_objectives_plan}</td>
                </tr>
                <tr>
                    <td>Faculty Advice Topics</td>
                    <td>${row.faculty_advice_topics}</td>
                </tr>
                <tr>
                    <td>Effectiveness Modern Aids</td>
                    <td>${row.effectiveness_modern_aids}</td>
                </tr>
                <tr>
                    <td>Faculty Support Skills</td>
                    <td>${row.faculty_support_skills}</td>
                </tr>
                <tr>
                    <td>Seminar Class Environment</td>
                    <td>${row.seminar_class_environment}</td>
                </tr>
                <tr>
                    <td>Motivation To Do Best</td>
                    <td>${row.motivation_to_do_best}</td>
                </tr>
                <tr>
                    <td>Appreciation Of Ideas</td>
                    <td>${row.appreciation_of_ideas}</td>
                </tr>
                <tr>
                    <td>Enthusiasm Interest</td>
                    <td>${row.enthusiasm_interest}</td>
                </tr>
                <tr>
                    <td>Faculty Accessibility</td>
                    <td>${row.faculty_accessibility}</td>
                </tr>
                <tr>
                    <td>Course Interest Platform</td>
                    <td>${row.course_interest_platform}</td>
                </tr>
            </tbody>
        </table>
    </div>`).join('')}
    </div>
</body>
</html>
`;
const getAluminiFeedbackTemplate = (feedbackData) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alumni Feedback</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 15px;
            font-size: 22px;
        }
            .title-container {
            text-align: center;
            margin-top: 50px; /* Top margin for title */
            margin-bottom: 40px; /* Bottom margin for title */
        }
        .title-container h2 {
            font-size: 24px;
            line-height: 1; /* Adjusted line-height for tighter spacing */
            margin: 0; /* Removed default margin for individual h2 */
        }
               .bordered-container {
            margin: 30px; /* Added margin around the border */
            padding: 20px; /* Padding inside the border */
            border: 2px solid #000; /* Black border */
            border-radius: 10px; /* Rounded corners */
        }
        h1 {
            color: #333;
            text-align: center; /* Center the title */
        }
        h2 {
            font-size: 24px;
            margin-top: 55px; 
            margin-bottom: 35px; 
            line-height: 1;
            text-align: center; 
        }
        .table-container {
            margin-bottom: 20px; /* Consistent margin for separation */
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
            padding: 8px; /* Increased padding for better readability */
            text-align: left;
            word-wrap: break-word; /* Enable word wrapping */
        }
        th {
            background-color: #f4f4f4;
            font-weight: bold;
        }
        tbody tr:nth-child(even) {
            background-color: #f9f9f9; /* Alternate row color */
        }
        tbody tr:hover {
            background-color: #e0e0e0; /* Highlight row on hover */
        }
        @media print {
            .page-break {
                page-break-before: always;
                padding-top: 20px; /* Add padding at the top of new pages */
            }
        }
              table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td 
        {
            padding: 8px; /* Reduced padding to save space */
            text-align: left;
            word-wrap: break-word; /* Enable word wrapping */
        }
        th 
        {
            background-color: #f4f4f4;
            color: #333;
            font-weight: bold;
        }
        tbody tr:nth-child(even) 
        {
            background-color: #f9f9f9; /* Alternate row color */
        }
        tbody tr:hover {
            background-color: #e0e0e0; /* Highlight row on hover */
        }
        .question-column {
            width: 30%; /* Adjusted width for better balance */
        }
        .points-column {
            width: 30%; /* Adjusted width for better balance */
            text-align: center;
        }
        .table-container {
            margin-bottom: 20px; /* Consistent margin for separation */
        }
    </style>
  </head>
  <body>
  <div class="bordered-container">
    <div class="title-container">
        <h2>ALAGAPPA CHETTIAR GOVERNMENT COLLEGE OF </h2>
        <h2>ENGINEERING AND TECHNOLOGY KARAIKUDI-630003</h2>
        <h2>(A Government Autonomous Institution Affiliated to Anna University)</h2>
    </div>


    
    <h1>Alumni Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    
    ${feedbackData.map((row, index) => `
        <div class="table-container ${index > 0 ? 'page-break' : ''}">
          <h2>Feedback #${index + 1}</h2>
          <table>
           <thead>
                <tr>
                    <th class="question-column">Question</th>
                    <th class="points-column">Points Given</th>
                </tr>
            </thead>
             <tbody>
            <tr>
              <td>Alumni Name</td>
              <td>${row.alumni_name || 'N/A'}</td>
            </tr>
            <tr>
              <td>Designation</td>
              <td>${row.designation || 'N/A'}</td>
            </tr>
            <tr>
              <td>Programme</td>
              <td>${row.programme || 'N/A'}</td>
            </tr>
            <tr>
              <td>Department</td>
              <td>${row.department || 'N/A'}</td>
            </tr>
            <tr>
              <td>Passed Out Year</td>
              <td>${row.passed_out_year || 'N/A'}</td>
            </tr>
            <tr>
              <td>Higher Studies</td>
              <td>${row.higher_studies || 'N/A'}</td>
            </tr>
            <tr>
              <td>Higher Studies Institution</td>
              <td>${row.higher_studies_institution || 'N/A'}</td>
            </tr>
            <tr>
              <td>Competitive Exam</td>
              <td>${row.competitive_exam || 'N/A'}</td>
            </tr>
            <tr>
              <td>Competitive Exam Name</td>
              <td>${row.competitive_exam_name || 'N/A'}</td>
            </tr>
            <tr>
              <td>Company Name</td>
              <td>${row.company_name || 'N/A'}</td>
            </tr>
            <tr>
              <td>Entry Level Position</td>
              <td>${row.entry_level_position || 'N/A'}</td>
            </tr>
            <tr>
              <td>Current Position</td>
              <td>${row.current_position || 'N/A'}</td>
            </tr>
            <tr>
              <td>Responsibilities</td>
              <td>${row.responsibilities || 'N/A'}</td>
            </tr>
            <tr>
              <td>Achievements</td>
              <td>${row.achievements || 'N/A'}</td>
            </tr>
            <tr>
              <td>In Service</td>
              <td>${row.in_service || 'N/A'}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>${row.city || 'N/A'}</td>
            </tr>
            <tr>
              <td>Knowledge in Field</td>
              <td>${row.knowledge_in_field !== undefined ? row.knowledge_in_field : 'N/A'}</td>
            </tr>
            <tr>
              <td>Latest Developments</td>
              <td>${row.latest_developments !== undefined ? row.latest_developments : 'N/A'}</td>
            </tr>
            <tr>
              <td>Practical Solving</td>
              <td>${row.practical_solving !== undefined ? row.practical_solving : 'N/A'}</td>
            </tr>
            <tr>
              <td>Creative Thoughts</td>
              <td>${row.creative_thoughts !== undefined ? row.creative_thoughts : 'N/A'}</td>
            </tr>
            <tr>
              <td>Analytical Assessment</td>
              <td>${row.analytical_assessment !== undefined ? row.analytical_assessment : 'N/A'}</td>
            </tr>
            <tr>
              <td>Self Learner</td>
              <td>${row.self_learner !== undefined ? row.self_learner : 'N/A'}</td>
            </tr>
            <tr>
              <td>Financial Management</td>
              <td>${row.financial_management !== undefined ? row.financial_management : 'N/A'}</td>
            </tr>
            <tr>
              <td>Know Capabilities</td>
              <td>${row.know_capabilities !== undefined ? row.know_capabilities : 'N/A'}</td>
            </tr>
            <tr>
              <td>Modern Equipment</td>
              <td>${row.modern_equipment !== undefined ? row.modern_equipment : 'N/A'}</td>
            </tr>
            <tr>
              <td>Peer Interaction</td>
              <td>${row.peer_interaction !== undefined ? row.peer_interaction : 'N/A'}</td>
            </tr>
            <tr>
              <td>Professional Friends</td>
              <td>${row.professional_friends !== undefined ? row.professional_friends : 'N/A'}</td>
            </tr>
            <tr>
              <td>Leadership Ability</td>
              <td>${row.leadership_ability !== undefined ? row.leadership_ability : 'N/A'}</td>
            </tr>
            <tr>
              <td>Effective Communication</td>
              <td>${row.effective_communication !== undefined ? row.effective_communication : 'N/A'}</td>
            </tr>
            <tr>
              <td>Clear Expression</td>
              <td>${row.clear_expression !== undefined ? row.clear_expression : 'N/A'}</td>
            </tr>
            <tr>
              <td>Ethical Actions</td>
              <td>${row.ethical_actions !== undefined ? row.ethical_actions : 'N/A'}</td>
            </tr>
            </tbody>
          </table>
        </div>`).join('')}
        </div>
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
                case 'employee':
                    [feedbackData] = await pool.query('SELECT * FROM employeefeedback');
                    htmlContent = getEmployeeFeedbackTemplate(feedbackData);
                    break;
                case 'consultancy':
                    [feedbackData] = await pool.query('SELECT * FROM ConsultancyFeedback ');
                    htmlContent = getCounsaltancyFeedbackTemplate(feedbackData);
                    break;
                    case 'collaborator':
                    [feedbackData] = await pool.query('SELECT * FROM CollaboratorFeedback  ');
                    htmlContent = getCollaboratarFeedbackTemplate(feedbackData);
                    break;
                    case 'teachingandlearning':
                        [feedbackData] = await pool.query('SELECT * FROM  TeachingAndLearningFeedback ');
                        htmlContent = getTeachingFeedbackTemplate(feedbackData);
                        break;
                    case 'Practical':
                        [feedbackData] = await pool.query('SELECT * FROM  PracticalFeedback ');
                        htmlContent = getPracticalFeedbackTemplate(feedbackData);
                        break;
                    case 'MiniProject':
                        [feedbackData] = await pool.query('SELECT * FROM MiniProjectFeedback ');
                        htmlContent = getMiniFeedbackTemplate(feedbackData);
                        break;
                    case 'Technicalseminar':
                        [feedbackData] = await pool.query('SELECT * FROM  TechnicalSeminarFeedback');
                        htmlContent = getSeminarFeedbackTemplate(feedbackData);
                        break;
                    case 'alumni':
                        [feedbackData] = await pool.query('SELECT * FROM  AlumniFeedback');
                        htmlContent = getAluminiFeedbackTemplate(feedbackData);
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
        const pdfBuffer = await page.pdf({ format: 'A3' });
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
            from: 'acgcet25@gmail.com',
            to:'acgcet25@gmail.com' ,
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
        // res.redirect('./FeedbackPdf/FeedbackPdf');
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
