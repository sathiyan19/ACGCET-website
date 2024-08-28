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

};

const collaborator_ratingsubmit = async (req, res) => {
    const {
        project_name,
        funding_agency,
        duration,
        principal_invigilator,
        authority_name,
        ratings
    } = req.body;
    


    const{
        proposal_objective,
        state_of_art,
        methodology_and_action_plan,
        performance_milestone,
        deliverables,
        estimated_expenditure,
        appoinment_of_staffs,
        completion_in_time,
        expected_result,
        review_performance,
        project_closure_time,
        literature_collected,
        final_technical_report,
        developed_hardware_or_software,
        proposal_deliverables,
        publications,
        patents
    }= ratings;

    const insertQuery = `
        INSERT INTO CollaboratorFeedback (
            project_name,
            funding_agency,
            duration,
            principal_invigilator,
            authority_name,
            proposal_objective,
            state_of_art,
            methodology_and_action_plan,
            performance_milestone,
            deliverables,
            estimated_expenditure,
            appoinment_of_staffs,
            completion_in_time,
            expected_result,
            review_performance,
            project_closure_time,
            literature_collected,
            final_technical_report,
            developed_hardware_or_software,
            proposal_deliverables,
            publications,
            patents
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    try {
        const [results] = await pool.query(insertQuery, [
        project_name,
        funding_agency,
        duration,
        principal_invigilator,
        authority_name,
        proposal_objective,
        state_of_art,
        methodology_and_action_plan,
        performance_milestone,
        deliverables,
        estimated_expenditure,
        appoinment_of_staffs,
        completion_in_time,
        expected_result,
        review_performance,
        project_closure_time,
        literature_collected,
        final_technical_report,
        developed_hardware_or_software,
        proposal_deliverables,
        publications,
        patents
        ]);

        res.status(200).json({ message: 'Ratings submitted successfully',results });
    } 
    catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Database error' });
    }
};

const std_teaching_ratingsubmit = async (req, res) => {
    const {
        programme,
        semester,
        course_title,
        course_code,
        faculty,
        student_email,
        ratings
    } = req.body;
    


    const{
        knowledge_in_fundamentals,
        analyze_engineering_problems,
        identify_design_solutions,
        data_analysis_interpretation,
        use_modern_tools,
        contextual_knowledge,
        importance_of_solutions,
        ethical_principles,
        teamwork_ability,
        communication_effectiveness,
        project_management_finance,
        learn_new_techniques,
        analyze_design_solutions_electronics,
        analyze_design_solutions_rf_microwaves,
        design_web_mobile_apps
    }= ratings;

    const insertQuery = `
        INSERT INTO TeachingAndLearningFeedback (
            programme,
            semester,
            course_title,
            course_code,
            faculty,
            student_email,
            knowledge_in_fundamentals,
            analyze_engineering_problems,
            identify_design_solutions,
            data_analysis_interpretation,
            use_modern_tools,
            contextual_knowledge,
            importance_of_solutions,
            ethical_principles,
            teamwork_ability,
            communication_effectiveness,
            project_management_finance,
            learn_new_techniques,
            analyze_design_solutions_electronics,
            analyze_design_solutions_rf_microwaves,
            design_web_mobile_apps
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    try {
        const [results] = await pool.query(insertQuery, [
            programme,
            semester,
            course_title,
            course_code,
            faculty,
            student_email,
            knowledge_in_fundamentals,
            analyze_engineering_problems,
            identify_design_solutions,
            data_analysis_interpretation,
            use_modern_tools,
            contextual_knowledge,
            importance_of_solutions,
            ethical_principles,
            teamwork_ability,
            communication_effectiveness,
            project_management_finance,
            learn_new_techniques,
            analyze_design_solutions_electronics,
            analyze_design_solutions_rf_microwaves,
            design_web_mobile_apps
        ]);

        res.status(200).json({ message: 'Ratings submitted successfully',results });
    } 
    catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Database error' });
    }
};

