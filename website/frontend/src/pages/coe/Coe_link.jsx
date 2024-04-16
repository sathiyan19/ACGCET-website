import React ,{useEffect}from 'react'
import "./Coe_link.css";
import{
    Backtotop,
    Floatinmenu,
    Underline,
    Content_card
    
  }from"../../widgets";
  
  import
  {
    coe_menu,
    coe_link,
    coe_link1,
    coe_link2,
    
  }from"../../constants/coe";
  import { Radial_menu } from "../../components";
  import { FaEmpire } from "react-icons/fa6";
const Coe_link = () => {
    useEffect(()=>{
        document.title='Accet-COE| Links';
      },[]);
  return (
    <div className="coe_dept">
    <div className="coe_bg">
      <div className="coe_heading">Controller of Examination</div>
      <div className="cse_sub_heading">Links</div>
    </div>
    <section className="coe_dark">
      <div className="dept_float_menu">
        <Floatinmenu
        logo={FaEmpire }
        head="Menu"
        links={coe_menu}
        />
  
      </div>
      <Radial_menu menu_links={coe_menu} />
      
      <div className="coe_link">
      <Underline heading ="NPTEL"/>
      
        <p className="nptel">
           
        NPTEL (National Programme on Technology Enhanced Learning) is an initiative by the Indian Institutes of Technology (IITs) and the Indian Institute of Science (IISc) to provide free high-quality educational resources in engineering, science, and humanities disciplines. Launched in 2003, NPTEL offers video lectures, course materials, and assignments prepared by renowned faculty members from premier educational institutions.

With a vast repository of over 1,600 courses covering diverse subjects, NPTEL caters to students, educators, and professionals seeking to enhance their knowledge and skills. The platform covers topics ranging from computer science, electronics, and mechanical engineering to management, humanities, and basic sciences.

NPTEL's user-friendly interface and flexible learning options make it accessible to learners across the globe. It promotes self-paced learning, allowing individuals to study at their convenience. Additionally, NPTEL certifications are recognized by industries and academia, adding value to learners' resumes and academic profiles. Overall, NPTEL has significantly contributed to democratizing education and fostering continuous learning in the digital age.






        </p>

      </div>
      <div className="content_card_holder">
      {coe_link.map((item)=><Content_card key={item.id} heading={item.program} view={item.pdf}/>)}
      </div>
<div className="udemy">
  <Underline heading="Udemy"/>
  <p className="content">
  Udemy is a leading online learning platform revolutionizing education accessibility worldwide. With a vast library of over tens of thousands of courses covering diverse subjects like technology, business, arts, and personal development, Udemy offers learners the opportunity to expand their skills and knowledge from anywhere at any time. Courses are taught by industry experts, ensuring high-quality content that meets the demands of modern learners. Udemy's flexible learning model enables students to study at their own pace, fitting education into their busy schedules and allowing for seamless integration into their lives. Through engaging video lectures, interactive quizzes, and practical assignments, students gain actionable skills and insights that they can apply immediately in their careers or personal endeavors. Whether individuals are looking to advance their professional skills, explore new interests, or pursue lifelong learning, Udemy provides a dynamic platform for growth, empowerment, and self-improvement on a global scale.
  </p>
</div>
<div className="content_card_holder">
{coe_link1.map((item)=><Content_card key={item.id} heading={item.program} view={item.pdf}/>)}
</div>
<div className="coursera">
  <Underline heading="Coursera"/>
  <p className="content1">
  Coursera is a leading online learning platform offering a wide range of courses, specializations, and degrees in collaboration with top universities and institutions worldwide. With over millions of learners globally, Coursera provides access to high-quality education across diverse subjects including technology, business, humanities, and more. Courses are delivered through video lectures, interactive quizzes, and peer-reviewed assignments, ensuring engaging and effective learning experiences. Learners can choose from self-paced or scheduled classes, allowing for flexibility to accommodate busy schedules. Coursera's specialization programs offer a comprehensive curriculum tailored to specific skill sets, while their degree programs provide opportunities for academic advancement and career development. With a focus on accessibility and affordability, Coursera also offers financial aid and scholarships to eligible learners. Through Coursera, individuals can acquire valuable skills, advance their careers, and pursue their passions, all while benefiting from world-class education from renowned institutions.
  </p>
</div>
<div className="content_card_holder">
{coe_link2.map((item)=><Content_card key={item.id} heading={item.program} view={item.pdf}/>)}
</div>
      </section>
  <Backtotop/>
</div>

  );
}

export default Coe_link