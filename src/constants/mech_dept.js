import dp from "../assets/pictures/dp.jpg";
import dpm from "../assets/pictures/boy.webp";
import dpf from "../assets/pictures/girl.webp";
import cover from "../assets/pictures/mech_banner.webp";

import swayam from '../assets/pictures/swayam.webp'
import robotics from '../assets/pictures/robotics.webp'
import placement from '../assets/pictures/placement.webp'



import Ramanathan from '../assets/pictures/mech_dept/mech_fac_profiles/1.Dr.K.Ramanathan Prof & Head.webp'
import Geetha  from '../assets/pictures/mech_dept/mech_fac_profiles/3.Dr.S.GEETHA.webp'
import  Sarala from '../assets/pictures/mech_dept/mech_fac_profiles/4.Dr.R.Sarala.webp'
import Sivagami from '../assets/pictures/mech_dept/mech_fac_profiles/5.Dr.S.M.SIVAGAMI.webp'
import Selvaraj from '../assets/pictures/mech_dept/mech_fac_profiles/6.Prof.S.Selvaraj AP(Sr.Gr).webp'
import Jawahar from '../assets/pictures/mech_dept/mech_fac_profiles/7.Prof.V.Jawahar AP.webp'
import Perumal from '../assets/pictures/mech_dept/mech_fac_profiles/9.Prof.P.Perumal AP.webp'
import Rajavijay from '../assets/pictures/mech_dept/mech_fac_profiles/10.Prof.T.Rajavijay AP.webp'
import Raveendran from '../assets/pictures/mech_dept/mech_fac_profiles/12.Dr.P.Raveendran Asso Prof(CAS).webp'
import Pravakaran from '../assets/pictures/mech_dept/mech_fac_profiles/13.Dr.J.Prabakaran Asso Prof(CAS).webp'
import Senthil from '../assets/pictures/mech_dept/mech_fac_profiles/14.Dr.C.R.Senthilkumar AP.webp'
import Guruprasad from '../assets/pictures/mech_dept/mech_fac_profiles/15.Dr.B.Guruprasad AP(Sl.Gr).webp'
import Babu from '../assets/pictures/mech_dept/mech_fac_profiles/16.Dr.N.Babu AP.webp'
import Syed from '../assets/pictures/mech_dept/mech_fac_profiles/17.Mr.A.Syed Abdulla AP(Contract).webp'
import Muruganandham from '../assets/pictures/mech_dept/mech_fac_profiles/18.Mr.K.Muruganandham AP(Contract).webp'
import Elumalai from '../assets/pictures/mech_dept/mech_fac_profiles/19.Mr.P.Elumalai AP(Contract).webp'
import  Sathishkumar from '../assets/pictures/mech_dept/mech_fac_profiles/20.Mr.C.Sathishkumar AP(Adhoc).webp'
import Rajakumar from '../assets/pictures/mech_dept/mech_fac_profiles/21.Mr.N.Rajakumar AP(Adhoc).webp'
import Karthikeyan from '../assets/pictures/mech_dept/mech_fac_profiles/22.Mr.K.Karthikeyan AP(Adhoc).webp'
import Sakthi from '../assets/pictures/mech_dept/mech_fac_profiles/22.Mr.K.Karthikeyan AP(Adhoc).webp'


const mech_dept_menu = [
  {
    id: "1",
    path: "/mechdept",
    link: "About the Department",
    arl:'l'
  },
  {
    id: "3",
    path: "/mechdept/mech-peo",
    link: "Programme Objectives & Outcomes",
    arl:'l'
  },
  {
    id: "5",
    path: "/mechdept/mech-faculties",
    link: "Faculties",
    arl:'l'
  },
  {
    id: "7",
    path: "/mechdept/mech-lab",
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
    path: "/mechdept/mech-dept-events",
    link: "Department Events",
    arl:'l'
  },
  {
    id: "11",
    path: "#",
    link: "MoU",
    arl:'l'
  },
  {
    id: "12",
    path: "#",
    link: "Centre of Excellence",
    arl:'l'
  },
];

