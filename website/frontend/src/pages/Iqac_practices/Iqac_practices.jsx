import React,{useEffect} from 'react'
import "./Iqac_practices.css";
import { Floatinmenu,Underline } from '../../widgets';
import { iqac_min,iqac_floater_menu } from "../../constants/iqac"

const Iqac_practices = () => {
  useEffect(()=>{
    document.title='Accet-Iqac| Iqac-Practices';
  },[]);
  return (
    <div className="Iqac_practices">
    <div className ="iqac_float">
      <Floatinmenu head={iqac_floater_menu.head}  links={iqac_floater_menu.links}/>
<<<<<<< HEAD
    </div>
   
   
      
           <div className="Iqac_practices_heading">
       <Underline heading ="Best Practices of the Institute"/>
</div>
<div className='Iqac_practices_subhead'>
In-house Design and Development of IT Services for the Institute 
</div>
<div  className="Iqac_practices_content">
  { <p className='Iqac_practices_subheading1'>
=======
      <div className="iqac-heading">
        <Underline heading ="Best Practices Of The Institute
"></Underline>
</div>
<div className="iqac-content">
In-house Design and Development of IT Services for the Institute :
</div>
<div  className="iqac-content">
  { <p className='iqac-subheading1'>
>>>>>>> 89bcd2a12355a8c09ba57f63a42e45f5b3e2725e
Objectives of the Practice
</p> }
<p>
To involve students in real-time IT projects, fostering the development of higher-order cognitive abilities.
To bring out industry-ready students.
</p>

</div>
<<<<<<< HEAD

<div  className="Iqac_practices_content">
< p className="Iqac_practices_subheading1">
=======
{/* <div className="subheading1">
The Context
</div> */}
<div  className="iqac-content">
< p className="iqac-subheading1">
>>>>>>> 89bcd2a12355a8c09ba57f63a42e45f5b3e2725e
The Context
</p>
<p>
The institute depends on third parties for its IT needs.This practice intends to involve computer science students to build IT services to practice it under a faculty mentor
</p>
</div>
<<<<<<< HEAD

<div  className="Iqac_practices_content">
<p className="Iqac_practices_subheading1">
=======
{/* <div className="subheading1">
The Practice
</div> */}
<div  className="iqac-content">
<p className="iqac-subheading1">
>>>>>>> 89bcd2a12355a8c09ba57f63a42e45f5b3e2725e
The Practice
</p>
<p>
A group of students from the Computer Science and Engineering department, along with a faculty mentor, is involved in the design, development, and maintenance of IT services-related projects for the institute as their final year projects. This enables experiential learning, allowing them to understand the intricacies of real-time projects.
</p>
</div>
<<<<<<< HEAD

<div  className="Iqac_practices_content">
  <p  className="Iqac_practices_subheading1">
=======
{/* <div className="subheading1">
Evidence of Success
</div> */}
<div  className="iqac-content">
  <p  className="iqac-subheading1">
>>>>>>> 89bcd2a12355a8c09ba57f63a42e45f5b3e2725e
Evidence of Success</p>
<p>
The students and faculty have successfully designed and developed a bunch of real-time IT services. The institute's own website is created by our students. They have also built software for the Tamil Nadu Government's Lateral Entry Admission, which has seamlessly handled thousands of applications without a single snag
</p>
</div>

<<<<<<< HEAD
<div  className="Iqac_practices_content1">
  <p className="Iqac_practices_subheading1">
=======
</div> */}
<div  className="iqac-content1">
  <p className="iqac-subheading1">
>>>>>>> 89bcd2a12355a8c09ba57f63a42e45f5b3e2725e
Problems Encountered and Resources Required
</p>
<p>
The students work with various programming languages, addressing both technical and non-technical issues. The faculty mentors closely monitor their progress and guide them in the appropriate direction to build products that meet industrial standards
</p>
</div>



    
   


      
    </div>
  )
}

export default Iqac_practices
