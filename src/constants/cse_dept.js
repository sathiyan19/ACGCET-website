import dp from "../assets/pictures/dp.jpg";
import dpm from '../assets/pictures/boy.webp'
import dpf from '../assets/pictures/girl.webp'
import cover from "../assets/pictures/cse_banner.webp";

import swayam from '../assets/pictures/swayam.webp'
import robotics from '../assets/pictures/robotics.webp'
import placement from '../assets/pictures/placement.webp'

import cse_com_lab from '../assets/pictures/cse_dept/cse_labs/cse_com_lab.webp'
import cse_case_lab from '../assets/pictures/cse_dept/cse_labs/cse_case_lab.webp'
import cse_grap_lab from '../assets/pictures/cse_dept/cse_labs/cse_grap_lab.webp'
import cse_dbms_lab from '../assets/pictures/cse_dept/cse_labs/cse_dbms_lab.webp'
import cse_mpmc_lab from '../assets/pictures/cse_dept/cse_labs/cse_mpmc_lab.webp'

import uma_rani from '../assets/pictures/cse_dept/cse_faculties/umarani.webp'

import suhaila from '../assets/pictures/cse_dept/cse_faculties/suhaila.webp'
import sk from '../assets/pictures/cse_dept/cse_faculties/sk.webp'
import hema from '../assets/pictures/cse_dept/cse_faculties/hema.webp'
import anbu from '../assets/pictures/cse_dept/cse_faculties/anbuselvi.webp'
import karthiga from '../assets/pictures/cse_dept/cse_faculties/karthiga.webp'
import rajanandhini from '../assets/pictures/cse_dept/cse_faculties/rajanandini.webp'
import vijay from '../assets/pictures/cse_dept/cse_faculties/Vijay Profile 2023.webp'
import chandraprabha from '../assets/pictures/cse_dept/cse_faculties/chandraprabha.webp'
import raja from '../assets/pictures/cse_dept/cse_faculties/raja.webp'
import rajendran from '../assets/pictures/cse_dept/cse_faculties/rajendran.webp'

const cse_dept_menu = [
  {
    id: "1",
    path: "/csedept",
    link: "About the Department",
    arl:'l'
  },
  {
    id: "3",
    path: "/csedept/cse-peo",
    link: "Programme Objectives & Outcomes",
    arl:'l'
  },
  {
    id: "5",
    path: "/csedept/cse-faculties",
    link: "Faculties",
    arl:'l'
  },
  {
    id: "7",
    path: "/csedept/cse-lab",
    link: "Lab Facilities",
    arl:'l'
  },
  {
    id: "8",
    path: "#",
    link: "Professional Socities",
    arl:'l'
  },
  {
    id: "9",
    path: "#",
    link: "Research and Publications",
    arl:'l'
  },
  {
    id: "10",
    path: "/csedept/cse-dept-events",
    link: "Department Events",
    arl:'l'
  },
  {
    id: "11",
    path: "#",
    link: "MoU",
    arl:'l'
  },
];

const cse_hod={
  name:"Dr.C.Uma Rani",
  designation:"Head of the Department, CSE",
  pic:uma_rani,
  content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"+
  "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"+
  "enim ad minim veniam, quis nostrud exercitation ullamco laboris"+
  "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"+
  "in reprehenderit in voluptate velit esse cillum dolore eu fugiat"+
  "nulla pariatur. Excepteur sint occaecat cupidatat non proident,"+
  "sunt in culpa qui officia deserunt mollit anim id est laborum."+
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"+
  "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"+
  "enim ad minim veniam, quis nostrud exercitation ullamco laboris"+
  "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"+
  "in reprehenderit in voluptate velit esse cillum dolore eu fugiat"+
  "nulla pariatur. Excepteur sint occaecat cupidatat non proident,"+
  "sunt in culpa qui officia deserunt mollit anim id est laborum."
}