const mech_vision = {
  id: "1",
  visiondata:
    "To become a center of excellence and to produce high quality, self-motivated, creative and ethical engineers and technologists, contributing effectively to universal science and contemporary developments for the benefit of the society.",
};
const mech_mission = [
  {
    id: "1",
    mission:
      "To impart high quality Engineering education and to inculcate ethics to the Students.",
  },
  {
    id: "2",
    mission:
      "To adopt the best pedagogical methods in order to maximize knowledge transfer.",
  },
  {
    id: "3",
    mission:
      "To have adequate mechanisms to enhance understanding of implementation of theoretical concepts in practical scenarios and make the students readily employable in industries.",
  },
  {
    id: "4",
    mission:
      "To carry out high quality research leadings to the creation and commercialization of intellectual property.",
  },
  {
    id: "5",
    mission:
      "To provide the best facilities, infrastructure, and environment to the students, researchers and faculty members, creating an ambience conductive for excellence in technical education.",
  },
];
const mech_progs = [
  {
    id: "1",
    year:"1952",
    // period:"4 Years",
    top_head:"B.E.",
    program: "Mechanical Engineering",
    intake: "120",
  },
  {
    id: "2",
    year:"1971",
    // period:"4 Years",
    top_head:"Part time B.E.",
    program: "Mechanical Engineering",
    intake: "60",
  },
  {
    id: "3",
    year:"2002",
    // period:"4 Years",
    top_head:"M.E.",
    program: "Manufacturing Engineering",
    intake: "18",
  },
  {
    id: "4",
    year:"2002",
    // period:"4 Years",
    top_head:"M.E.",
    program: "Computer Aided Design",
    intake: "18",
  },
  
];

const mech_peo = [
  {
    id: "1",
    head: "PEO 1",
    house: "left",
    content:
      "To provide a strong foundation in Mathematics, Basic Sciences and Engineering fundamentals required to excel in Mechanical Engineering",
  },
  {
    id: "2",
    head: "PEO 2",
    house: "right",
    content:
      "To prepare students with good scientific, analytical and applied skills to design and analyze engineering products",
  },
  {
    id: "3",
    head: "PEO 3",
    house: "left",
    content:
      "To motivate the students for lifelong learning, entrepreneurship abilities with ethical values.",
  },
  {
    id: "4",
    head: "PEO 4",
    house: "right",
    content:
      "To train the students to have effective communication, team building, leadership and decision making so as to be a successful professional engineer fulfilling societal needs",
  },
];

const mech_outcomes = [
  {
    id: "1",
    point:
      "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
  },
  {
    id: "2",
    point:
      "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
  },
  {
    id: "3",
    point:
      "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
  },
  {
    id: "4",
    point:
      "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
  },
  {
    id: "5",
    point:
      "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
  },
  {
    id: "6",
    point:
      "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
  },
  {
    id: "7",
    point:
      "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
  },
  {
    id: "8",
    point:
      "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
  },
  {
    id: "9",
    point:
      "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
  },
  {
    id: "10",
    point:
      "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
  },
  {
    id: "11",
    point:
      "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
  },
  {
    id: "12",
    point:
      "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
  },
];

const mech_spec_outcomes = [
  {
    id: "1",
    point:
      "To provide cost effective and environmental friendly solution to mechanical engineering problems.",
  },
  {
    id: "2",
    point:
      "To produce creative engineers who can work effectively in design and manufacturing environment.",
  },
  {
    id: "3",
    point:
      "To impart  knowledge for the advancement in the area of modern materials and automobiles.",
  },
];

