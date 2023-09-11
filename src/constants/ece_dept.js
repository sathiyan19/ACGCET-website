import dp from '../assets/pictures/dp.jpg'
import dpm from '../assets/pictures/boy.webp'
import dpf from '../assets/pictures/girl.webp'
import cover from '../assets/pictures/microchip.webp'

import swayam from '../assets/pictures/swayam.webp'
import robotics from '../assets/pictures/robotics.webp'
import placement from '../assets/pictures/placement.webp'

import thiran_2k22 from '../assets/pictures/ece_dept/stud_activities/Thiran 2k22.webp'
import circuit_debug from '../assets/pictures/ece_dept/stud_activities/Circuit Debugging.webp'
import best_manager from '../assets/pictures/ece_dept/stud_activities/best_manager.webp'
import tech_quiz from '../assets/pictures/ece_dept/stud_activities/tech_quiz.webp'
import paper_presentation from '../assets/pictures/ece_dept/stud_activities/paper_presentation.webp'
import circuit_designers from '../assets/pictures/ece_dept/stud_activities/circuit_designers.webp'
import top_design1 from '../assets/pictures/ece_dept/stud_activities/top_design1.webp'
import top_design2 from '../assets/pictures/ece_dept/stud_activities/top_designer2.webp'
import top_designers_2k22 from '../assets/pictures/ece_dept/stud_activities/top_designers_2k22.webp'

import somasundaram from '../assets/pictures/ece_dept/ece_faculties/Somasundaram.webp'
import asr from '../assets/pictures/ece_dept/ece_faculties/ASR.webp'


const ece_dept_menu = [
  {
    id: "1",
    path: "/ecedept",
    link: "About the Department",
    arl:'l'
  },
  {
    id: "2",
    path: "/ecedept/ece-peo",
    link: "Programme Objectives & Outcomes",
    arl:'l'
  },
  {
    id: "3",
    path: "/ecedept/ece-faculties",
    link: "Faculties",
    arl:'l'
  },
  {
    id: "4",
    path: "/ecedept/ece-lab",
    link: "Lab Facilities",
    arl:'l'
  },
  {
    id: "5",
    path: "#",
    link: "Department Library",
    arl:'l'
  },
  {
    id: "6",
    path: "/ecedept/ece-research",
    link: "Research and Publications",
    arl:'l'
  },
  {
    id: "7",
    path: "/ecedept/ece-dept-events",
    link: "Association Events",
    arl:'l'
  },
  {
    id: "8",
    path: "#",
    link: "Placement Activites",
    arl:'l'
  },
  {
    id: "9",
    path: "/ecedept/ece-rankers",
    link: "Elite Rankers",
    arl:'l'
  },
  {
    id: "10",
    path: "/ecedept/ece-student-activity",
    link: "Student Activities",
    arl:'l'
  },
  {
    id: "11",
    path: "/ecedept/ece-projects",
    link: "Best Projects",
    arl:'l'
  },
  {
    id: "12",
    path: "/ecedept/ece-antenna-testing",
    link: "Antenna Testing",
    arl:'l'
  },
];

