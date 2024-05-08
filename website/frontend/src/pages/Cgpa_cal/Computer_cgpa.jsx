// import React, { useState } from 'react';

// const ComputerCgpa = () => {
//   const [semester, setSemester] = useState('semester1');

//   const semesters = {
//     semester1: [
//       { subject: "Professional English-I", credits: 3 },
//       { subject: "Matrices, Calculus, and Laplace Transform", credits: 4 },
//       { subject: "Engineering Physics", credits: 4 },
//       { subject: "Engineering Chemistry", credits: 3 },
//       { subject: "Problem Solving And Python Programming", credits: 3 },
//       { subject: "Heritage of Tamils", credits: 1 },
//       { subject: "Problem Solving And Python Programming", credits: 1.5 },
//       { subject: "Physics Laboratory", credits: 1.5 },
//       { subject: "Chemistry Laboratory", credits: 1.5 },
//       { subject: "English Laboratory", credits: 1.5 },
//     ],
//     semester2: [
//       { subject: "Computer Science", credits: 3 },
//       { subject: "Chemistry", credits: 3 },
//       { subject: "History", credits: 2 },
//     ]
//     // Add more semesters and subjects if needed
//   };

//   const populateSubjects = () => {
//     const subjectList = semesters[semester].map(({ subject, credits }) => (
//       <li key={subject}>
//         {subject} - Credits: {credits} - Grade:
//         <select className='grade-select'>
//           <option value="10">O</option>
//           <option value="9">A+</option>
//           <option value="8">A</option>
//           <option value="7">B+</option>
//           <option value="6">B</option>
//           <option value="5">C</option>
//         </select>
//       </li>
//     ));
//     return subjectList;
//   };

//   const calculateSGPA = () => {
//     const gradeSelects = document.querySelectorAll('.grade-select');
//     let totalGradePoints = 0;
//     let totalCredits = 0;

//     gradeSelects.forEach(select => {
//       const grade = parseFloat(select.value);
//       const credits = parseFloat(select.parentElement.textContent.match(/\d+/)[0]);
//       totalGradePoints += grade * credits;
//       totalCredits += credits;
//     });

//     const sgpa = totalGradePoints / totalCredits;
//     const sgpaResult = document.getElementById("sgpaResult");
//     sgpaResult.textContent = `Your SCGPA is: ${sgpa.toFixed(2)}`;
//   };

//   return (
//     <div>
//       <h2>Select Semester</h2>
//       <select onChange={(e) => setSemester(e.target.value)}>
//         <option value="semester1">Semester 1</option>
//         <option value="semester2">Semester 2</option>
       
//       </select>

//       <div>
//         <h2>Subjects</h2>
//         <ul className="subject-list">
//           {populateSubjects()}
//         </ul>
//       </div>

//       <button onClick={calculateSGPA}>Calculate SGPA</button>

//       <div id="sgpaResult"></div>
//     </div>
//   );
// };

// export default ComputerCgpa;
