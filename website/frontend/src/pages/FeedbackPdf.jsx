import React from 'react';
import axios from 'axios';
function FeedbackPdf() {
  const handleDownloadPdf = async () => {
    try {
      const response = await axios.post('/api/generate_pdf', {
        method: 'POST',
      });
      if (response.ok) {
        alert('PDF generated and sent to the admin!');
      } else {
        alert('Failed to generate PDF.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="feedbackbutton">
      <button type="button" onClick={handleDownloadPdf}>Download PDF</button>
    </div>
  );
}

export default FeedbackPdf;