const cse_fac_profiles = [
  {
    id: "1",
    cover: cover,
    dp: chandraprabha,
    name: "K.Chandraprabha",
    Designation: "Associate professor",
    mailid: "kcprabha@gmail.com",
    pdf: "https://drive.google.com/file/d/1vLl4q7g8vqOGGjfTlJQvFL1tkmoLVfVM/view?usp=drive_link",
  },
  {
    id: "2",
    cover: cover,
    dp: suhaila,
    name: "S.Syed Suhaila",
    Designation: "Assistant professor",
    mailid: "syedsuhaila63@gmail.com",
    pdf: "https://drive.google.com/file/d/1bhp8EW2O_4bXHvchHsbfsE-ylujZnDfe/view?usp=drive_link",
  },
  {
    id: "3",
    cover: cover,
    dp: sk,
    name: "Dr.K.Sundara Krishnan",
    Designation: "Assistant professor",
    mailid: "sundarakrishnank@gmail.com",
    pdf: "https://drive.google.com/file/d/1Q8LmN5KQyHpSfPGzqJxVSleJzQg_hHPj/view?usp=drive_link",
  },
  {
    id: "4",
    cover: cover,
    dp: hema,
    name: "Dr.N.Hema Rajini",
    Designation: "Associate professor",
    mailid: "auhemasmith@yahoo.co.in",
    pdf: "https://drive.google.com/file/d/1PzD1k3JgWvEyM75nEx0CBqzEqH2FVBpz/view?usp=drive_link",
  },
  {
    id: "5",
    cover: cover,
    dp: anbu,
    name: "Anbu Selvi P",
    Designation: "Assistant professor",
    mailid: "anbuselvi17@gmail.com",
    pdf: "https://drive.google.com/file/d/19_plkpq1IGaxhevM7d1QUyVZocjaPcoe/view?usp=drive_link",
  },
  {
    id: "6",
    cover: cover,
    dp: karthiga,
    name: "G. Karthika",
    Designation: "Assistant professor",
    mailid: "kartiga.g@gmail.com",
    pdf: "https://drive.google.com/file/d/1SRHrupLxqjI6IzVpVVEzmAS8MpTUJp6I/view?usp=drive_link",
  },
  {
    id: "7",
    cover: cover,
    dp: rajanandhini,
    name: "Mrs.M.Rajanandhini",
    Designation: "Assistant professor(Ad-hoc)",
    mailid: "priyamnandhini@gmail.com",
    pdf: "https://drive.google.com/file/d/1ORvnOsK4rvj_e9jIt27xnoa7iEPXKn5H/view?usp=drive_link",
  },
];
const cse_sup_profiles = [
  {
    id: "1",
    cover: cover,
    dp: vijay,
    name: "G.Vijaya venkata krishnan",
    Designation: "Foreman Instructor",
    mailid: "vijayvisanth@gmail.com",
    pdf: "https://drive.google.com/file/d/1Ly5l7Ssz33FAxhL9KrL_x8-ypfV-tB7U/view?usp=drive_link",
  },
  {
    id: "2",
    cover: cover,
    dp: dpf,
    name: "S.Suriya",
    Designation: "Lab Assistant",
    mailid: "rithikadharshan2016@gmail.com",
    pdf: "https://drive.google.com/file/d/1arAIkbNCVvxBsTjt_dzk5rRw-gEWMAWu/view?usp=drive_link",
  },
  {
    id: "3",
    cover: cover,
    dp: rajendran,
    name: "S.Rajendran",
    Designation: "Cleaner",
    mailid: "bhuvanagirirajendran@gmail.com",
    pdf: "https://drive.google.com/file/d/160eR2fkBXQKrWneCnac3Tjfz0nnnS34i/view?usp=drive_link",
  },
  {
    id: "4",
    cover: cover,
    dp: raja,
    name: "R.Raja",
    Designation: "Mechanic Grade-II",
    mailid: "",
    pdf: "https://drive.google.com/file/d/1wUX-bfiQt9R4we_JICXi9LebyhG-7cBQ/view?usp=drive_link",
  },
];
const cse_vision = {
  id: "1",
  visiondata:
    "The Vision of CSE department is committed to continually improve educational environment to developgraduates having strong Academic and Technical knowledge required to achieve excellence in their profession and career.",
};
const cse_mission = [
  {
    id: "1",
    mission:
      "The Mission of CSE department is to provide excellent graduate education and to prepare students for careers as scientists,industrialist, academician, researcher and developer to evolve to their innovative ideas and applications. To inculcate professional behavior, strong ethical values and leadership abilities in the young minds so as to work with a commitment to the progress of our Nation.",
  },
];

const cse_peo = [
  {
    id: "1",
    head: "PEO 1",
    house: "left",
    content:
      "Excel in professional career and /or higher education by acquiring knowledge and also in inter disciplinary domains.",
  },
  {
    id: "2",
    head: "PEO 2",
    house: "right",
    content:
      "Explore the real life problems and take the initiative to solve the social issues which are technically and economically feasible.",
  },
  {
    id: "3",
    head: "PEO 3",
    house: "left",
    content:
      "Inculcate to follow the professionalism with ethical conscious, inter personal skills with excellent presentation skills.",
  },
];

