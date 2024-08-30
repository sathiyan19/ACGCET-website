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
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" type="image/png">
        //  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

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
<<<<<<< HEAD
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
        font-size: 8px; /* Reduced font size */
    }

    h1 {
        color: #333;
    }

    .table-container {
        width: 100%; 
        margin: 0 auto;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        table-layout: auto; /* Allow table to auto adjust */
    }

    th, td {
        border: 1px solid #ddd;
        padding: 2px;
        text-align: left;
        word-wrap: break-word; /* Enable word wrapping */
        font-size: 8px; /* Reduced font size */
    }

    th {
        background-color: #f4f4f4;
    }

    @media print {
        body {
            margin: 10px;
        }

        .table-container {
            width: 100%; 
        }

        table {
            width: 100%; 
        }

        th, td {
            font-size: 8px;
            padding: 2px;
            word-wrap: break-word; /* Ensure word wrapping */
        }

        thead {
            display: table-header-group;
        }

        tfoot {
            display: table-footer-group;
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
            <th>Programe</th>
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
            <td>${row.programme}</td>
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
=======
>>>>>>> 75211b65b94d06234870fcb9a4472606d9723c3d
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

<<<<<<< HEAD
   body {
        font-family: Arial, sans-serif;
        margin: 15px;
        font-size: 8px; /* Reduced font size */
    }

    h1 {
        color: #333;
    }

    .table-container {
        width: 100%; 
        margin: 0 auto;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        table-layout: auto; /* Allow table to auto adjust */
    }

    th, td {
        border: 1px solid #ddd;
        padding: 2px;
        text-align: left;
        word-wrap: break-word; /* Enable word wrapping */
        font-size: 8px; /* Reduced font size */
    }

    th {
        background-color: #f4f4f4;
    }

    @media print {
        body {
            margin: 10px;
        }

        .table-container {
            width: 100%; 
        }

        table {
            width: 100%; 
        }

        th, td {
            font-size: 8px;
            padding: 2px;
            word-wrap: break-word; /* Ensure word wrapping */
        }

        thead {
            display: table-header-group;
        }

        tfoot {
            display: table-footer-group;
        }
    }

    </style>
</head>
<body>
    <h1>Employee Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    <table>
        <tr>
            <th>HR Name</th>
            <th>Company Name</th>
            <th>Company Address</th>
            <th>Student Name</th>
            <th>programme</th>
            <th>branch</th>
            <th>year Of Joining</th>
            <th>Entry Level Position</th>
            <th>Current Position</th>
            <th>Responsibilities</th>
            <th>achievements_awards</th>
            <th>Technical knowledge</th>
            <th>Communication skill</th>
            <th> Independent thinking</th>
            <th>New Technology Inclination</th>
            <th> Extra Responsibility</th>
            <th> Work Beyond Schedule</th>
            <th>Organizational Contribution</th>
            <th>Planning Organization Skills</th>
            <th>Leadership Qualities</th>
            <th>Relationship with Seniors</th>
          
        </tr>
        ${feedbackData.map(row => `
        <tr>
            <td>${row. hr_name}</td>
            <td>${row.company_name}</td>
            <td>${row.company_address}</td>
            <td>${row.student_name}</td>
            <td>${row.programme}</td>
            <td>${row.branch}</td>
            <td>${row.year_of_joining}</td>
            <td>${row.entry_level_position}</td>
            <td>${row.current_position}</td>
            <td>${row.responsibilities}</td>
            <td>${row.achievements_awards}</td>
            <td>${row.technical_knowledge}</td>
            <td>${row.communication_skill}</td>
            <td>${row.independent_thinking}</td>
            <td>${row.new_technology_inclination}</td>
            <td>${row.extra_responsibility}</td>
            <td>${row.work_beyond_schedule}</td>
            <td>${row.organizational_contribution}</td>
            <td>${row.planning_organization_skills}</td>
            <td>${row.leadership_qualities }</td>
            <td>${row.relationship_with_seniors }</td>
        </tr>`).join('')}
    </table>
</body>
</html>
`;
const getCounsaltancyFeedbackTemplate = (feedbackData) => `
<!DOCTYPE html>
=======
const getParentsPdfTemplate = (feedbackData) => `
   <!DOCTYPE html>
>>>>>>> 75211b65b94d06234870fcb9a4472606d9723c3d
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<<<<<<< HEAD
    <title>Counsaltancy Feedback</title>
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
    <h1>Counsaltancy Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    <table>
        <tr>
            <th>Work undertaking Department</th>
            <th> company Offering</th>
            <th>Nature Of Work</th>
            <th>Date Of Commencement</th>
            <th>Programme</th>
            <th>Consultancy Fee</th>
            <th>Meeting Deadline</th>
            <th>Work Quality</th>
            <th>Approach</th>
           
          
        </tr>
        ${feedbackData.map(row => `
        <tr>
            <td>${row. work_undertaking_dept}</td>
            <td>${row.company_offering}</td>
            <td>${row.nature_of_work}</td>
            <td>${row.date_of_commencement}</td>
            <td>${row.programme}</td>
            <td>${row.consultancy_fee}</td>
            <td>${row.meeting_deadline}</td>
            <td>${row.work_quality}</td>
            <td>${row.approach}</td>
            
        </tr>`).join('')}
    </table>
</body>
</html>
`;
const getCollaboratarFeedbackTemplate = (feedbackData) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colloborator Feedback</title>
    <style>

   body {
        font-family: Arial, sans-serif;
        margin: 15px;
        font-size: 8px; /* Reduced font size */
    }

    h1 {
        color: #333;
    }

    .table-container {
        width: 100%; 
        margin: 0 auto;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        table-layout: auto; /* Allow table to auto adjust */
    }

    th, td {
        border: 1px solid #ddd;
        padding: 2px;
        text-align: left;
        word-wrap: break-word; /* Enable word wrapping */
        font-size: 8px; /* Reduced font size */
    }

    th {
        background-color: #f4f4f4;
    }

    @media print {
        body {
            margin: 10px;
        }

        .table-container {
            width: 100%; 
        }

        table {
            width: 100%; 
        }

        th, td {
            font-size: 8px;
            padding: 2px;
            word-wrap: break-word; /* Ensure word wrapping */
        }

        thead {
            display: table-header-group;
        }

        tfoot {
            display: table-footer-group;
        }
    }

    </style>
</head>
<body>
    <h1>Collaboratar Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    <table>
        <tr>
<th>Project Name</th>
<th>Funding Agency</th>
<th>Duration</th>
<th>Principal Invigilator</th>
<th>Authority Name</th>
<th>Proposal Objective</th>
<th>State Of Art</th>
<th>Methodology And Action Plan</th>
<th>Performance Milestone</th>
<th>Deliverables</th>
<th>Estimated Expenditure</th>
<th>Appoinment Of Staffs</th>
<th>Completion In Time</th>
<th>Expected Result</th>
<th>Review Performance</th>
<th>Project Closure Time</th>
<th>Literature Collected</th>
<th>Final Technical Report</th>
<th>Developed Hardware Or Software</th>
<th>Proposal Deliverables</th>
<th>Publications</th>
<th>Parents</th>
</tr>
${feedbackData.map(row => `
<tr>
<td>${row.project_name}</td>
<td>${row.funding_agency}</td>
<td>${row.duration}</td>
<td>${row.principal_invigilator}</td>
<td>${row.authority_name}</td>
<td>${row.proposal_objective}</td>
<td>${row.state_of_art}</td>
<td>${row.methodology_and_action_plan}</td>
<td>${row.performance_milestone}</td>
<td>${row.deliverables}</td>
<td>${row.estimated_expenditure}</td>
<td>${row.appoinment_of_staffs}</td>
<td>${row.completion_in_time}</td>
<td>${row.expected_result}</td>
<td>${row.review_performance}</td>
<td>${row.project_closure_time}</td>
<td>${row.literature_collected}</td>
<td>${row.final_technical_report}</td>
<td>${row.developed_hardware_or_software}</td>
<td>${row.proposal_deliverables}</td>
<td>${row.publications}</td>
<td>${row.patents}</td>

</tr>`).join('')}
    </table>
</body>
</html>
`;


const getTeachingFeedbackTemplate = (feedbackData) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teaching and Learning Feedback </title>
    <style>

   body {
        font-family: Arial, sans-serif;
        margin: 15px;
        font-size: 8px; /* Reduced font size */
    }

    h1 {
        color: #333;
    }

    .table-container {
        width: 100%; 
        margin: 0 auto;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        table-layout: auto; /* Allow table to auto adjust */
    }

    th, td {
        border: 1px solid #ddd;
        padding: 2px;
        text-align: left;
        word-wrap: break-word; /* Enable word wrapping */
        font-size: 8px; /* Reduced font size */
    }

    th {
        background-color: #f4f4f4;
    }

    @media print {
        body {
            margin: 10px;
        }

        .table-container {
            width: 100%; 
        }

        table {
            width: 100%; 
        }

        th, td {
            font-size: 8px;
            padding: 2px;
            word-wrap: break-word; /* Ensure word wrapping */
        }

        thead {
            display: table-header-group;
        }

        tfoot {
            display: table-footer-group;
        }
    }

    </style>
</head>
<body>
    <h1>Teaching and Learning Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    <table>
<tr>
<th>Programme Name</th>
<th>Semester</th>
<th>Course Title</th>
<th>Course Code</th>
<th>Faculty Name</th>
<th>Student Email</th>
<th>knowledge in fundamentals</th>
<th>Analyzing engineering problems</th>
<th>Identify design solutions</th>
<th> Data analysis interpretation</th>
<th>Use Modern Tools</th>
<th>contextual knowledge</th>
<th>Importance of Solutions</th>
<th> Ethical Principles</th>
<th> Teamwork Ability</th>
<th>Communication Effectiveness</th>
<th> Project Management Finance</th>
<th> Learn New Techniques</th>
<th>Analyze Design Solutions Electronics</th>
<th>Analyze Design Solutions rf Microwaves</th>
<th>Design web mobile apps</th>

</tr>
${feedbackData.map(row => `
<tr>
<td>${row.programme}</td>
<td>${row.semester}</td>
<td>${row.course_title}</td>
<td>${row.course_code}</td>
<td>${row.faculty}</td>
<td>${row.student_email}</td>
<td>${row.knowledge_in_fundamentals}</td>
<td>${row.analyze_engineering_problems}</td>
<td>${row.identify_design_solutions}</td>
<td>${row.data_analysis_interpretation}</td>
<td>${row.use_modern_tools}</td>
<td>${row.contextual_knowledge}</td>
<td>${row.importance_of_solutions}</td>
<td>${row.ethical_principles}</td>
<td>${row.teamwork_ability}</td>
<td>${row.communication_effectiveness}</td>
<td>${row.project_management_finance}</td>
<td>${row.learn_new_techniques}</td>
<td>${row.analyze_design_solutions_electronics}</td>
<td>${row.analyze_design_solutions_rf_microwaves}</td>
<td>${row.design_web_mobile_apps}</td>



</tr>`).join('')}
    </table>
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
        font-size: 8px; /* Reduced font size */
    }

    h1 {
        color: #333;
    }

    .table-container {
        width: 100%; 
        margin: 0 auto;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        table-layout: auto; /* Allow table to auto adjust */
    }

    th, td {
        border: 1px solid #ddd;
        padding: 2px;
        text-align: left;
        word-wrap: break-word; /* Enable word wrapping */
        font-size: 8px; /* Reduced font size */
    }

    th {
        background-color: #f4f4f4;
    }

    @media print {
        body {
            margin: 10px;
        }

        .table-container {
            width: 100%; 
        }

        table {
            width: 100%; 
        }

        th, td {
            font-size: 8px;
            padding: 2px;
            word-wrap: break-word; /* Ensure word wrapping */
        }

        thead {
            display: table-header-group;
        }

        tfoot {
            display: table-footer-group;
        }
    }

    </style>
</head>
<body>
    <h1>Practical and Laboratory Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    <table>
        <tr>
<th>Programme</th>
<th>Semester</th>
<th>Course Title</th>
<th>Course Code</th>
<th>Faculty</th>
<th>Student Email</th>
<th>Lab Manual Supply</th>
<th>Clean And Neatness Of Lab</th>
<th>Equipment Working Condition</th>
<th>Student Performance On Own Hand</th>
<th>Lab Hours For Experiment</th>
<th>Faculty Cooperation</th>
<th>Faculty Knowledge</th>
<th>Lab Reports Checking</th>
<th>Conducting Model Exams</th>
<th>On Time Of Practical Exams</th>
<th>Helpful Of Experiments</th>


</tr>
${feedbackData.map(row => `
<tr>
<td>${row.programme}</td>
<td>${row.semester}</td>
<td>${row.course_title}</td>
<td>${row.course_code}</td>
<td>${row.faculty}</td>
<td>${row.student_email}</td>
<td>${row.lab_manual_supply}</td>
<td>${row.clean_and_neatness_of_lab}</td>
<td>${row.equipment_working_condition}</td>
<td>${row.student_performance_on_own_hand}</td>
<td>${row.lab_hours_for_experiment}</td>
<td>${row.faculty_cooperation}</td>
<td>${row.faculty_knowledge}</td>
<td>${row.lab_reports_checking}</td>
<td>${row.conducting_model_exams}</td>
<td>${row.on_time_of_practical_exams}</td>
<td>${row.helpful_of_experiments}</td>




</tr>`).join('')}
    </table>
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
    <title>Mini project and Project Feedback</title>
    <style>

   body {
        font-family: Arial, sans-serif;
        margin: 15px;
        font-size: 8px; /* Reduced font size */
    }

    h1 {
        color: #333;
    }

    .table-container {
        width: 100%; 
        margin: 0 auto;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        table-layout: auto; /* Allow table to auto adjust */
    }

    th, td {
        border: 1px solid #ddd;
        padding: 2px;
        text-align: left;
        word-wrap: break-word; /* Enable word wrapping */
        font-size: 8px; /* Reduced font size */
    }

    th {
        background-color: #f4f4f4;
    }

    @media print {
        body {
            margin: 10px;
        }

        .table-container {
            width: 100%; 
        }

        table {
            width: 100%; 
        }

        th, td {
            font-size: 8px;
            padding: 2px;
            word-wrap: break-word; /* Ensure word wrapping */
        }

        thead {
            display: table-header-group;
        }

        tfoot {
            display: table-footer-group;
        }
    }

    </style>
</head>
<body>
    <h1>Mini project and Project Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    <table>
        <tr>
<th>Programme</th>
<th>Semester</th>
<th>Course Title</th>
<th>Course Code</th>
<th>Faculty</th>
<th>Student Email</th>
<th>Project Objectives</th>
<th>Technical Support</th>
<th>Facilities Offered</th>
<th>Frequency Of Project Reviews</th>
<th>Helpful Of Project Reviews</th>
<th>Support Of Supervisor</th>
<th>Implementation Of Knowledge</th>
<th>Motivation To Do New Findings</th>
<th>Project Benefit To Society</th>
<th>Appreciation</th>



</tr>
${feedbackData.map(row => `
<tr>
<td>${row.programme}</td>
<td>${row.semester}</td>
<td>${row.course_title}</td>
<td>${row.course_code}</td>
<td>${row.faculty}</td>
<td>${row.student_email}</td>
<td>${row.project_objectives}</td>
<td>${row.technical_support}</td>
<td>${row.facilities_offered}</td>
<td>${row.frequency_0f_project_reviews}</td>
<td>${row.helpful_of_project_reviews}</td>
<td>${row.support_of_suppervisor}</td>
<td>${row.implementation_of_knowledge}</td>
<td>${row.motivation_to_do_new_findings}</td>
<td>${row.project_beniefit_to_society}</td>
<td>${row.appreciation}</td>




</tr>`).join('')}
    </table>
</body>
</html>
`;
const getSeminarFeedbackTemplate = (feedbackData) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Technical Seminar Feedback</title>
    <style>

   body {
        font-family: Arial, sans-serif;
        margin: 15px;
        font-size: 8px; /* Reduced font size */
    }

    h1 {
        color: #333;
    }

    .table-container {
        width: 100%; 
        margin: 0 auto;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        table-layout: auto; /* Allow table to auto adjust */
    }

    th, td {
        border: 1px solid #ddd;
        padding: 2px;
        text-align: left;
        word-wrap: break-word; /* Enable word wrapping */
        font-size: 8px; /* Reduced font size */
    }

    th {
        background-color: #f4f4f4;
    }

    @media print {
        body {
            margin: 10px;
        }

        .table-container {
            width: 100%; 
        }

        table {
            width: 100%; 
        }

        th, td {
            font-size: 8px;
            padding: 2px;
            word-wrap: break-word; /* Ensure word wrapping */
        }

        thead {
            display: table-header-group;
        }

        tfoot {
            display: table-footer-group;
        }
    }

    </style>
</head>
<body>
    <h1>Technical Seminar Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    <table>
        <tr>
<th>Programme</th>
<th>Semester</th>
<th>Course Title</th>
<th>Course Code</th>
<th>Faculty</th>
<th>Student Email</th>
<th>Faculty Objectives Plan</th>
<th>Faculty Advice Topics</th>
<th>Effectiveness Modern Aids</th>
<th>Faculty Support Skills</th>
<th>Seminar Class Environment</th>
<th>Motivation To Do Best</th>
<th>Appreciation Of Ideas</th>
<th>Enthusiasm Interest</th>
<th>Faculty Accessibility</th>
<th>Course Interest Platform</th>




</tr>
${feedbackData.map(row => `
<tr>
<td>${row.programme}</td>
<td>${row.semester}</td>
<td>${row.course_title}</td>
<td>${row.course_code}</td>
<td>${row.faculty}</td>
<td>${row.student_email}</td>
<td>${row.faculty_objectives_plan}</td>
<td>${row.faculty_advice_topics}</td>
<td>${row.effectiveness_modern_aids}</td>
<td>${row.faculty_support_skills}</td>
<td>${row.seminar_class_environment}</td>
<td>${row.motivation_to_do_best}</td>
<td>${row.appreciation_of_ideas}</td>
<td>${row.enthusiasm_interest}</td>
<td>${row.faculty_accessibility}</td>
<td>${row.course_interest_platform}</td>




</tr>`).join('')}
    </table>
</body>
</html>
`;
const generatePdfAndSendEmail = async (req, res) => {
    const { option } = req.body;

=======
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

    .table-container {
        width: 100%;
        margin: 0 auto;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        table-layout: fixed; /* Fixed layout for better control of columns */
    }

    table, th, td {
        border: 1px solid #ddd;
    }

    th, td {
        padding: 2px;
        text-align: left;
        word-wrap: break-word; /* Ensure long text wraps within cells */
    }

    th {
        background-color: #f4f4f4;
    }

    @media print {
        body {
            margin: 10px;
            font-size: 8px;
        }

        .table-container {
            width: 100%;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            table-layout: fixed;
        }

        th, td {
            font-size: 8px;
            padding: 2px 4px;
            overflow: visible;
        }

        thead {
            display: table-header-group;
        }

        tfoot {
            display: table-footer-group;
        }
    }
</style>

</head>
<body>
    <h1>Parents Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    
    <div class="table-container">
        <table>
            <thead>
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
            </thead>
            <tbody>
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
            </tbody>
        </table>
    </div>
</body>
</html>`
;
const getAlumniPdfTemplate = (feedbackData) => `
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
        font-size: 10px;
        font-weight: unset;
    }

    h1 {
        color: #333;
    }

    .table-container {
        width: 100%;
        margin: 0 auto;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        table-layout: fixed; /* Fixed layout for better control of columns */
    }

    table, th, td {
        border: 1px solid #ddd;
    }

    th, td {
        padding: 2px;
        text-align: left;
        word-wrap: break-word; /* Ensure long text wraps within cells */
    }

    th {
        background-color: #f4f4f4;
    }

    @media print {
        body {
            margin: 10px;
            font-size: 8px;
        }

        .table-container {
            width: 100%;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            table-layout: fixed;
        }

        th, td {
            font-size: 8px;
            padding: 2px 4px;
            overflow: visible;
        }

        thead {
            display: table-header-group;
        }

        tfoot {
            display: table-footer-group;
        }
    }
</style>

</head>
<body>
    <h1>Parents Feedback Summary</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    
    <div class="table-container">
<table>
    <thead>
        <tr>
            <th>Alumni Name</th>
            <th>Designation</th>
            <th>Programme</th>
            <th>Department</th>
            <th>Passed Out Year</th>
            <th>Higher Studies</th>
            <th>Higher Studies Institution</th>
            <th>Competitive Exam</th>
            <th>Competitive Exam Name</th>
            <th>Company Name</th>
            <th>Entry Level Position</th>
            <th>Current Position</th>
            <th>Responsibilities</th>
            <th>Achievements</th>
            <th>In Service</th>
            <th>City</th>
            <th>Knowledge in Field</th>
            <th>Latest Developments</th>
            <th>Practical Solving</th>
            <th>Creative Thoughts</th>
            <th>Analytical Assessment</th>
            <th>Self Learner</th>
            <th>Financial Management</th>
            <th>Know Capabilities</th>
            <th>Modern Equipment</th>
            <th>Peer Interaction</th>
            <th>Professional Friends</th>
            <th>Leadership Ability</th>
            <th>Effective Communication</th>
            <th>Clear Expression</th>
            <th>Ethical Actions</th>
        </tr>
    </thead>
    <tbody>
        ${feedbackData.map(row => `
        <tr>
            <td>${row.alumni_name || 'N/A'}</td>
            <td>${row.designation || 'N/A'}</td>
            <td>${row.programme || 'N/A'}</td>
            <td>${row.department || 'N/A'}</td>
            <td>${row.passed_out_year || 'N/A'}</td>
            <td>${row.higher_studies || 'N/A'}</td>
            <td>${row.higher_studies_institution || 'N/A'}</td>
            <td>${row.competitive_exam || 'N/A'}</td>
            <td>${row.competitive_exam_name || 'N/A'}</td>
            <td>${row.company_name || 'N/A'}</td>
            <td>${row.entry_level_position || 'N/A'}</td>
            <td>${row.current_position || 'N/A'}</td>
            <td>${row.responsibilities || 'N/A'}</td>
            <td>${row.achievements || 'N/A'}</td>
            <td>${row.in_service || 'N/A'}</td>
            <td>${row.city || 'N/A'}</td>
            <td>${row.knowledge_in_field !== undefined ? row.knowledge_in_field : 'N/A'}</td>
            <td>${row.latest_developments !== undefined ? row.latest_developments : 'N/A'}</td>
            <td>${row.practical_solving !== undefined ? row.practical_solving : 'N/A'}</td>
            <td>${row.creative_thoughts !== undefined ? row.creative_thoughts : 'N/A'}</td>
            <td>${row.analytical_assessment !== undefined ? row.analytical_assessment : 'N/A'}</td>
            <td>${row.self_learner !== undefined ? row.self_learner : 'N/A'}</td>
            <td>${row.financial_management !== undefined ? row.financial_management : 'N/A'}</td>
            <td>${row.know_capabilities !== undefined ? row.know_capabilities : 'N/A'}</td>
            <td>${row.modern_equipment !== undefined ? row.modern_equipment : 'N/A'}</td>
            <td>${row.peer_interaction !== undefined ? row.peer_interaction : 'N/A'}</td>
            <td>${row.professional_friends !== undefined ? row.professional_friends : 'N/A'}</td>
            <td>${row.leadership_ability !== undefined ? row.leadership_ability : 'N/A'}</td>
            <td>${row.effective_communication !== undefined ? row.effective_communication : 'N/A'}</td>
            <td>${row.clear_expression !== undefined ? row.clear_expression : 'N/A'}</td>
            <td>${row.ethical_actions !== undefined ? row.ethical_actions : 'N/A'}</td>
        </tr>`).join('')}
    </tbody>
</table>

    </div>
</body>
</html>`
;



const generatePdfAndSendEmail = async (req, res) => {
    const { option } = req.body;

>>>>>>> 75211b65b94d06234870fcb9a4472606d9723c3d
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
<<<<<<< HEAD
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
                    case 'TechnicalSeminar':
                        [feedbackData] = await pool.query('SELECT * FROM  TechnicalSeminarFeedback');
                        htmlContent = getSeminarFeedbackTemplate(feedbackData);
                        break;
=======
                htmlContent = getParentsPdfTemplate(feedbackData);
                break;
                case 'alumni':
                    [feedbackData] = await pool.query('SELECT * FROM alumniFeedback');
                    htmlContent = getAlumniPdfTemplate(feedbackData);
                    break;
>>>>>>> 75211b65b94d06234870fcb9a4472606d9723c3d
            default:
                return res.status(400).send('Invalid option selected.');
        }

        if (feedbackData.length === 0) {
            throw new Error("No data available to generate PDF.");
        }

        const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        const page = await browser.newPage();
        await page.setContent(htmlContent);
<<<<<<< HEAD
        const pdfBuffer = await page.pdf({ format: 'A3' });
=======
        const pdfBuffer = await page.pdf({ format: 'A4' });
>>>>>>> 75211b65b94d06234870fcb9a4472606d9723c3d
        await browser.close();

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${option}-feedback.pdf"`);
        res.send(pdfBuffer);

        console.log("Sending email...");
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
<<<<<<< HEAD
                user: "acgcet25@gmail.com",

                pass: "aimykdsvzkgbkqag", // Use environment variable for password
=======
                user: "acgcet25@gmail.com", // Use environment variable for email
                pass:"aimykdsvzkgbkqag" , // Use environment variable for password
>>>>>>> 75211b65b94d06234870fcb9a4472606d9723c3d
            },
            connectionTimeout: 10000, // 10 seconds timeout
            socketTimeout: 10000, // 10 seconds timeout
        });

        const mailOptions = {
            from: 'mohanamala07gmail.com',
<<<<<<< HEAD
            to:'mohanamala07@gmail.com' ,
=======
            to:'mohanamala07@gmail.com',
>>>>>>> 75211b65b94d06234870fcb9a4472606d9723c3d
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
<<<<<<< HEAD
        console.log(`Truncating ${option.charAt(0).toUpperCase() + option.slice(1)}Feedback table...`);
        await pool.query(`TRUNCATE TABLE ${option.charAt(0).toUpperCase() + option.slice(1)}Feedback`);
        console.log("Table truncated successfully.");
        // res.redirect('./FeedbackPdf/FeedbackPdf');
=======
        const tableName = `${option.charAt(0).toUpperCase() + option.slice(1)}Feedback`;
        console.log(`Truncating ${tableName} table...`);
        await pool.query(`TRUNCATE TABLE ${tableName}`);
        console.log("Table truncated successfully.");

>>>>>>> 75211b65b94d06234870fcb9a4472606d9723c3d
    } catch (error) {
        console.error('Error during PDF generation:', error);
        res.status(500).send('Failed to generate the file.');
    }
}
<<<<<<< HEAD
=======

>>>>>>> 75211b65b94d06234870fcb9a4472606d9723c3d
module.exports = {
    generatePdfAndSendEmail,
};
app.post('/api/generate_pdf', generatePdfAndSendEmail);

// app.listen(3001, () => {
//     console.log('Server is running on port 3001');
<<<<<<< HEAD
// });
=======
// });
>>>>>>> 75211b65b94d06234870fcb9a4472606d9723c3d
