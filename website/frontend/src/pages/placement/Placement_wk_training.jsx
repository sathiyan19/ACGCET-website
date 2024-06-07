import React, { useEffect } from "react";
import "./Placement_wk_training.css";
import { Backtotop, Floatinmenu, Underline } from "../../widgets";
import {
  placement_mock_drive,
  placement_menu,
} from "../../constants/placement";
import { Radial_menu, Table } from "../../components";
import { FaGraduationCap } from "react-icons/fa";

const oracle2="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/placement/oracle2.webp";
const oracle3="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/placement/oracle3.webp";
const mock1="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/placement/mock1.webp";
const mock2="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/placement/mock2.webp";

 const apps ="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/placement/apps-third-yrs.webp";
 const ansa1 ="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/placement/ansa1.webp";
 const ansa2 ="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/placement/ansa2.webp";
const Visit2="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/placement/place1.webp";
const Visit1="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/placement/place2.webp";

const Placement_wk_training = () => {
  useEffect(() => {
    document.title = "ACCET-Placement-Training";
  }, []);
  const columns = [
    { field: "sno", header: "sno" },
    { field: "dept", header: "Department" },
    { field: "interviewer", header: "Interviewer" },
    { field: "company", header: "Name of the Company" },
  ];
  return (
    <div className="placement">
      <div className="placementbg">
        <div className="placementheading">Placement</div>
        <div className="placement_sub_heading">Training and Workshops</div>
      </div>
      <section className="placementdark">
        <div className="dept_float_menu">
          <Floatinmenu
            logo={FaGraduationCap}
            head="Menu"
            links={placement_menu}
          />
        </div>
        <Radial_menu menu_links={placement_menu} />
        <div className="placement_abt">
          <Underline heading="Oracle's AI/ML Mastery Session" />
          <div className="placement_two-col">
            <p className="placement_content">
              On January 27, 2024, Oracle, with a decade of expertise, conducted
              an immersive orientation program at our campus. The team from
              Oracle, Bangalore, led the session, delving into Artificial
              Intelligence and Machine Learning, providing hands-on practical
              sessions from 9:30 am to 6:00 pm. This firsthand experience
              allowed students to explore technology's forefront and gain
              insights from industry experts.The Oracle orientation program not
              only immersed our students in the intricacies of Artificial
              Intelligence and Machine Learning but also provided them with
              hands-on practical sessions.
            </p>
            <div className="dept_img_holder">
              <img className="dept_img" src={oracle2} />
            </div>
          </div>
          <div className="placement_two-col1">
            <div className="dept_img_holder2">
              <img className="dept_img" src={oracle3} />
            </div>
            <p className="placement_content">
              This groundbreaking initiative, steered by the 1999 batch alumni,
              served as a transformative platform for our students to gain
              invaluable exposure to cutting-edge technologies.This Program
              includes informative lectures on Java, Oracle databases, and
              offers valuable insights for career development, providing
              participants with a holistic learning experience.It went beyond
              theoretical concepts, allowing them to delve into real-world
              applications and fostering a deeper understanding of the dynamic
              landscape of technology. A seamless blend of industry expertise
              and interactive sessions, this program opened new horizons for
              career growth and technological prowess.
            </p>
          </div>
        </div>
        <div className="placement_abt1">
          <Underline heading="Mock Drive" />
          <div className="placement_two-col">
            <p className="placement_content">
              With an aim to help third-year students understand and have a
              campus-drive experience, a mock campus drive was organized by the
              Dept. of Training & Placement from 29.03.24-31.03.24 on the
              college campus. The 1995-99 batch alumni voluntarily supported by
              arranging panel members for all the departments.The event was
              begun on 29.03.24 with the first round on General and Technical
              Aptitude in which 293 students participated, about 90% of the
              students were shortlisted for the technical round which was held
              on 30.03.24.
            </p>
            <div className="dept_img_holder">
              <img className="dept_img" src={mock1} />
            </div>
          </div>
          <div className="placement_two-col1">
            <div className="dept_img_holder2">
              <img className="dept_img" src={mock2} />
            </div>
            <p className="placement_content">
              The GD session was conducted for the students on core subjects and
              was completed by 8.30 pm. The interviews continued on 31.03.24 for
              EEE & Mechanical students and the program was concluded by 4.30
              pm. Twenty alumni of the 1995-99 batch were present as panel
              members to conduct the mock interviews who spared their long
              weekend and spent their day with the students. They gave their
              individual feedback and an overall review of the students'
              performances. Many thanks to all the alumni for their presence and
              invaluable guidance.
            </p>
          </div>
        </div>
        <h2>Mock Drive Panel List</h2>
        <div className="placement_mock_tab">
          <Table data={placement_mock_drive} columns={columns} />
        </div>
        <div className='placement_abt2'>
        <Underline heading="Campus Visit"/> 
        <div className='placement_two-col'>
          <p className='placement_content'>
          We were delighted to host the top-level management team from Base Automation for a significant campus visit aimed at establishing a cutting-edge Industrial Automation Lab dedicated to research and development. This initiative represents a transformative leap in our educational approach, providing students with unparalleled opportunities to engage directly with the latest advancements in automation technology. The proposed lab will be a hub for hands-on learning, where students can work on real-time projects that reflect the intricate challenges of modern industrial systems. This immersive experience is designed to bridge the gap between classroom theory and practical application, equipping our students with the skills and confidence needed to excel in the rapidly evolving field of industrial automation.
          </p>
          <div className="dept_img_holder">
            <img className="dept_img" src={Visit1} />
          </div>
        </div>
        <div className='placement_two-col1'>
        <div className="dept_img_holder2">
            <img className="dept_img" src={Visit2} />
          </div>
          <p className='placement_content'>
          By integrating these state-of-the-art facilities into our academic environment, we are fostering a culture of innovation and problem-solving that extends beyond the classroom. Students will have the opportunity to collaborate on projects, develop new technologies, and gain insights into industry practices, all within a supportive, technologically advanced setting. This collaboration with Base Automation not only enriches our curriculum but also enhances our institutional reputation as a leader in automation education. We are excited about the future possibilities this lab will bring, preparing our students to be the pioneers of tomorrow's industrial solutions.
          </p>
        </div>
        </div>
        <div className='placement_abt3'>
        <Underline heading="General Aptitude Assessment for third years"/> 
        <div className='placement_two-col'>
          <p className='placement_content'>
          The third-year general aptitude test, held on March 22, 2024, was a significant event for students aiming to assess and improve their cognitive and problem-solving abilities. This annual examination, conducted across various educational institutions, is designed to evaluate a broad spectrum of skills, including logical reasoning, quantitative analysis, verbal ability, and data interpretation.

The test is a pivotal part of the academic calendar, helping students gauge their readiness for competitive exams and future career challenges. This year's edition saw an increase in participation, reflecting a growing awareness among students about the importance of aptitude tests in academic and professional development.


          </p>
          <div className="dept_img_holder">
            <img className="dept_img" src={apps} />
          </div>
        </div>
     
         <div className='placement_abt4'>
        <Underline heading="Training on ANSA software for Mechanical Engineering students"/> 
        <div className='placement_two-col'>
          <p className='placement_content'>
          The recent training session on ANSA software for Mechanical Engineering students provided an invaluable opportunity to gain hands-on experience with a crucial tool in the industry. ANSA, known for its advanced pre-processing capabilities, is essential for finite element analysis (FEA) and computer-aided engineering (CAE). During the training, students were introduced to the software’s interface, learning how to create and manipulate complex models, mesh geometries, and set up simulations. This practical exposure is vital for understanding real-world engineering problems and enhancing their technical skill set.
          </p>
          <div className="dept_img_holder">
            <img className="dept_img" src={ansa1} />
          </div>
        </div>
        <div className='placement_two-col1'>
        <div className="dept_img_holder2">
            <img className="dept_img" src={ansa2} />
          </div>
          <p className='placement_content'>
          By integrating ANSA training into their curriculum, the Mechanical Engineering department aims to bridge the gap between theoretical knowledge and practical application. Students can now better prepare for careers in automotive, aerospace, and other engineering sectors where FEA is extensively used. This training not only boosts their employability but also equips them with the necessary tools to tackle engineering challenges, fostering a deeper comprehension of mechanical systems and their analysis.
          </p>
        </div>
        </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Placement_wk_training;