const cse_outcomes = [
  {
    id: "1",
    point:
      "Apply the knowledge of mathematics, science and engineering principles.",
  },
  {
    id: "2",
    point:
      "Design and construct hardware and software systems, componentsor processes to meet the desired needs,within the realistic constraints such as economic,environmental,social,political,ethical,healthand safetyand sustainability.",
  },
  {
    id: "3",
    point:
      "Design and conduct experiments to organize and analyze Computer Science and its related problems.",
  },
  {
    id: "4",
    point:
      "Identify, formulateand solve hardware and software problems using the computer engineering principles and to interpret and make inferences from the resulting data.",
  },
  {
    id: "5",
    point:
      "Function as an effective member in multidisciplinary and diverse teams.",
  },
  {
    id: "6",
    point:
      "Solve professional, legal, ethical issues and responsibilities pertaining to Computer Engineering.",
  },
  {
    id: "7",
    point:
      "Communicate effectively and present technical information in oral and written format.",
  },
  {
    id: "8",
    point:
      "Utilize the computingknowledge in a global, economic, environmental and societal context.",
  },
  {
    id: "9",
    point:
      "Sort out contemporary issues in the field ofComputer science and Engineering.",
  },
  {
    id: "10",
    point:
      "Use the techniques, skills, modernhardware and software tools necessary for Computer Engineering practice.",
  },
  {
    id: "11",
    point:
      "Recognize the need for an ability to engage in lifelong learning.",
  },
  {
    id: "12",
    point:
      "Demonstrate knowledge and understanding of Engineering and Management to handle projects effectively.",
  },
];

const cse_spec_outcomes = [
  {
    id: "1",
    point:
      "The Computer Science and Engineering graduates are able to analyze, design, develop, test and apply mathematical foundations, management principles in the development of computational solutions, make them expert in designing the computer software and hardware.",
  },
  {
    id: "2",
    point:
      "The ability to employ modern computer languages, environments, and platforms in creating innovative career paths to be an entrepreneur, and a zest for higher studies.",
  },
];

