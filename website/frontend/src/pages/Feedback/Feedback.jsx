import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Underline } from "../../widgets";
import alumini_fb from "../../assets/pictures/alumini_fb.webp";
import faculty_fb from "../../assets/pictures/faculty_fb.webp";
import student_fb from "../../assets/pictures/student_fb.webp";
import colloborator_fb from "../../assets/pictures/colloborator_fb.webp";
import supplier_fb from "../../assets/pictures/supplier_fb.webp";
import employer_fb from "../../assets/pictures/employer_fb.webp";
import parent_fb from "../../assets/pictures/parent_fb.webp";
import facultyblack from "../../assets/pictures/facultyblack.webp";
import collabooratorblack from "../../assets/pictures/collabooratorblack.webp";
import counsaltancyblack from "../../assets/pictures/counsaltancyblack.webp";
import parentsblack from "../../assets/pictures/parentsblack.webp";
import consultancy_fb from "../../assets/pictures/consultancy_fb.webp";
import graduationblack from "../../assets/pictures/graduationblack.webp";
import studentblack from "../../assets/pictures/studentblack.webp";
import supplierblack from "../../assets/pictures/supplierblack.webp";
import employeeblack from "../../assets/pictures/employeeblack.webp";
import "./Feedback.css";

const Feedback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "ACCET-FEEDBACK";
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="feedback_whole">
      <div className="feedback_heading">
        <Underline heading="Feedback" />
      </div>

      <div className="feedback_whole_container">
        <div className="feedback_grid">
          <div
            className="student_feedback"
            onClick={() => handleNavigation("/feedback/student_fb")}
          >
            <div className="feedback_top_image">
              <img className="feedback_image" alt="text" src={studentblack} />
            </div>
            <div className="feedback_content">
              <div className="feedback_description">Student </div>
              <div className="feedback_description1">Feedback</div>
              <div className="feedback-card-arrow">➔</div>
            </div>
          </div>

          <div
            className="alumini_feedback"
            onClick={() => handleNavigation("/feedback/alumini_fb")}
          >
            <div className="feedback_top_image">
              <img className="feedback_image" src={graduationblack} />
            </div>
            <div className="feedback_content">
              <div className="feedback_description">Alumni </div>
              <div className="feedback_description1">Feedback</div>
              <div className="feedback-card-arrow">➔</div>
            </div>
          </div>

          <div
            className="faculty_feedback"
            onClick={() => handleNavigation("/faculty-feedback")}
          >
            <div className="feedback_top_image">
              <img className="feedback_image" src={facultyblack} />
            </div>
            <div className="feedback_content">
              <div className="faculty_description">
              <div className="feedback_description">Faculty </div>
              <div className="feedback_description1">Feedback</div>
              <div className="feedback-card-arrow">➔</div>
              </div>
            </div>
          </div>

          <div
            className="counsaltancy_feedback"
            onClick={() => handleNavigation("/feedback/consultancy_fb")}
          >
            <div className="feedback_top_image">
              <img className="feedback_image" src={counsaltancyblack} />
            </div>
            <div className="feedback_content">
              <div className="feedback_description">Consultancy </div>
              <div className="feedback_description1">Feedback</div>
              <div className="feedback-card-arrow">➔</div>
            </div>
          </div>

          <div
            className="employer_feedback"
            onClick={() => handleNavigation("/feedback/employer_fb")}
          >
            <div className="feedback_top_image">
              <img className="feedback_image" src={employeeblack} />
            </div>
            <div className="feedback_content">
              <div className="feedback_description">Employer </div>
              <div className="feedback_description1">Feedback</div>
              <div className="feedback-card-arrow">➔</div>
            </div>
          </div>

          <div
            className="parents_feedback"
            onClick={() => handleNavigation("/feedback/parents_fb")}
          >
            <div className="feedback_top_image">
              <img className="feedback_image" src={parentsblack} />
            </div>
            <div className="feedback_content">
              <div className="feedback_description">Parents </div>
              <div className="feedback_description1">Feedback</div>
              <div className="feedback-card-arrow">➔</div>
            </div>
          </div>

          <div
            className="supplier_feedback"
            onClick={() => handleNavigation("/feedback/supplier_fb")}
          >
            <div className="feedback_top_image">
              <img className="feedback_image" src={supplierblack} />
            </div>
            <div className="feedback_content">
              <div className="feedback_description">Supplier </div>
              <div className="feedback_description1">Feedback</div>
              <div className="feedback-card-arrow">➔</div>
            </div>
          </div>

          <div
            className="collaborator_feedback"
            onClick={() => handleNavigation("/feedback/collaborator_fb")}
          >
            <div className="feedback_top_image">
              <img className="feedback_image" src={collabooratorblack} />
            </div>
            <div className="feedback_content">
              <div className="feedback_description">Collaborator </div>
              <div className="feedback_description1">Feedback</div>
              <div className="feedback-card-arrow">➔</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
