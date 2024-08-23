const pool = require("./db.js");

const supplier_ratingsubmit = async (req, res) => {
    const {
        supplier_name,
        product_supplied,
        branch,
        ratings
    } = req.body;

    // Destructure ratings object
    const {
        procurement_process,
        payment_process,
        staff_professionalism,
        receipt_process,
        paperwork_process,
        communication_efficiency,
        ethical_practices,
        business_relationship
    } = ratings;

    // SQL insert query
    const insertQuery = `
        INSERT INTO SupplierFeedback (
            supplier_name, product_supplied, branch,
            procurement_process, payment_process, staff_professionalism,
            receipt_process, paperwork_process, communication_efficiency,
            ethical_practices, business_relationship
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    

    try {
        const [results] = await pool.query(insertQuery, [
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
            business_relationship
        ]);

        // Send a success response
        res.status(200).json({ message: 'Ratings submitted successfully',results });
    } catch (err) {
        // Log error and send error response
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Database error' });
    }
};

const consultancy_ratingsubmit = async (req, res) =>{
    const {
        work_undertaking_dept,
        company_offering,
        nature_of_work,
        date_of_commencement,
        programme,
        ratings
    } = req.body;
    


    const{
        consultancy_fee,
        meeting_deadline,
        work_quality,
        approach
    }= ratings;

    const insertQuery = `
        INSERT INTO ConsultancyFeedback (
            work_undertaking_dept, company_offering, nature_of_work,
            date_of_commencement, programme, consultancy_fee,
            meeting_deadline, work_quality, approach
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    try {
        const [results] = await pool.query(insertQuery, [
            work_undertaking_dept,
            company_offering,
            nature_of_work,
            date_of_commencement,
            programme,
            consultancy_fee,
            meeting_deadline,
            work_quality,
            approach
        ]);

        res.status(200).json({ message: 'Ratings submitted successfully',results });
    } 
    catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Database error' });
    }

}

module.exports = {
    supplier_ratingsubmit,
    consultancy_ratingsubmit
};