const cse_labs=[
  {
      'id':'1',
      'heading':"Common Computer Lab (G2)",
      'sub-head':'',
      'pic':cse_com_lab,
      'content_1':"The Common Computer Lab (G2) is a spacious facility measuring 18.3 meters by 6.9 meters, equipped to accommodate up to 50 computers. Each computer is powered by an Intel Core i3 processor and is configured with 4 GB of RAM and a 1 TB hard drive. The operating system in use is Windows 7, providing a stable environment for various software applications.",
      'content_2':"This lab is well-suited for programming and development tasks, offering essential software tools such as Python 3, Turbo C, Microsoft Visual Studio, JDK 7 for Java development, and Dev C++. With this hardware and software setup, students and researchers have the necessary resources to engage in coding, software development, and related activities effectively."
  },
  {
      'id':'2',
      'heading':'Casetools Lab (G6)',
      'sub-head':'',
      'pic':cse_case_lab,
      'content_1':'The CASETOOLS LAB (G6) is a well-structured space measuring 18.3 meters by 6.9 meters, thoughtfully designed to accommodate 25 computers. These computers are equipped with varying hardware specifications, featuring Intel Core i3 processors, with a range of 2 GB and 4 GB of RAM, and hard drives of both 1 TB and 500 GB capacities.',
      'content_2':"Running on the Windows 7 operating system, this lab provides a reliable platform for various software applications. Specifically tailored to support computer-aided software engineering, the lab offers essential tools such as Turbo C, Microsoft Visual Studio, and Rational Rose. This setup empowers students and professionals to engage in software development, modeling, and related activities efficiently and effectively."
  },
  {
      'id':'3',
      'heading':'Graphics and Multimedia Lab (F2)',
      'sub-head':'',
      'pic':cse_grap_lab,
      'content_1':'The Graphics and Multimedia Lab (F2) is a spacious facility spanning 18.3 meters by 6.9 meters, thoughtfully designed to accommodate 55 computers. These computers boast a variety of hardware specifications, featuring Intel Core i3 and i5 processors, each equipped with 4 GB of RAM and hard drives of 1 TB and 500 GB capacities. ',
      'content_2':"Operating systems include both Windows 7 and Windows 8, providing versatility for software applications. This lab is equipped with a range of software tools, including C#, Visual Studio, Oracle 10g, NetBeans, Turbo C, and Multimedia Flash 8. With this impressive hardware and software setup, students and professionals have the ideal environment for graphic design, multimedia development, and related creative endeavors."
  },
  {
      'id':'4',
      'heading':'DBMS Lab (F4)',
      'sub-head':'',
      'pic':cse_dbms_lab,
      'content_1':'The DBMS Lab (F4) is a spacious facility, measuring 22 meters by 6.9 meters, dedicated to database management systems. It houses 52 computers equipped with a range of hardware specifications, featuring Intel Core i7 and i3 processors, with 2 GB and 4 GB of RAM options, and hard drives of 1 TB and 500 GB capacities. ',
      'content_2':"The lab offers a versatile environment with multiple operating systems, including Windows 8, Windows 7, and Ubuntu, catering to a variety of software applications. Students and researchers in this lab have access to essential software tools such as Oracle 10g for database management, Rational Rose for software modeling, JDK 7 for Java development, Visual Studio, and Turbo C++ for programming needs. This comprehensive setup empowers users to excel in database-related tasks and software development."
  },
  {
      'id':'5',
      'heading':'Microprocessor and Digital Lab (F6)',
      'sub-head':'',
      'pic':cse_mpmc_lab,
      'content_1':'The Microprocessor & Digital Lab (F6) is a dedicated facility spanning 18.3 meters by 6.9 meters, designed for hands-on exploration of microprocessor and digital electronics concepts. This lab is well-equipped with a specialized set of hardware, including 8085 Trainer Kits, 8086 Trainer Kits, 8051 Trainer Kit, and IC Trainer Kit. ',
      'content_2':"These resources provide students and researchers with the invaluable opportunity to gain practical experience in working with microprocessors and digital circuits. Whether it's programming and interfacing microcontrollers or delving into the intricate world of digital electronics, this lab serves as a vital hub for fostering a deep understanding of these fundamental principles within the realm of computer science and engineering."
  },
]

const cse_dept_events=[
  {
      'id':'1',
      'heading':"One Week Training on Robotics",
      'sub-head':'Some representative placeholder content for the second slide of the carousel.',
      'pic':robotics,
      'content_1':'Our Commitment as a Centre of Engineering Education is to impart Technical Knowledge par excellence, motivate the learners in Research, evolve result-oriented, innovative techniques in Engineering, provide necessary career guidance, and train our learners'+
                  'in leadership qualities so as to achieve better productivity and prosperity for our country.',
      'content_2':"ACGCET, a leader in higher education in engineering and technology, is committed to excellence through the delivery of outstanding undergraduate and graduate education that remains current and responsive to the diverse needs of those it serves. The institution’s"+
      "faculty and staff promote the intellectual, professional, social, and personal development of its students through innovations in learning, scholarship, and creative endeavours. Students, faculty, and staff partner to create strong"+
      "engagement with the local, national, and global communities. The institution dedicates itself to academic vitality, integrity, and diversity."
  },
  {
      'id':'2',
      'heading':'Placement Activities',
      'sub-head':'Some representative placeholder content for the second slide of the carousel.',
      'pic':placement,
      'content_1':'Our Commitment as a Centre of Engineering Education is to impart Technical Knowledge par excellence, motivate the learners in Research, evolve result-oriented, innovative techniques in Engineering, provide necessary career guidance, and train our learners'+
                  'in leadership qualities so as to achieve better productivity and prosperity for our country.',
      'content_2':"ACGCET, a leader in higher education in engineering and technology, is committed to excellence through the delivery of outstanding undergraduate and graduate education that remains current and responsive to the diverse needs of those it serves. The institution’s"+
      "faculty and staff promote the intellectual, professional, social, and personal development of its students through innovations in learning, scholarship, and creative endeavours. Students, faculty, and staff partner to create strong"+
      "engagement with the local, national, and global communities. The institution dedicates itself to academic vitality, integrity, and diversity."
  },
]

export {
  cse_dept_menu,
  cse_fac_profiles,
  cse_sup_profiles,
  cse_mission,
  cse_vision,
  cse_outcomes,
  cse_peo,
  cse_spec_outcomes,
  cse_labs,
  cse_dept_events,
  cse_hod,
};
