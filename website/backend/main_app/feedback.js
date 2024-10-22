const pool = require("./db.js");


const ratingsubmit = async (req, res) => {
    const {
        supplier_name,
        product_supplied,
        branch,
        ratings
    } = req.body;

    
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
const EmployeeSubmit = async (req, res) => {
    // Log the incoming request body
    // console.log(req.body);

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
        department,
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
            department,
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
            department,
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
        department,
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
            department,
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
            department,
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
        department,
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
            department,
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
            department,
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
        department,
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
            department,
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
            department,
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


// const parentsfeedbackSubmit = async (req, res) => {
//     const {
//         student_name,
//         register_number,
//         branch,
//         passed_out_year,
//         programme,
//         ratings
//     } = req.body;

//     // Destructure ratings object
//     const {
//         infrastructure_facilities,
//         college_ambience,
//         authority_approachability,
//         hostel_facilities,
//         library_sports_facilities,
//         security_safety_measures,
//         faculty_academic_skills,
//         learning_experience,
//         environment_diversity,
//         placement_opportunities,
//         technical_knowledge_improvement,
//         college_environment_development
//     } = ratings;

//     // SQL insert query
//     const insertQuery = `
//         INSERT INTO ParentsFeedback (
//             student_name, student_register_number, branch, passed_out_year, programme,
//             infrastructure_facilities, college_ambience, authority_approachability,
//             hostel_facilities, library_sports_facilities, security_safety_measures,
//             faculty_academic_skills, learning_experience, environment_diversity,
//             placement_opportunities, technical_knowledge_improvement,
//             college_environment_development
//         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;

//     try {
//         const [results] = await pool.query(insertQuery, [
//             student_name,
//             register_number,
//             branch,
//             passed_out_year,
//             programme,
//             infrastructure_facilities,
//             college_ambience,
//             authority_approachability,
//             hostel_facilities,
//             library_sports_facilities,
//             security_safety_measures,
//             faculty_academic_skills,
//             learning_experience,
//             environment_diversity,
//             placement_opportunities,
//             technical_knowledge_improvement,
//             college_environment_development
//         ]);

//         // Send a success response
//         res.status(200).json({ message: 'Feedback submitted successfully', results });
//     } catch (err) {
//         // Log error and send error response
//         console.error('Error inserting data:', err);
//         res.status(500).json({ error: 'Database error' });
//     }
// };

// const EmployeeSubmit = async (req, res) => {
//     const {
//         hr_name,
//         company_name,
//         company_address,
//         student_name,
//         programme,
//         branch,
//         year_of_joining,
//         entry_level_position,
//         current_position,
//         responsibilities,
//         achievements_awards,
//         ratings
//     } = req.body;

//     const {
//         technical_knowledge,
//         communication_skill,
//         independent_thinking,
//         new_technology_inclination,
//         extra_responsibility,
//         work_beyond_schedule,
//         organizational_contribution,
//         planning_organization_skills,
//         leadership_qualities,
//         relationship_with_seniors
//     } = ratings;

//     const insertQuery = `
//         INSERT INTO EmployeeFeedback (
//             hr_name, company_name, company_address, student_name, programme, branch, 
//             year_of_joining, entry_level_position, current_position, responsibilities, 
//             achievements_awards, technical_knowledge, communication_skill, independent_thinking, 
//             new_technology_inclination, extra_responsibility, work_beyond_schedule, 
//             organizational_contribution, planning_organization_skills, leadership_qualities, 
//             relationship_with_seniors
//         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;

//     try {
//         const [results] = await pool.query(insertQuery, [
//             hr_name,
//             company_name,
//             company_address,
//             student_name,
//             programme,
//             branch,
//             year_of_joining,
//             entry_level_position,
//             current_position,
//             responsibilities,
//             achievements_awards,
//             technical_knowledge,
//             communication_skill,
//             independent_thinking,
//             new_technology_inclination,
//             extra_responsibility,
//             work_beyond_schedule,
//             organizational_contribution,
//             planning_organization_skills,
//             leadership_qualities,
//             relationship_with_seniors
//         ]);

//         res.status(200).json({ message: 'Employee feedback submitted successfully', results });
//     } catch (err) {
//         console.error('Error inserting data:', err);
//         res.status(500).json({ error: 'Database error', details: err.message });
//     }
// };
// const alumniFeedbackSubmit = async (req, res) => {
//     try {
//         const {
//             name,
//             designation,
//             programme,
//             department,
//             passedOutYear,
//             higherStudies = 'no',
//             institution = null,
//             competitiveExam = 'no',
//             examName = null,
//             company = null,
//             entryLevelPosition = null,
//             currentPosition = null,
//             responsibilities = null,
//             achievements = null,
//             serviceStatus = 'no',
//             city = null,
//             ratings = {}
//         } = req.body;

//         const query = `
//             INSERT INTO AlumniFeedback (
//                 alumni_name, designation, programme, department, passed_out_year,
//                 higher_studies, higher_studies_institution, competitive_exam, competitive_exam_name,
//                 company_name, entry_level_position, current_position, responsibilities, achievements,
//                 in_service, city,
//                 knowledge_in_field, latest_developments, practical_solving, creative_thoughts,
//                 analytical_assessment, self_learner, financial_management, know_capabilities,
//                 modern_equipment, peer_interaction, professional_friends, leadership_ability,
//                 effective_communication, clear_expression, ethical_actions
//             ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//         `;
//         const values = [
//             name, designation, programme, department, passedOutYear,
//             String(higherStudies), institution, String(competitiveExam), examName,
//             company, entryLevelPosition, currentPosition, responsibilities, achievements,
//             String(serviceStatus), city,
//             ratings.knowledge_in_field, ratings.latest_developments, ratings.practical_solving, ratings.creative_thoughts,
//             ratings.analytical_assessment, ratings.self_learner, ratings.financial_management, ratings.know_capabilities,
//             ratings.modern_equipment, ratings.peer_interaction, ratings.professional_friends, ratings.leadership_ability,
//             ratings.effective_communication, ratings.clear_expression, ratings.ethical_actions
//         ];
        
//         await pool.query(query, values);
//         res.status(200).json({ message: "Feedback submitted successfully" });
//     } catch (error) {
//         console.error('Error inserting data:', error);
//         res.status(500).json({ error: "An error occurred while submitting your feedback" });
//     }
// };

const alumniFeedbackSubmit = async (req, res) => {
    try {
        const {
            name,
            designation,
            programme,
            department,
            passedOutYear,
            higherStudies = 'no',
            institution = null,
            competitiveExam = 'no',
            examName = null,
            company = null,
            entryLevelPosition = null,
            currentPosition = null,
            responsibilities = null,
            achievements = null,
            serviceStatus = 'no',
            city = null,
            ratings = {}
        } = req.body;

        const query = `
            INSERT INTO AlumniFeedback  (
                alumni_name, designation, programme, department, passed_out_year,
                higher_studies, higher_studies_institution, competitive_exam, competitive_exam_name,
                company_name, entry_level_position, current_position, responsibilities, achievements,
                in_service, city,
                knowledge_in_field, latest_developments, practical_solving, creative_thoughts,
                analytical_assessment, self_learner, financial_management, know_capabilities,
                modern_equipment, peer_interaction, professional_friends, leadership_ability,
                effective_communication, clear_expression, ethical_actions
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            name, designation, programme, department, passedOutYear,
            String(higherStudies), institution, String(competitiveExam), examName,
            company, entryLevelPosition, currentPosition, responsibilities, achievements,
            String(serviceStatus), city,
            ratings.knowledge_in_field, ratings.latest_developments, ratings.practical_solving, ratings.creative_thoughts,
            ratings.analytical_assessment, ratings.self_learner, ratings.financial_management, ratings.know_capabilities,
            ratings.modern_equipment, ratings.peer_interaction, ratings.professional_friends, ratings.leadership_ability,
            ratings.effective_communication, ratings.clear_expression, ratings.ethical_actions
        ];
        
        await pool.query(query, values);
        res.status(200).json({ message: "Feedback submitted successfully" });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: "An error occurred while submitting your feedback" });
    }
};
module.exports = {
    ratingsubmit,
    parentsfeedbackSubmit,
    EmployeeSubmit,
    consultancy_ratingsubmit,
    collaborator_ratingsubmit,
    std_teaching_ratingsubmit,
    std_practical_ratingsubmit,
    std_technical_seminar_ratingsubmit,
    std_mini_project_ratingsubmit,
    parentsfeedbackSubmit,
    // EmployeeSubmit,
    alumniFeedbackSubmit
};
