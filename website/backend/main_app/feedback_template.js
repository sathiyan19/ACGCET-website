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
            <th>Name</th>
            <th>Designation</th>
            <th>Programme</th>
            <th>Department</th>
            <th>Passed Out Year</th>
            <th>Higher Studies</th>
            <th>Institution</th>
            <th>Competitive Exam</th>
            <th>Exam Name</th>
            <th>Company</th>
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
            <td>${row.name}</td>
            <td>${row.designation}</td>
            <td>${row.programme}</td>
            <td>${row.department}</td>
            <td>${row.passedOutYear}</td>
            <td>${row.higherStudies ? 'Yes' : 'No'}</td>
            <td>${row.institution || 'N/A'}</td>
            <td>${row.competitiveExam ? 'Yes' : 'No'}</td>
            <td>${row.examName || 'N/A'}</td>
            <td>${row.company || 'N/A'}</td>
            <td>${row.entryLevelPosition || 'N/A'}</td>
            <td>${row.currentPosition || 'N/A'}</td>
            <td>${row.responsibilities || 'N/A'}</td>
            <td>${row.achievements || 'N/A'}</td>
            <td>${row.serviceStatus ? 'Yes' : 'No'}</td>
            <td>${row.city || 'N/A'}</td>
            <td>${row.ratings.knowledge_in_field || 'N/A'}</td>
            <td>${row.ratings.latest_developments || 'N/A'}</td>
            <td>${row.ratings.practical_solving || 'N/A'}</td>
            <td>${row.ratings.creative_thoughts || 'N/A'}</td>
            <td>${row.ratings.analytical_assessment || 'N/A'}</td>
            <td>${row.ratings.self_learner || 'N/A'}</td>
            <td>${row.ratings.financial_management || 'N/A'}</td>
            <td>${row.ratings.know_capabilities || 'N/A'}</td>
            <td>${row.ratings.modern_equipment || 'N/A'}</td>
            <td>${row.ratings.peer_interaction || 'N/A'}</td>
            <td>${row.ratings.professional_friends || 'N/A'}</td>
            <td>${row.ratings.leadership_ability || 'N/A'}</td>
            <td>${row.ratings.effective_communication || 'N/A'}</td>
            <td>${row.ratings.clear_expression || 'N/A'}</td>
            <td>${row.ratings.ethical_actions || 'N/A'}</td>
        </tr>`).join('')}
    </tbody>
</table>

    </div>
</body>
</html>`
;
module.exports = {
    getPdfTemplate,
    getParentsPdfTemplate,
    getAlumniPdfTemplate
};