import dpm from "../assets/pictures/boy.webp";
import dpf from "../assets/pictures/girl.webp"
import cover from "../assets/pictures/eee-cover.webp";

import swayam from '../assets/pictures/swayam.webp'
import robotics from '../assets/pictures/robotics.webp'
import placement from '../assets/pictures/placement.webp'

import baskaran from '../assets/pictures/eee_dept/eee_faculties/1-Baskaran-_3_.webp'
import arunya from '../assets/pictures/eee_dept/eee_faculties/2-Arunya-Revathi.webp'
import Nageswari from '../assets/pictures/eee_dept/eee_faculties/3-Nageswari.webp'
import Vennila from '../assets/pictures/eee_dept/eee_faculties/4-Vennila.webp'
import Madasamy from '../assets/pictures/eee_dept/eee_faculties/5-Madasamy.webp'
import Ramadas from '../assets/pictures/eee_dept/eee_faculties/6-Ramadas.webp'
import arun from '../assets/pictures/eee_dept/eee_faculties/7 Arun.webp'
import amuthan from '../assets/pictures/eee_dept/eee_faculties/8 Amuthan.webp'
import pradeep from '../assets/pictures/eee_dept/eee_faculties/11 PRADEEP.webp'
import Padmanaban from '../assets/pictures/eee_dept/eee_faculties/12 Padmanaban (1).webp'
import ida from '../assets/pictures/eee_dept/eee_faculties/13 Ida Evangeline.webp'
import asaimani from '../assets/pictures/eee_dept/eee_faculties/14 Asaimani.webp'
import dhivya from '../assets/pictures/eee_dept/eee_faculties/15 Dhivya.webp'
import saranya from '../assets/pictures/eee_dept/eee_faculties/17 Saranya.webp'
import preethi from '../assets/pictures/eee_dept/eee_faculties/18 Preethi.webp'
import abarna from '../assets/pictures/eee_dept/eee_faculties/19 Abarna.webp'
import mansoor from '../assets/pictures/eee_dept/eee_faculties/21-Mansoore.webp'
import abinesh from '../assets/pictures/eee_dept/eee_faculties/22-Abinesh.webp'
import akbar from '../assets/pictures/eee_dept/eee_faculties/Akbar-_2_.webp'
import ananthi from '../assets/pictures/eee_dept/eee_faculties/Ananthii-_1_.webp'
import arulmani from '../assets/pictures/eee_dept/eee_faculties/Arulmani-_1_.webp'
import chockalingam from '../assets/pictures/eee_dept/eee_faculties/Chokalingam-_1_.webp'
import natchiappan from '../assets/pictures/eee_dept/eee_faculties/Natchiappan-_1_.webp'
import peter from '../assets/pictures/eee_dept/eee_faculties/Peter-_1_.webp'
import raja from '../assets/pictures/eee_dept/eee_faculties/Raja-_1_.webp'
import suresh from '../assets/pictures/eee_dept/eee_faculties/Suresh-kumar-_1_.webp'
import mani from '../assets/pictures/eee_dept/eee_faculties/manimaran-_1_.webp'
import sakthi from '../assets/pictures/eee_dept/eee_faculties/Sakthivel-_1_.webp'

const eee_dept_menu = [
  {
    id: "1",
    path: "/eeedept",
    link: "About the Department",
    arl:'l'
  },
  {
    id: "3",
    path: "/eeedept/eee-peo",
    link: "Programme Objectives & Outcomes",
    arl:'l'
  },
  {
    id: "5",
    path: "/eeedept/eee-faculties",
    link: "Faculties",
    arl:'l'
  },
  {
    id: "7",
    path: "/eeedept/eee-lab",
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
    path: "/eeedept/eee-dept-events",
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
    link: "Next Gen Lab",
    arl:'l'
  },
  {
    id: "13",
    path: "#",
    link: "Modern Electric Drives System",
    arl:'l'
  },
  {
    id: "14",
    path: "#",
    link: "Students Corner",
    arl:'l'
  },
];