const std_practical_ratingsubmit = async (req, res) => {
    const {
        programme,
        semester,
        course_title,
        course_code,
        faculty,
        student_email,
        ratings
    } = req.body;
    


    const{
        lab_manual_supply,
        clean_and_neatness_of_lab,
        equipment_working_condition,
        student_performance_on_own_hand,
        lab_hours_for_experiment,
        faculty_cooperation,
        faculty_knowledge,
        lab_reports_checking,
        conducting_model_exams,
        on_time_of_practical_exams,
        helpful_of_experiments
    }= ratings;

    const insertQuery = `
        INSERT INTO PracticalFeedback (
            programme,
            semester,
            course_title,
            course_code,
            faculty,
            student_email,
            lab_manual_supply,
            clean_and_neatness_of_lab,
            equipment_working_condition,
            student_performance_on_own_hand,
            lab_hours_for_experiment,
            faculty_cooperation,
            faculty_knowledge,
            lab_reports_checking,
            conducting_model_exams,
            on_time_of_practical_exams,
            helpful_of_experiments
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?)
    `;

    try {
        const [results] = await pool.query(insertQuery, [
            programme,
            semester,
            course_title,
            course_code,
            faculty,
            student_email,
            lab_manual_supply,
            clean_and_neatness_of_lab,
            equipment_working_condition,
            student_performance_on_own_hand,
            lab_hours_for_experiment,
            faculty_cooperation,
            faculty_knowledge,
            lab_reports_checking,
            conducting_model_exams,
            on_time_of_practical_exams,
            helpful_of_experiments
        ]);

        res.status(200).json({ message: 'Ratings submitted successfully',results });
    } 
    catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Database error' });
    }
};

const std_technical_seminar_ratingsubmit = async (req, res) => {
    const {
        programme,
        semester,
        course_title,
        course_code,
        faculty,
        student_email,
        ratings
    } = req.body;
    


    const{
        faculty_objectives_plan,
        faculty_advice_topics,
        effectiveness_modern_aids,
        faculty_support_skills,
        seminar_class_environment,
        motivation_to_do_best,
        appreciation_of_ideas,
        enthusiasm_interest,
        faculty_accessibility,
        course_interest_platform
    }= ratings;

    const insertQuery = `
        INSERT INTO TechnicalSeminarFeedback (
            programme,
            semester,
            course_title,
            course_code,
            faculty,
            student_email,
            faculty_objectives_plan,
            faculty_advice_topics,
            effectiveness_modern_aids,
            faculty_support_skills,
            seminar_class_environment,
            motivation_to_do_best,
            appreciation_of_ideas,
            enthusiasm_interest,
            faculty_accessibility,
            course_interest_platform
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?)
    `;

    try {
        const [results] = await pool.query(insertQuery, [
            programme,
            semester,
            course_title,
            course_code,
            faculty,
            student_email,
            faculty_objectives_plan,
            faculty_advice_topics,
            effectiveness_modern_aids,
            faculty_support_skills,
            seminar_class_environment,
            motivation_to_do_best,
            appreciation_of_ideas,
            enthusiasm_interest,
            faculty_accessibility,
            course_interest_platform
        ]);

        res.status(200).json({ message: 'Ratings submitted successfully',results });
    } 
    catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Database error' });
    }
};

const std_mini_project_ratingsubmit = async (req, res) => {
    const {
        programme,
        semester,
        course_title,
        course_code,
        faculty,
        student_email,
        ratings
    } = req.body;
    


    const{
        project_objectives,
        technical_support,
        facilities_offered,
        frequency_0f_project_reviews,
        helpful_of_project_reviews,
        support_of_suppervisor,
        implementation_of_knowledge,
        motivation_to_do_new_findings,
        project_beniefit_to_society,
        appreciation
    }= ratings;

    const insertQuery = `
        INSERT INTO MiniProjectFeedback (
            programme,
            semester,
            course_title,
            course_code,
            faculty,
            student_email,
            project_objectives,
            technical_support,
            facilities_offered,
            frequency_0f_project_reviews,
            helpful_of_project_reviews,
            support_of_suppervisor,
            implementation_of_knowledge,
            motivation_to_do_new_findings,
            project_beniefit_to_society,
            appreciation
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?)
    `;

    try {
        const [results] = await pool.query(insertQuery, [
            programme,
            semester,
            course_title,
            course_code,
            faculty,
            student_email,
            project_objectives,
            technical_support,
            facilities_offered,
            frequency_0f_project_reviews,
            helpful_of_project_reviews,
            support_of_suppervisor,
            implementation_of_knowledge,
            motivation_to_do_new_findings,
            project_beniefit_to_society,
            appreciation
        ]);

        res.status(200).json({ message: 'Ratings submitted successfully',results });
    } 
    catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Database error' });
    }
};

module.exports = {
    supplier_ratingsubmit,
    consultancy_ratingsubmit,
    collaborator_ratingsubmit,
    std_teaching_ratingsubmit,
    std_practical_ratingsubmit,
    std_technical_seminar_ratingsubmit,
    std_mini_project_ratingsubmit
};