const mech_fac_profiles = [
  {
    id: "1",
    cover: cover,
    dp: Ramanathan,
    name: "Dr.K.RAMANATHAN",
    Designation: "Professor (CAS)",
    mailid: "ramsananthi@gmail.com",
    pdf: "https://drive.google.com/file/d/1RRcE1m8PZoikgh1IO1c7rJey75LKnRSm/view?usp=sharing",

  },
  {
    id: "3",
    cover: cover,
    dp: Geetha,
    name: "Dr.S.GEETHA",
    Designation: "Associate Professor ",
    mailid: "gitskumaresh@gmail.com",
    pdf: "https://drive.google.com/file/d/1CGoWXRb2pFeQoL4EvHqkbWo5QNtAWYIR/view?usp=sharing",

  },
  {
    id: "4",
    cover: cover,
    dp: Sarala,
    name: "Dr.R.SARALA",
    Designation: "Associate Professor",
    mailid: "r.sarala@accetedu.in",
    pdf: "https://drive.google.com/file/d/1aEGWxeQ_g2LDrMI8aoEX3Fvlp4gnQG8o/view?usp=sharing",
  },
  {
    id: "5",
    cover: cover,
    dp: Sivagami,
    name: "Dr. S. M. SIVAGAMI",
    Designation: "AssociateProfessor",
    mailid: "smshivagami@gmail.com",
    pdf: "https://drive.google.com/file/d/1BNytYW_hcXud6m6Z5RYlqWSZz1RsWuf1/view?usp=sharing",
  },
  {
    id: "6",
    cover: cover,
    dp: Selvaraj,
    name: "S.SELVARAJ",
    Designation: "Assistant Professor",
    mailid: "selvamraj1@gmail.com",
    pdf: "https://drive.google.com/file/d/16mekXJbyIwTyaleioUDC0xYc9shTLdkS/view?usp=sharing",
  },
  {
    id: "7",
    cover: cover,
    dp: Jawahar,
    name: "Thiru.V.JAWAHAR",
    Designation: "Assistant Professor",
    mailid: "vjawahar06@gmail.com",
    pdf: "https://drive.google.com/file/d/1qNT9JG3rhLWi5aLZp6qIfWw8AwfbYB7C/view?usp=sharing",
  },
  {
    id: "9",
    cover: cover,
    dp: Perumal,
    name: "AProf.P.PERUMAL",
    Designation: "Assistant Professor",
    mailid: "perumalaccet@gmail.com",
    pdf: "https://drive.google.com/file/d/1_YIkWFOA2iam7I3gF1pm5t-moMyrvB88/view?usp=sharing",
  },
  {
    id: "10",
    cover: cover,
    dp: Rajavijay,
    name: "T. RAJA VIJAY",
    Designation: "Assistant Professor",
    mailid: "kingsvijay1503@gmail.com",
    pdf: "#https://drive.google.com/file/d/1JP325kv0uZcgAFufRa9oajgMf7yqiL8N/view?usp=sharing",
  },

  {
    id: "12",
    cover: cover,
    dp: Raveendran,
    name: "Dr. P. RAVEENDIRAN",
    Designation: "Associate Professor",
    mailid: "praveendiran@gmail.com",
    pdf: "https://drive.google.com/file/d/1cz8L9qzPFqF6Rjs-KiOEPaHZO1HqS5ae/view?usp=sharing",
  },
  {
    id: "13",
    cover: cover,
    dp: dpm,
    name: "Dr.J.PRABAKARAN",
    Designation: "Associate Professor",
    mailid: "jp_au@yahoo.com ,",
    pdf: "https://drive.google.com/file/d/1CHaWoR-zK1TBAReBv8n7OCG1TKVyu3k0/view?usp=sharing",
  },
  {
    id: "14",
    cover: cover,
    dp: Senthil,
    name: "Mr. C.R. SENTHIL KUMAR",
    Designation: "Assistant Professor",
    mailid: "ausenthilkumar@gmail.com",
    pdf: "https://drive.google.com/file/d/11sh4xa_PdmLKhIjUvOOyGNMSg6ME5-_w/view?usp=sharing",
  },
  {
    id: "15",
    cover: cover,
    dp: Guruprasad,
    name: "Dr. B.GURUPRASAD",
    Designation: "Assistant Professor (SG)",
    mailid: "tellprasadcdm@gmail.com ",
    pdf: "https://drive.google.com/file/d/18aUYs0pssl7CMF6pFvGLWnZBA8kbWg1R/view?usp=sharing",
  },
  {
    id: "16",
    cover: cover,
    dp: Babu,
    name: "Dr.N.BABU",
    Designation: "Assistant Professor (Selection Grade)",
    mailid: "babu.manu11@gmail.com",
    pdf: "https://drive.google.com/file/d/1hP1X8PxTAevHc1i4b6VdibdVpqEXtOvG/view?usp=sharing",
  },
  {
    id: "17",
    cover: cover,
    dp: Syed,
    name: "Mr.A.SYED ABDULLAH",
    Designation: "Assistant Professor (Contract)",
    mailid: ":abdullahh50@gmail.com",
    pdf: "https://drive.google.com/file/d/190M9ingHxoihRh8-NW-8yGDze4rmbR2B/view?usp=sharing",
  },
  {
    id: "18",
    cover: cover,
    dp: Muruganandham,
    name: "K.Muruganandham",
    Designation: "Assistant Professor",
    mailid: "muruganandham.k90@gmail.com",
    pdf: "https://drive.google.com/file/d/1AuE98PlE5mo0NDADT8sELqjf0vfr0BGc/view?usp=sharing",
  },
  {
    id: "19",
    cover: cover,
    dp: Elumalai,
    name: ".Elumalai P",
    Designation: "Assistant Professor",
    mailid: "thiyakuelumalai582@gmail.com",
    pdf: "https://drive.google.com/file/d/1-DcEN3CWc_eONmgs86Beax11IGYE7Beu/view?usp=sharing",
  },
  {
    id: "20",
    cover: cover,
    dp: Sathishkumar,
    name: "C. Sathishkumar",
    Designation: "Assistant Professor",
    mailid: "sathishkumarcsk94@gmail.com",
    pdf: "https://drive.google.com/file/d/1ZBb747JVT16bs2Tlmu4UlcdtFHExXJIF/view?usp=sharing",
  },
  {
    id: "21",
    cover: cover,
    dp: Rajakumar,
    name: "N.Rajakumar",
    Designation: "Assistant Professor",
    mailid: "rajvalli74@gmail.com",
    pdf: "https://drive.google.com/file/d/1SMWmKWWoYAPNPufp3VowcZR-VPpaPTBd/view?usp=sharing",
  },
  {
    id: "22",
    cover: cover,
    dp: Karthikeyan,
    name: "Mr.K.Karthikeyan",
    Designation: "Assistant Professor",
    mailid: "kkshare2020@gmail.com",
    pdf: "https://drive.google.com/file/d/13AAP4pt4tSa2zDAxg5gLV0E_PMP6xFK4/view?usp=sharing",
  },
 
  {
    id: "23",
    cover: cover,
    dp: Sakthi,
    name: "Dr.RM.SAKTHI SADHASIVAM",
    Designation: "Assistant Professor (Ad-hoc)",
    mailid: "sakthi211193@gmail.com",
    pdf: "https://drive.google.com/file/d/1tJZVd1B0DYM2PyKGi7pfmPonrI1lqMpA/view?usp=sharing",
  },
 

  
];
const mech_sup_profiles = [
  {
    id: "1",
    cover: cover,
    dp: dpf,
    name: "Arjun",
    Designation: "Foreman Instructor",
    mailid: "e",
    pdf: "#",
  },
];

const mech_labs=[
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

const mech_dept_events=[
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
  mech_dept_menu,
  mech_fac_profiles,
  mech_sup_profiles,
  mech_mission,
  mech_vision,
  mech_progs,
  mech_outcomes,
  mech_peo,
  mech_spec_outcomes,
  mech_labs,
  mech_dept_events
};