const eee_hod = {
  name: "Dr.K.Baskaran",
  designation: "Head of the Department, EEE",
  pic: baskaran,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" +
    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" +
    "enim ad minim veniam, quis nostrud exercitation ullamco laboris" +
    "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
    "in reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
    "nulla pariatur. Excepteur sint occaecat cupidatat non proident," +
    "sunt in culpa qui officia deserunt mollit anim id est laborum." +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" +
    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" +
    "enim ad minim veniam, quis nostrud exercitation ullamco laboris" +
    "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
    "in reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
    "nulla pariatur. Excepteur sint occaecat cupidatat non proident," +
    "sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const eee_vision = {
  id: "1",
  visiondata:
    "To educate the students in the recent developments of emerging fields in Electrical and Electronics Engineering, encourage research activities and innovative techniques, develop employability skills so as to equip them to excel globally.",
};
const eee_mission = [
  {
    id: "1",
    mission:
      "To bring out the students as committed and employable technocrats in the field of Electrical and Electronics Engineering.",
  },
  {
    id: "2",
    mission:
      "To prepare the students for addressing societal challenges through competitive and innovative research.",
  },
  {
    id: "3",
    mission:
      "To ensure the graduates acquire leadership qualities and commitment towards lifelong learning.",
  },
];

const eee_progs = [
  {
    id: "1",
    year:"1952",
    // period:"4 Years",
    top_head:"B.E.",
    program: "Electrical and Electronics Engineering",
    intake: "120",
  },
  {
    id: "2",
    year:"2002",
    // period:"4 Years",
    top_head:"M.E.",
    program: "Power Electronics and Drives",
    intake: "18",
  },
  {
    id: "3",
    year:"1971",
    // period:"4 Years",
    top_head:"Part time B.E.",
    program: "Electrical and Electronics Engineering",
    intake: "60",
  },
];

const eee_peo = [
  {
    id: "1",
    head: "PEO 1",
    house: "left",
    content:
      "To impart a stout foundation in Mathematics, Science and Electrical Engineering fundamentals as well as comprehend, scrutinize, design, innovate and develop products for real life applications and to meet trending industrial needs.",
  },
  {
    id: "2",
    head: "PEO 2",
    house: "right",
    content:
      "To inculcate ethical attitude, effective communication skills, leadership and management qualities, self-motivation with team spirit for making the most out of collaboration and showing solicitude towards society.",
  },
  {
    id: "3",
    head: "PEO 3",
    house: "left",
    content:
      "To provide a holistic academic environment to foster excellence, entrepreneurship and multidisciplinary approach to develop an attitude for research and lifelong learning",
  },
];

const eee_outcomes = [
  {
    id: "1",
    point:
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
  },
  {
    id: "2",
    point:
      "Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
  },
  {
    id: "3",
    point:
      "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
  },
  {
    id: "4",
    point:
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
  },
  {
    id: "5",
    point:
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
  },
  {
    id: "6",
    point:
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
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
    point: "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
  },
  {
    id: "12",
    point:
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
  },
];
const eee_spec_outcomes = [
  {
    id: "1",
    point:
      "Introduce the concepts of Electrical and Electronics Engineering and apply them to electrical power apparatus, analog and digital electronic systems.",
  },
  {
    id: "2",
    point:
      "Analyze, design and provide an engineering solution to issues in power electronics, drives and renewable energy systems.",
  },
];

