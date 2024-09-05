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
            margin: 15px;
            font-size:10px;
            font-weight:unset;
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
            table-layout: auto; 
            table-layout: auto; 
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 2px;
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

const getParentsPdfTemplate = (feedbackData) => `
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parents Feedback</title>
    <style>
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
            <td>${row.organizational_contribution}</td>
            <td>${row.planning_organization_skills}</td>
            <td>${row.leadership_qualities}</td>
            <td>${row.relationship_with_seniors}</td>
        </tr>`).join('')}
    </table>
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
module.exports = {
    getPdfTemplate,
    getParentsPdfTemplate,
    getEmployeeFeedbackTemplate,
    getCounsaltancyFeedbackTemplate,
    getCollaboratarFeedbackTemplate

};
