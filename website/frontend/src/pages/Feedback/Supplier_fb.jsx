import React, { useState } from 'react';
import './Supplier_fb.css';
import { Backtotop, Underline } from "../../widgets";
import { supplierFeedbackQuestions } from "../../constants/feedbackQuestions";

const Supplier_fb = () => {
    const [supplierName, setSupplierName] = useState('');
    const [productSupplied, setProductSupplied] = useState('');
    const [branch, setBranch] = useState('');
    const [procurementProcess, setProcurementProcess] = useState('');
    const [paymentProcess, setPaymentProcess] = useState('');
    const [staffProfessionalism, setStaffProfessionalism] = useState('');
    const [receiptProcess, setReceiptProcess] = useState('');
    const [paperworkProcess, setPaperworkProcess] = useState('');
    const [communicationEfficiency, setCommunicationEfficiency] = useState('');
    const [ethicalPractices, setEthicalPractices] = useState('');
    const [feedbackDate, setFeedbackDate] = useState('');
    const [nameError, setNameError] = useState('');
    const [loading, setLoading] = useState(false);

    const validateName = (name) => {
        const nameRegex = /^[A-Za-z\s]{2,30}$/;
        if (!nameRegex.test(name)) {
            setNameError('Name should only contain letters and spaces, and be 2 to 30 characters long.');
            return false;
        } else {
            setNameError('');
            return true;
        }
    };

    const handleNameChange = (e) => {
        const name = e.target.value;
        setSupplierName(name);
        validateName(name);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateName(supplierName)) {
            alert('Please correct the errors before submitting.');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('/api/generate-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    supplier_name: supplierName,
                    product_supplied: productSupplied,
                    branch: branch,
                    procurement_process: procurementProcess,
                    payment_process: paymentProcess,
                    staff_professionalism: staffProfessionalism,
                    receipt_process: receiptProcess,
                    paperwork_process: paperworkProcess,
                    communication_efficiency: communicationEfficiency,
                    ethical_practices: ethicalPractices,
                    feedback_date: feedbackDate
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Supplier_Feedback_Report.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();

            alert('PDF generated successfully!');
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Error generating PDF.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='supplier_fb_container'>
            <div>
                <Underline heading="Supplier Feedback" />
            </div>  
            <form className='supplier_fb_form' onSubmit={handleSubmit}>
                <div className='supplier_fb_row_sl'>
                    <input 
                        type="text" 
                        className='supplier_fb_input' 
                        placeholder='Name of the Supplier*' 
                        value={supplierName}
                        onChange={handleNameChange}
                        required 
                    />
                    {nameError && <p className='supplier_fb_error'>{nameError}</p>}
                </div>
                <div className='supplier_fb_row'>
                    <input 
                        type="text" 
                        className='supplier_fb_input' 
                        placeholder='Product supplied*' 
                        value={productSupplied}
                        onChange={(e) => setProductSupplied(e.target.value)}
                        required 
                    />
                    <select 
                        className="supplier_fb_select" 
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select Branch*</option>
                        <option value="Civil">Civil</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="EEE">EEE</option>
                        <option value="ECE">ECE</option>
                        <option value="CSE">CSE</option>
                    </select>
                </div>
                <h2 className="supplier_fb_subtitle">Please give your valuable feedback on a scale</h2>
                <div className='supplier_fb_feedback'>
                    <p className='supplier_fb_instruction'>5 - Excellent   4 - Satisfied   3 - Good   2 - Not Satisfied   1 - Poor</p>
                    <br />
                    {supplierFeedbackQuestions.map(({ question, translation, name }) => (
                        <div className="supplier_fb_question" key={name}>
                            <p>{question}</p>
                            <p>({translation})</p>
                            <div className="supplier_fb_ratings">
                                {[1, 2, 3, 4, 5].map(num => (
                                    <label key={num}>
                                        <input 
                                            type="radio" 
                                            name={name} 
                                            value={num} 
                                            onChange={(e) => {
                                                if (name === 'procurement_process') setProcurementProcess(e.target.value);
                                                if (name === 'payment_process') setPaymentProcess(e.target.value);
                                                if (name === 'staff_professionalism') setStaffProfessionalism(e.target.value);
                                                if (name === 'receipt_process') setReceiptProcess(e.target.value);
                                                if (name === 'paperwork_process') setPaperworkProcess(e.target.value);
                                                if (name === 'communication_efficiency') setCommunicationEfficiency(e.target.value);
                                                if (name === 'ethical_practices') setEthicalPractices(e.target.value);
                                            }}
                                            required 
                                        />
                                        <span className="custom-radio">{num}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="supplier_fb_btn">
                    <button type="submit" className="supplier_fb_submit" disabled={loading}>
                        {loading ? 'Generating PDF...' : 'Submit'}
                    </button>
                </div>
            </form>
            <Backtotop />
        </div>
    );
};

export default Supplier_fb;