const ece_hod={
  name:"Dr.A.Sivanantharaja",
  designation:"Head of the Department, ECE",
  pic:asr,
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

const ece_fac_profiles = [
  {
    id: "1",
    cover: cover,
    dp: dpf,
    name: "C.Sinduja",
    Designation: "Assistant Professor",
    mailid: "sindhu.mzcet@gmail.com",
    pdf:"https://drive.google.com/file/d/1XSyQR1gJwej0E7xagF4u9oydmF0D6h8P/view?usp=drive_link"
  },
  {
    id: "2",
    cover: cover,
    dp: somasundaram,
    name: "Dr.S.Somasundaram",
    Designation: "Associate Professor",
    mailid: "ssm98@rediffmail.com",
    pdf:"https://drive.google.com/file/d/163gMBrbM22WAadjTr2AFz4cHJBFMJf7_/view?usp=drive_link"
  },
  {
    id: "3",
    cover: cover,
    dp: dpm,
    name: "Dr.G.Karpagarajesh",
    Designation: "Associate Professor",
    mailid: "gkrajesh1@gmail.com",
    pdf:"https://drive.google.com/file/d/1NJ0Um7-gKLpc5v-WkQLJ40yrlZnNeXgV/view?usp=drive_link"
  },
  {
    id: "4",
    cover: cover,
    dp: dpf,
    name: "Keerthana.P",
    Designation: "Assistant Professor",
    mailid: "keerthiperumal@gmail.com",
    pdf:"https://drive.google.com/file/d/1JGWDBNKTk4ZAovxUYokqidpefKClCgl5/view?usp=drive_link"
  },
  {
    id: "5",
    cover: cover,
    dp: dpf,
    name: "Dr.D.Helena Margaret",
    Designation: "Associate Professor",
    mailid: "helenaraj@yahoo.com",
    pdf:"https://drive.google.com/file/d/1YnfHK-jwVQ_U8XSfZMwNrubMH7S8fgQs/view?usp=drive_link"
  },
  {
    id: "6",
    cover: cover,
    dp: dpf,
    name: "Renisha G",
    Designation: "Associate Professor",
    mailid: "renisha.ece@gmail.com",
    pdf:"https://drive.google.com/file/d/12KYashHei2R52bEaM0KDNBhoMiKU_k66/view?usp=drive_link"
  },
  {
    id: "7",
    cover: cover,
    dp: dpf,
    name: "M.Aruna Rani",
    Designation: "Assistant Professor(adhoc)",
    mailid: "arunaselva27@gmail.com",
    pdf:"https://drive.google.com/file/d/1iZp_6Wj4nb6q9TxaK6yxXn_yHW-J6jwc/view?usp=drive_link"
  },
  {
    id: "8",
    cover: cover,
    dp: dpm,
    name: "Dr.B.Rajesh Kanna",
    Designation: "Assistant Professor",
    mailid: "rajeshkanna.ece.au@gmail.com",
    pdf:"https://drive.google.com/file/d/1aQxGj7vgE1McsS4UULIW2PPYPuk7K2VQ/view?usp=drive_link"
  },
  {
    id: "9",
    cover: cover,
    dp: dpf,
    name: "C.Karthika Pragadeeswari",
    Designation: "Assistant Professor",
    mailid: "bk.karthika1969@gmail.com",
    pdf:"https://drive.google.com/file/d/1u1pS75PDwZ4xLl7yhVyJFx4U_Iryzm5z/view?usp=drive_link"
  },
  {
    id: "10",
    cover: cover,
    dp: dpf,
    name: "G.Dhevanandhini",
    Designation: "Assistant Professor",
    mailid: "dhevakeshav@gmail.com",
    pdf:"https://drive.google.com/file/d/1EAyFUlaybqf58HDIQIR1wU7_GSKIDtaD/view?usp=drive_link"
  },
  {
    id: "11",
    cover: cover,
    dp: dpm,
    name: "C.Mahendran",
    Designation: "Assistant Professor",
    mailid: "gc.mahendran@gmail.com",
    pdf:"https://drive.google.com/file/d/1lT8lYFWnoW8bkBYg8wfEfo-G4p6ru2Ui/view?usp=drive_link"
  },
  {
    id: "12",
    cover: cover,
    dp: dpf,
    name: "Mrs.X.Merlin Sheeba",
    Designation: "Assistant Professor",
    mailid: "renachristina@gmail.com",
    pdf:"https://drive.google.com/file/d/11wEMzW6yCE_WiZzxgTv9tNLobNDMBmBh/view?usp=drive_link"
  },
  {
    id: "13",
    cover: cover,
    dp: dpf,
    name: "SP.Ramya",
    Designation: "Assistant Professor",
    mailid: "sp.ramya08@gmail.com",
    pdf:"https://drive.google.com/file/d/1L1R7FViSxmTaNyeJP9Y7bKDWWMO79gOU/view?usp=drive_link"
  },
  {
    id: "14",
    cover: cover,
    dp: dpf,
    name: "P.Sezhina Kanakambika",
    Designation: "Assistant Professor",
    mailid: "sezhina@gmail.com",
    pdf:"https://drive.google.com/file/d/16zoEOL7QgiNCEoQ3SaSxov7y2f34XKTj/view?usp=drive_link"
  },
];
const ece_sup_profiles = [
  {
    id: "1",
    cover: cover,
    dp: dpm,
    name: "Mr.B.Chandrasekaran",
    Designation: "Electrician",
    mailid: "Chandrasekaran70@gmail.com",
    pdf:""
  },
  {
    id: "2",
    cover: cover,
    dp: dpf,
    name: "Ms.D.Tamil Selvi",
    Designation: "Mech.Grade-II",
    mailid: "tamilmd123@gmail.com",
    pdf:""
  },
  {
    id: "3",
    cover: cover,
    dp: dpf,
    name: "Ms.N.Vasanthi Meena",
    Designation: "Lab Assistant",
    mailid: "vasanthimeena8686@gmail.com",
    pdf:""
  },
  {
    id: "4",
    cover: cover,
    dp: dpm,
    name: "Mr.G.Karthikeyan",
    Designation: "Mech.Grade-II",
    mailid: "gkarthikece1973@gmail.com",
    pdf:""
  },
  {
    id: "5",
    cover: cover,
    dp: dpm,
    name: "Mr.K.Sankar",
    Designation: "Cleaner",
    mailid: "",
    pdf:""
  },
  {
    id: "6",
    cover: cover,
    dp: dpf,
    name: "Ms.A.Akila",
    Designation: "Lab Assistant",
    mailid: "Akilaanu1999@gmail.com",
    pdf:""
  },
];

const ece_research_info=[
  {
    'name':"Dr. A.Sivanantharaja",
    'area':"Optical Communication"
  },
  {
    'name':"Dr. G.Karpagarajesh",
    'area':"Optical communication and networks"
  },
  {
    'name':"G Renisha",
    'area':"Signal processing"
  },
  {
    'name':"Dr. D.Helena Margaret",
    'area':"Microwave Antenna"
  },
  {
    'name':"Prof. C.Mahendran",
    'area':"Microwave Antenna"
  },
  {
    'name':"Dr. S.Somasundaram",
    'area':"Polynomial Controllers, Stable Controllers"
  },
  {
    'name':"Prof. C.Karthika Pragadeeswari",
    'area':"Video Surveilance"
  },
  {
    'name':"Prof. G.Dhevanandhini",
    'area':"Digital Image Processing"
  },
  {
    'name':"Dr. B.Rajeshkanna",
    'area':"Wireless Sensor Networks"
  },
];

const patent_info=[
  {
    'name':"Dr. A.Sivanantharaja",
    'title':"Noise free Public Address System for Auditorium using White Light Emitting Diode Communication",
    'App':"202041002376",
    'status':"Applied"
  },
];

const guide_info=[
  {
    'sno':"1",
    'name':"Dr. A.Sivanantha Raja",
    'npprod':"12",
    'nppur':"04",
    'msres':"02"
  },
  {
    'sno':"2",
    'name':"Dr. G.Karpagarajesh",
    'npprod':"-",
    'nppur':"04",
    'msres':"-"
  },
  {
    'sno':"3",
    'name':"Dr. S.Somasundaram",
    'npprod':"04",
    'nppur':"-",
    'msres':"-"
  },
];

const scholar_info1=[
  {
    'sno':"1",
    'name':"A.Anand",
    'area':"Investigation on Brillouin Scattering Effect in Fiber Optic Communication",
  },
  {
    'sno':"2",
    'name':"N.Gopi",
    'area':"Investigation on Nonlinear Polarization Effects in Fiber Optic Communication",
  },
  {
    'sno':"3",
    'name':"Yarra Naga Subrahmanya Vamsi Mohan",
    'area':"Outdoor Applications of Optical Wireless Communication Systems",
  },
  {
    'sno':"4",
    'name':"M. Sindhu",
    'area':"SS",
  },
];

const scholar_info2=[
  {
    'sno':"1",
    'name':"John Samuel Raj",
    'area':"SS",
  },
  {
    'sno':"2",
    'name':"Amutha",
    'area':"SS",
  },
  {
    'sno':"3",
    'name':"Bala Karthick",
    'area':"SS",
  },
  {
    'sno':"4",
    'name':"Sarathi",
    'area':"SS",
  },
];

const scholar_info3=[
  {
    'sno':"1",
    'name':"T. Geetha",
    'area':"Design and real time implementation of Stable PI Controller for Spherical tank process"
  },
];

const scholar_info4=[
  {
    'sno':"1",
    'name':"Mr.Kanaka Raju Penmetsa",
    'area':"Diverse image segmentation methods for identifying and estimating the severity of plaque psoriasis in human skin"
  },
  {
    'sno':"2",
    'name':"Kataru Shravan Kumar",
    'area':"Performance analysis for wireless sensor networks in IOT enabled Green Power Applications"
  },
];

const ece_siva=[
  {
    'id':"1",
    'point':"Shanmuga Sundar,A.Sivanantha Raja, C.Sanjeeviraja and D.Jeyakumar (2015), “Syntheis and characterization of novel siloxane based transparent and flexible substrate for OLEDs”, Nanoelectronics and Sensors, ISBN: 978-93-85436-94-9, Bloomsbury Publication."
  },
  {
    'id':"2",
    'point':"Shanmuga Sundar,V.Nidhya Vijay, T.Sridarshini and A.Sivanantha Raja (2018), “Performance analysis of multichannel EDM hybrid Optical communication system for long haul communications”, Frontier Research and Innovation in Optoelectronics Technology and Industry, ISBN: 978-1-138-33178-5, CRC Press, Taylor & Francis."
  },
  {
    'id':"3",
    'point':"Shanmuga Sundar, A.Sivanantha Raja, R.Saravanan and Marcos Flores Carrasco (2018), “Photocatalyst for indoor air pollution: a brief review” Green Photocatalysts for Energy and Environmental Process, Springer, doi: 10.1007/978-3-030-17638-9, ISBN: 978-3-030-17638-9."
  },
  {
    'id':"4",
    'point':"Shanmuga Sundar, T.Sridarshini, R.Sitharthan, Madurakavi Karthikeyan, A.Sivanantha Rajaand Marcos Flores Carrasco (2019), “Performance investigation of 16/32- channel DWDM PON and long-reach PON systems using an ASE noise source”, Advances in Optoelectronic Technology and Industry Development – Jose & Ferreira (eds.), ISBN: 978-0-367-24634-1, CRC Press, Taylor & Francis, London, pp. 93-99."
  },
  {
    'id':"5",
    'point':"Shanmuga Sundar, T. Arun, M. Muneeswaran, R.Sitharthan, M. Karthikeyan, A.Sivanantha Raja, and Marcos Flores C (2020), “Conductive oxides role in Flexible Electronic Device Applications”, Metal and Metal Oxides for Energy and Electronics, Springer Nature, ISBN: 978-3-030-53065-5, pp.121-148, doi: 10.1007/978-3-030-53065-5_4."
  },
  {
    'id':"6",
    'point':"Jayson Keerthy Jayabarathan,  Sivanantha Rajaand S. Robinson, “QoS Enhancement in MANET”, Cloud and IoT based Vehicular Ad-Hoc Networks, Scrivener, Wiley Publisher, pp. 325-348, 2021, ISBN: 1119761832, 9781119761839."
  },
];

const ece_margaret=[
  {
    'id':"1",
    'point':"Vasuki, D. Helena Margaret and Rajeswari, “Microwave Engineering”, Mc Graw Hill Education (India) Pvt Ltd., 2015. (ISBN: 93-392-1948-1)",
  },
];

const ece_rajesh=[
  {
    'id':"1",
    'point':"Gopinath A, Rajesh Kanna B, Vellingiri Jayagopal, Aviral Srivastava (2023), Internet of Things (IOT), ISBN: 978-81-19489-07-7, First Edition, RK Publication, India, 21.07.2023.",
  },
];

const ece_rankers = [
  {
    id: "1",
    cover: cover,
    dp: dp,
    name: "Arjun",
    Designation: "Designation",
    mailid: "emailid@gmail.com",
  },
];

const ece_vision = {
  id: "1",
  visiondata:
    "To empower electronics and communication engineering students with academic excellence, professional ethics and entrepreneurial skills to contribute to the society at global standards.",
};

const ece_mission = [
  {
    id: "1",
    mission:
      "To attain academic excellence in Electronics and  Communication  Engineering through innovation in learning, research and state of the art laboratories.",
  },
  {
    id: "2",
    mission:
      "To  establish  suitable  environment  for  the  students  to  develop  professionalism, leadership qualities and entrepreneurial skills with high ethical standards for self and social development.",
  },
  {
    id: "3",
    mission:
      "To  equip  the  students  to  provide  appropriate  solutions  with  their  technological expertise to address the societal needs.",
  },
];

const ece_peo = [
  {
    id: "1",
    head: "PEO 1",
    house: "left",
    content:
      "After completion of the course, the Graduates will be able to develop design procedures, prototypes and test methodologies for modern Electronics and Communication Systems. ",
  },
  {
    id: "2",
    head: "PEO 2",
    house: "right",
    content:
      "After completion of the course, the Graduates will be able to work and adapt to changes in allied areas of Electronics and Communication Engineering through personal success and lifelong learning.",
  },
  {
    id: "3",
    head: "PEO 3",
    house: "left",
    content:
      "After completion of the course, the Graduates will be able to recognize technological requirements for the society and provide cost effective solutions.",
  },
];

const ece_outcomes = [
  {
    id: "1",
    point:
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.",
  },
  {
    id: "2",
    point:
      "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences",
  },
  {
    id: "3",
    point:
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration fr the public health and safety, and the cultural, societal, and environmental considerations.",
  },
  {
    id: "4",
    point:
      "Conduct investigations of complex problems: Use research-based knowledge and research methods mcluding design of experiments, analysis and interprctation of data, and synthesis of the information to provide valid conclusions.",
  },
  {
    id: "5",
    point:
      "Modem tool usage: Create, select, and apply appropriate techniques, resources, and modem engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
  },
  {
    id: "6",
    point:
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess social health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
  },
  {
    id: "7",
    point:
      "Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
  },
  {
    id: "8",
    point:
      "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
  },
  {
    id: "9",
    point:
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
  },
  {
    id: "10",
    point:
      "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
  },
  {
    id: "11",
    point:
      "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team to manage projects and in multidisciplinary environments.",
  },
  {
    id: "12",
    point:
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
  },
];

const ece_progs = [
  {
    id: "1",
    year:"1986",
    period:"4 Years",
    top_head:"B.E.",
    program: "Electronics and Communication Engineering",
    intake: "60",
  },
  {
    id: "2",
    year:"1986",
    period:"2 Years",
    top_head:"M.E.",
    program: "Microwave & Optical Communication",
    intake: "18",
  },
  {
    id: "3",
    year:"1986",
    period:"4 Years",
    top_head:"Part time B.E.",
    program: "Electronics and Communication Engineering",
    intake: "60",
  },
];

const ece_acad_labs=[
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
  {
      'id':'3',
      'heading':'Foreign Training at University',
      'sub-head':'Some representative placeholder content for the second slide of the carousel.',
      'pic':swayam,
      'content_1':'Our Commitment as a Centre of Engineering Education is to impart Technical Knowledge par excellence, motivate the learners in Research, evolve result-oriented, innovative techniques in Engineering, provide necessary career guidance, and train our learners'+
                  'in leadership qualities so as to achieve better productivity and prosperity for our country.',
      'content_2':"ACGCET, a leader in higher education in engineering and technology, is committed to excellence through the delivery of outstanding undergraduate and graduate education that remains current and responsive to the diverse needs of those it serves. The institution’s"+
      "faculty and staff promote the intellectual, professional, social, and personal development of its students through innovations in learning, scholarship, and creative endeavours. Students, faculty, and staff partner to create strong"+
      "engagement with the local, national, and global communities. The institution dedicates itself to academic vitality, integrity, and diversity."
  },
  {
      'id':'4',
      'heading':'Hi',
      'sub-head':'Some representative placeholder content for the second slide of the carousel.',
      'pic':swayam,
      'content_1':'Our Commitment as a Centre of Engineering Education is to impart Technical Knowledge par excellence, motivate the learners in Research, evolve result-oriented, innovative techniques in Engineering, provide necessary career guidance, and train our learners'+
                  'in leadership qualities so as to achieve better productivity and prosperity for our country.',
      'content_2':"ACGCET, a leader in higher education in engineering and technology, is committed to excellence through the delivery of outstanding undergraduate and graduate education that remains current and responsive to the diverse needs of those it serves. The institution’s"+
      "faculty and staff promote the intellectual, professional, social, and personal development of its students through innovations in learning, scholarship, and creative endeavours. Students, faculty, and staff partner to create strong"+
      "engagement with the local, national, and global communities. The institution dedicates itself to academic vitality, integrity, and diversity."
  },
]
const ece_dept_events=[
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
const ece_indus_labs=[
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
const ece_projects=[
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
const ece_stud_activities=[
  {
    'id':'8',
    'heading':'No event',
    'sub-head':'Divya barathi, S.Lavanya & M.Arthi bagged 3rd place in _____________ contest conducted by Sudharsan Engineering College.',
    'pic':top_design2,
    'content_1':'',
    'content_2':""
  },
  {
    'id':'7',
    'heading':'No event',
    'sub-head':'S.Kavya, K.Thiviyadarssini & V.Sowmiya bagged 1st place in _____________ contest conducted by Sudharsan Engineering College.',
    'pic':top_design1,
    'content_1':'',
    'content_2':""
  },
  {
    'id':'6',
    'heading':'Circuit Designers',
    'sub-head':'R.Tharini, K.Rishika & T.Mhadevi bagged 3rd place in Circuit Designers contest conducted by Sudharsan Engineering College.',
    'pic':circuit_designers,
    'content_1':'',
    'content_2':""
  },
  {
    'id':'9',
    'heading':'Top Designers',
    'sub-head':'',
    'pic':top_designers_2k22,
    'content_1':"Content1",
    'content_2':"Content2"
  },
  {
    'id':'5',
    'heading':'Paper Presentation',
    'sub-head':'',
    'pic':paper_presentation,
    'content_1':'',
    'content_2':""
  },
  {
    'id':'4',
    'heading':'Technical Quiz-St.Michael',
    'sub-head':'',
    'pic':tech_quiz,
    'content_1':'',
    'content_2':""
  },
  {
    'id':'3',
    'heading':'Best Manager',
    'sub-head':'has bagged the best manager award in Hindustan Engineering College event.',
    'pic':best_manager,
    'content_1':'',
    'content_2':""
  },
  {
      'id':'2',
      'heading':'Circuit Debugging',
      'sub-head':'S.Sushmitha bagged 1st place in Circuit Debugging contest conducted by GCE Srirangam.',
      'pic':circuit_debug,
      'content_1':'',
      'content_2':""
  },
  {
    'id':'1',
    'heading':"Thiran 2k22",
    'sub-head':"Gokulakrishnan G bagged 2nd place in Thiran 2k22 with the project 'Wifi Automation' built with a team of 4.",
    'pic':thiran_2k22,
    'content_1':"",
    'content_2':""
},
]

const ece_antenna_software=[
  {
    id:'1',
    point:'Advanced Design System (ADS)'
  },
  {
    id:'2',
    point:'Ansys – Electronics Desktop'
  },
  {
    id:'3',
    point:'CST Studio Suite'
  },
  {
    id:'4',
    point:'PathWave EM Design (EMPro)'
  },
]
const ece_antenna_anechoic=[
  {
    id:'1',
    point:'Vector Network Analyzer (100KHz - 20GHz) – Rohde & Schwarz make'
  },
  {
    id:'2',
    point:'Double Ridged Horn Antenna (1GHz - 18 GHz) and computational software'
  },
]
const ece_antenna_rf=[
  {
    id:'1',
    point:'Vector Network Analyzer (100KHz - 20GHz) – Rohde & Schwarz make'
  },
  {
    id:'2',
    point:'Vector Network Analyzer (300KHz - 3GHz) - Agilent make'
  },
  {
    id:'3',
    point:'Spectrum Analyzer (5KHz-7.5GHz) – Rohde & Schwarz make'
  },
  {
    id:'4',
    point:'Spectrum Analyzer (9KHz-3GHz) – Agilent make'
  },
  {
    id:'5',
    point:'Vector Signal Generator (250KHz-3GHz) – Agilent make'
  },
  {
    id:'6',
    point:'Mixed Signal Oscilloscope (300MHz) – Agilent make'
  },
  {
    id:'7',
    point:'Power Sensor (10MHz -18GHz, -30dBm to 20dBm)'
  },
]

const progressinfo=[
  {
      'id':"1",
      'bigperc':85,
      'smallperc':15,
  }
]

export {
  ece_dept_menu,
  ece_fac_profiles,
  ece_sup_profiles,
  ece_vision,
  ece_mission,
  ece_peo,
  ece_outcomes,
  ece_progs,
  ece_acad_labs,
  ece_indus_labs,
  ece_rankers,
  ece_dept_events,
  ece_projects,
  ece_stud_activities,
  ece_antenna_anechoic,
  ece_antenna_rf,
  ece_antenna_software,
  ece_hod,
  progressinfo,
  ece_research_info,
  patent_info,
  guide_info,
  scholar_info1,
  scholar_info2,
  scholar_info3,
  scholar_info4,
  ece_siva,
  ece_margaret,
  ece_rajesh
};
