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

module.exports = getPdfTemplate;
