import React from 'react';
import './FeedbackPdf.css';
import { Underline } from '../../widgets';
import axios from 'axios';

const FeedbackPdf = () => {
  const handleDownloadPdf = async () => {
    try {
      // Request the PDF file
      const response = await axios.post('/api/generate_pdf', null, {
        responseType: 'blob', // Ensure the response is treated as a blob
      });

      if (response.status === 200) {
        // Create a URL for the blob and trigger download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'supplier-feedback.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove(); // Clean up and remove the link element

        alert('PDF generated and sent to the admin!');
      } else {
        alert('Failed to generate PDF.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while generating the PDF. Please try again.');
    }
  };

  return (
    <div>
      <div className='admin_head'><Underline heading="Admin panel" /></div>
      <div className="box-container">
        <h2 className="box-heading">Download Feedback</h2>
        <select className="box-dropdown">
          <option className='box-option' value="" disabled selected>Choose an option</option>
          <option className='box-option' value="pdf">Supplier Feedback</option>
          <option className='box-option' value="excel">Excel</option>
        </select>
        <button type="button" onClick={handleDownloadPdf}>Download</button>
      </div>
    </div>
  );
}

export default FeedbackPdf;
