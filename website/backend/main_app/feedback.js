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
const parentsfeedbackSubmit = async (req, res) => {
    const {
        student_name,
        register_number,
        branch,
        passed_out_year,
        programme,
        ratings
    } = req.body;

    // Destructure ratings object
    const {
        infrastructure_facilities,
        college_ambience,
        authority_approachability,
        hostel_facilities,
        library_sports_facilities,
        security_safety_measures,
        faculty_academic_skills,
        learning_experience,
        environment_diversity,
        placement_opportunities,
        technical_knowledge_improvement,
        college_environment_development
    } = ratings;

    // SQL insert query
    const insertQuery = `
        INSERT INTO ParentsFeedback (
            student_name, student_register_number, branch, passed_out_year, programme,
            infrastructure_facilities, college_ambience, authority_approachability,
            hostel_facilities, library_sports_facilities, security_safety_measures,
            faculty_academic_skills, learning_experience, environment_diversity,
            placement_opportunities, technical_knowledge_improvement,
            college_environment_development
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    try {
        const [results] = await pool.query(insertQuery, [
            student_name,
            register_number,
            branch,
            passed_out_year,
            programme,
            infrastructure_facilities,
            college_ambience,
            authority_approachability,
            hostel_facilities,
            library_sports_facilities,
            security_safety_measures,
            faculty_academic_skills,
            learning_experience,
            environment_diversity,
            placement_opportunities,
            technical_knowledge_improvement,
            college_environment_development
        ]);

        // Send a success response
        res.status(200).json({ message: 'Feedback submitted successfully', results });
    } catch (err) {
        // Log error and send error response
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Database error' });
    }
};
const EmployeeFeedbackSubmit = async (req, res) => {
    const {
        hr_name,
        company_name,
        company_address,
        student_name,
        programme,
        branch,
        year_of_joining,
        entry_level_position,
        current_position,
        responsibilities,
        achievements_awards,
        ratings
    } = req.body;

    const {
        technical_knowledge,
        communication_skill,
        independent_thinking,
        new_technology_inclination,
        extra_responsibility,
        work_beyond_schedule,
        organizational_contribution,
        planning_organization_skills,
        leadership_qualities,
        relationship_with_seniors
    } = ratings;

    

    const insertQuery = `
        INSERT INTO EmployeeFeedback (
            hr_name, company_name, company_address, student_name, programme, branch, 
            year_of_joining, entry_level_position, current_position, responsibilities, 
            achievements_awards, technical_knowledge, communication_skill, independent_thinking, 
            new_technology_inclination, extra_responsibility, work_beyond_schedule, 
            organizational_contribution, planning_organization_skills, leadership_qualities, 
            relationship_with_seniors
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    try {
        const [results] = await pool.query(insertQuery, [
            hr_name,
            company_name,
            company_address,
            student_name,
            programme,
            branch,
            year_of_joining,
            entry_level_position,
            current_position,
            responsibilities,
            achievements_awards,
            technical_knowledge,
            communication_skill,
            independent_thinking,
            new_technology_inclination,
            extra_responsibility,
            work_beyond_schedule,
            organizational_contribution,
            planning_organization_skills,
            leadership_qualities,
            relationship_with_seniors
        ]);

        res.status(200).json({ message: 'Employee feedback submitted successfully', results });
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Database error' });
    }
};

module.exports = {
    ratingsubmit,
    parentsfeedbackSubmit,
    EmployeeFeedbackSubmit
};
