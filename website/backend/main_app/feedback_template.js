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
        }
        h1 {
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            table-layout: auto; 
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

const getParentsPdfTemplate = (feedbackData) => `
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
                margin: 10px 10px ; /* Remove margin to utilize the full printable area */
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


module.exports = {
    getPdfTemplate,
    getParentsPdfTemplate
};