const eee_fac_profiles = [
  {
    id: "1",
    cover: cover,
    dp: baskaran,
    name: "Dr.K.Baskaran",
    Designation: "Professor and HOD",
    mailid: "drbaskaran@accetedu.in",
    pdf: "https://drive.google.com/file/d/1-CyaqHhAV-kbm73tNpQWzePwJpnZb5mh/view?usp=drive_link",
  },
  {
    id: "2",
    cover: cover,
    dp: arunya,
    name: "Dr.A.ArunyaRevathi",
    Designation: "Professor (CAS)",
    mailid: "arunyarevathi_eee@yahoo.co.in",
    pdf: "https://drive.google.com/file/d/1KGuTXZdM25MKdLXwN7wmjnCoVpyUGXLF/view?usp=drive_link",
  },
  {
    id: "3",
    cover: cover,
    dp: Nageswari,
    name: "Dr.S.Nageswari",
    Designation: "Associate Professor",
    mailid: "mahabashyam@gmail.com",
    pdf: "https://drive.google.com/file/d/1j0WWZP729GsSQTUxizR_vtWOGOLBJolb/view?usp=drive_link",
  },
  {
    id: "4",
    cover: cover,
    dp: Vennila,
    name: "Dr.C.Vennila",
    Designation: "Associate Professor",
    mailid: "vennila@accetedu.in",
    pdf: "https://drive.google.com/file/d/1hwItDOCeoFC1Tch5xhuZ4okuI72u1XTI/view?usp=drive_link",
  },
  {
    id: "5",
    cover: cover,
    dp: Madasamy,
    name: "Prof.P.Madasamy",
    Designation: "Associate Professor(CAS)",
    mailid: "mjasmitha0612@gmail.com",
    pdf: "https://drive.google.com/file/d/1zk2vQddK_B9d3XtbwoLXDIfIWhlEKMWL/view?usp=drive_link",
  },
  {
    id: "6",
    cover: cover,
    dp: Ramadas,
    name: "Prof.K.Ramadas",
    Designation: "Associate Professor(CAS)",
    mailid: "proframadas@gmail.com",
    pdf: "https://drive.google.com/file/d/1a60IrGfnpHU23Uj0a54mEuo4Iopi2ffE/view?usp=drive_link",
  },
  {
    id: "7",
    cover: cover,
    dp: arun,
    name: "Dr.M.Arun",
    Designation: "Associate Professor(CAS)",
    mailid: "arunmano80@gmail.com",
    pdf: "#",
  },
  {
    id: "8",
    cover: cover,
    dp: amuthan,
    name: "Prof.G.Amuthan",
    Designation: "Assistant Professor",
    mailid: "amuthan@accetedu.in",
    pdf: "https://drive.google.com/file/d/1hRTZiBIRMz5uSjgxjG1qqZ31BeXVP--_/view?usp=drive_link",
  },
  {
    id: "9",
    cover: cover,
    dp: dpm,
    name: "Prof.M.L.Ramamoorthy",
    Designation: "Assistant Professor",
    mailid: "ramamoorthyml@gmail.com",
    pdf: "https://drive.google.com/file/d/1TDYW0Jlk76GKtapo-fZVtlgbn91eUaV1/view?usp=drive_link",
  },
  {
    id: "10",
    cover: cover,
    dp: dpm,
    name: "Dr.S.Balamurugan",
    Designation: "Assistant Professor",
    mailid: "balamurugan@accetedu.in",
    pdf: "https://drive.google.com/file/d/1v5dDO-5JuPdU7Hd7upXXPDJ2s9XP9kHG/view?usp=drive_link",
  },
  {
    id: "11",
    cover: cover,
    dp: pradeep,
    name: "Prof.V.Pradeep",
    Designation: "Assistant Professor",
    mailid: "pradeep.vee@gmail.com",
    pdf: "https://drive.google.com/file/d/1nsd2W5GQO7jlECkVSSag6Qqf52QO7QRB/view?usp=drive_link",
  },
  {
    id: "12",
    cover: cover,
    dp: Padmanaban,
    name: "Prof.K.Padmanaban",
    Designation: "Assistant Professor",
    mailid: "padupoi@gmail.com",
    pdf: "https://drive.google.com/file/d/1LPeLnjYS3YyPGIc01u1HdiiRJUc3Z5xJ/view?usp=drive_link",
  },
  {
    id: "13",
    cover: cover,
    dp: ida,
    name: "Dr.S.Ida Evangeline",
    Designation: "Assistant Professor",
    mailid: "ida.fragi@gmail.com",
    pdf: "https://drive.google.com/file/d/1PcBZXj5XygaQGojKwCZWLn4o9SykS9J5/view?usp=drive_link",
  },
  {
    id: "14",
    cover: cover,
    dp: asaimani,
    name: "Prof.S.Aasaimani",
    Designation: "Assistant Professor",
    mailid: "aasaimani.be.eee@gmail.com",
    pdf: "https://drive.google.com/file/d/1I_TzxbSMu6Kja_8XgtEV-S36HcqaWkbt/view?usp=drive_link",
  },
  {
    id: "15",
    cover: cover,
    dp: dhivya,
    name: "Ms.K.Dhivya",
    Designation: "Assistant Professor (Contract Basis)",
    mailid: "dhivyaacgcet@gmail.com",
    pdf: "https://drive.google.com/file/d/15LGkH7mXJXN7jTLQyB5PImy7NYtR9B_W/view?usp=drive_link",
  },
  {
    id: "16",
    cover: cover,
    dp: dpf,
    name: "Ms.B.Subashini",
    Designation: "Assistant Professor (Contract Basis)",
    mailid: "subasubramani11@gmail.com",
    pdf: "https://drive.google.com/file/d/1LeLwtT80IVMAeNXk_b-lc2KGmEDpisyW/view?usp=drive_link",
  },
  {
    id: "17",
    cover: cover,
    dp: saranya,
    name: "Ms.M.Sharanya",
    Designation: "Assistant Professor (Contract Basis)",
    mailid: "sharanyam105@gmail.com",
    pdf: "https://drive.google.com/file/d/1gLf-Plr7M_wHqoTKvj2ZrU3VdPKoVmRR/view?usp=drive_link",
  },
  {
    id: "18",
    cover: cover,
    dp: preethi,
    name: "Ms.M.Preethi",
    Designation: "Assistant Professor (Part time)",
    mailid: "mpreethi890@gmail.com",
    pdf: "https://drive.google.com/file/d/1DNv-vi7I1A2NGiZf_LOj0bkD-spSm66k/view?usp=drive_link",
  },
  {
    id: "19",
    cover: cover,
    dp: abarna,
    name: "Ms.C.Abarna",
    Designation: "Assistant Professor (Part time)",
    mailid: "cabarna97@gmail.com",
    pdf: "https://drive.google.com/file/d/1IXsTDmJhYnarMU1H-LTsbNp4YDRBiNj8/view?usp=drive_link",
  },
  {
    id: "20",
    cover: cover,
    dp: dpf,
    name: "Mrs.E.Priyanka",
    Designation: "Assistant Professor (Part time)",
    mailid: "evspriya@gmail.com",
    pdf: "https://drive.google.com/file/d/1GUx7nbxF9GCk5RftL-CyHKvUAqa2vWzL/view?usp=drive_link",
  },
  {
    id: "21",
    cover: cover,
    dp: mansoor,
    name: "Mr.S.Mohamed Jaidu Mansoor",
    Designation: "Assistant Professor (Part time)",
    mailid: "mohamedjaidumansoor@gmail.com",
    pdf: "https://drive.google.com/file/d/1WjKK-NvxihJQeJ0l-vOCrtHmPtMmd6R_/view?usp=drive_link",
  },
  {
    id: "22",
    cover: cover,
    dp: abinesh,
    name: "Mr.G.Abinesh",
    Designation: "Assistant Professor (Part time)",
    mailid: "abineshkkdi@gmail.com",
    pdf: "https://drive.google.com/file/d/1R5qwoGs3-tS22Cdcbssh1ltGjpR33mm3/view?usp=drive_link",
  },
];
const eee_sup_profiles = [
  {
    id: "1",
    cover: cover,
    dp: natchiappan,
    name: "P.Nachiappan",
    Designation: "Junior Draughting Officer",
    mailid: "nachiappan.perumal@gmail.com",
  },
  {
    id: "2",
    cover: cover,
    dp: ananthi,
    name: "I.Ananthi",
    Designation: "Lab Assistant (SR.Gr)",
    mailid: "ananthiselvaraj71@gmail.com",
  },
  {
    id: "3",
    cover: cover,
    dp: mani,
    name: "K.Manimaran",
    Designation: "Electrician – II",
    mailid: "maranmani132@gmail.com",
  },
  {
    id: "4",
    cover: cover,
    dp: sakthi,
    name: "M.Sakthivel",
    Designation: "Electrician – II",
    mailid: "sudhasakthisri@gmail.com",
  },
  {
    id: "5",
    cover: cover,
    dp: peter,
    name: "G.Peter Ramesh",
    Designation: "Mechanic – II",
    mailid: "accetpeter@gmail.com",
  },
  {
    id: "6",
    cover: cover,
    dp: akbar,
    name: "J.Akbar Ali",
    Designation: "Electrician  - II",
    mailid: "akku1485@gmail.com",
  },
  {
    id: "7",
    cover: cover,
    dp: chockalingam,
    name: "G.Chokalingam",
    Designation: "Electrician – II",
    mailid: "chockugs@gmail.com",
  },
  {
    id: "8",
    cover: cover,
    dp: raja,
    name: "M.Raja",
    Designation: "Cleaner",
    mailid: "rajanivi167@gmail.com",
  },
  {
    id: "9",
    cover: cover,
    dp: arulmani,
    name: "R.Arulmani",
    Designation: "Cleaner",
  },
];

const eee_labs=[
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

const eee_dept_events=[
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
  eee_dept_menu,
  eee_fac_profiles,
  eee_sup_profiles,
  eee_mission,
  eee_vision,
  eee_progs,
  eee_outcomes,
  eee_peo,
  eee_spec_outcomes,
  eee_dept_events,
  eee_labs,eee_hod
};
