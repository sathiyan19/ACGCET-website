const fb_pdftemplate = ({
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
  }) => {
    const today = new Date();
    const tableRows = `
      <tr>
        <td>Supplier Name</td>
        <td>${supplier_name}</td>
      </tr>
      <tr>
        <td>Product Supplied</td>
        <td>${product_supplied}</td>
      </tr>
      <tr>
        <td>Branch</td>
        <td>${branch}</td>
      </tr>
      <tr>
        <td>Procurement Process</td>
        <td>${procurement_process}</td>
      </tr>
      <tr>
        <td>Payment Process</td>
        <td>${payment_process}</td>
      </tr>
      <tr>
        <td>Staff Professionalism</td>
        <td>${staff_professionalism}</td>
      </tr>
      <tr>
        <td>Receipt Process</td>
        <td>${receipt_process}</td>
      </tr>
      <tr>
        <td>Paperwork Process</td>
        <td>${paperwork_process}</td>
      </tr>
      <tr>
        <td>Communication Efficiency</td>
        <td>${communication_efficiency}</td>
      </tr>
      <tr>
        <td>Ethical Practices</td>
        <td>${ethical_practices}</td>
      </tr>
      <tr>
        <td>Feedback Date</td>
        <td>${feedback_date}</td>
      </tr>
    `;
  
    return `
      <!doctype html>
      <html>
        <head>
          <meta charset='utf-8' />
          <title>Supplier Feedback</title>
          <style>
            table {
              width: 100%;
              border-collapse: collapse;
            }
            table, th, td {
              border: 1px solid black;
            }
            th, td {
              padding: 8px;
              text-align: left;
            }
          </style>
        </head>
        <body>
          <h1>Supplier Feedback Report</h1>
          <table>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </body>
      </html>
    `;
  };
  
  module.exports = fb_pdftemplate;
  