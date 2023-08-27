import dp from "../assets/pictures/dp.jpg";
import cover from "../assets/pictures/civil_banner.webp";

import swayam from '../assets/pictures/swayam.webp'
import robotics from '../assets/pictures/robotics.webp'
import placement from '../assets/pictures/placement.webp'

const civ_dept_menu = [
  {
    id: "1",
    path: "/civildept",
    link: "About the Department",
  },
  {
    id: "3",
    path: "/civildept/civil-peo",
    link: "Programme Objectives & Outcomes",
  },
  {
    id: "5",
    path: "/civildept/civil-faculties",
    link: "Faculties",
  },
  {
    id: "7",
    path: "/civildept/civil-lab",
    link: "Lab Facilities",
  },
  {
    id: "8",
    path: "#",
    link: "Professional Socities",
  },
  {
    id: "9",
    path: "#",
    link: "Research and Publications",
  },
  {
    id: "10",
    path: "/civildept/civil-dept-events",
    link: "Department Events",
  },
  {
    id: "11",
    path: "#",
    link: "MoU",
  },
];

const civ_fac_profiles = [
  {
    id: "1",
    cover: cover,
    dp: dp,
    name: "Dr.A.Leelavathi",
    Designation: "Assistant Professor",
    mailid: "leelaaccet2007@gmail.com",
    pdf: "https://drive.google.com/file/d/19E3dQNGUdMENQp4p6EyeA2GpwlD1rJAW/view?usp=drive_link",
  },
  {
    id: "2",
    cover: cover,
    dp: dp,
    name: "Senthamizhan M",
    Designation: "Assistant Professor(Consolidated Pay)",
    mailid: "tamizhanirtt@gmail.com",
    pdf: "https://drive.google.com/file/d/1sGVV5DEdPB0yVdtoquz4VQ6idq8l3JEC/view?usp=drive_link",
  },
  {
    id: "3",
    cover: cover,
    dp: dp,
    name: "R.Manigandan",
    Designation: "Assistant Professor(Adhoc)",
    mailid: "manigandanabm@gmail.com",
    pdf: "https://drive.google.com/file/d/1F3pYXr90rYHYqkrTK7EJJ8ucdWTMYDxu/view?usp=drive_link",
  },
  {
    id: "4",
    cover: cover,
    dp: dp,
    name: "R.Vinothkumar",
    Designation: "Assistant Professor(Adhoc)",
    mailid: "vinothrvkce@gmail.com",
    pdf: "https://drive.google.com/file/d/1aM6O4cKxCGbSstY4XhUOoQtoqGfuhOu_/view?usp=drive_link",
  },
  {
    id: "5",
    cover: cover,
    dp: dp,
    name: "Venkatesh B",
    Designation: "Assistant Professor",
    mailid: "venkatesh@gcetly.ac.in",
    pdf: "https://drive.google.com/file/d/1mepcWTb4EsJf7fFTMs7S4QBf1t9yDJ-f/view?usp=drive_link",
  },
  {
    id: "6",
    cover: cover,
    dp: dp,
    name: "Dr.C.Subramanian",
    Designation: "Professor",
    mailid: "csk285@gmail.com",
    pdf: "https://drive.google.com/file/d/1reOgq2O5xQzEsPK_cgvN6UhCgrSYKMYt/view?usp=drive_link",
  },
  {
    id: "7",
    cover: cover,
    dp: dp,
    name: "Dr.C.Vijayaprabha",
    Designation: "Associate Professor",
    mailid: "vijayaprabha.struct@gmail.com",
    pdf: "https://drive.google.com/file/d/1JaVtmO9lL1tMx-AiOrt6OW5s_1h1dQ7Y/view?usp=drive_link",
  },
  {
    id: "8",
    cover: cover,
    dp: dp,
    name: "Dr.S.M.Kavitha",
    Designation: "Associate Professor",
    mailid: "smkavitha@accetedu.in",
    pdf: "https://drive.google.com/file/d/1jZ2CmroavW3pQ7e75-GZM7VYaYiacLdt/view?usp=drive_link",
  },
  {
    id: "9",
    cover: cover,
    dp: dp,
    name: "Dr SR Sumathy",
    Designation: "Associate Professor",
    mailid: "srsumathy@accetedu.in",
    pdf: "https://drive.google.com/file/d/1T6Jiwq-TywClE-EZ1gr0UwG2F3ck9ks-/view?usp=drive_link",
  },
];
const civ_sup_profiles = [
  {
    id: "1",
    cover: cover,
    dp: dp,
    name: "Arjun",
    Designation: "Foreman Instructor",
    mailid: "e",
    pdf: "#",
  },
];

const civ_vision = {
  id: "1",
  visiondata:
    "To offer novel and economical solutions for the complex and complicated problems arise in Civil Engineering Industry and to play a significant role in developing the infrastructure in our country. To provide a creative environment for learners to attain high level of excellence in the Civil Engineering Industry.",
};
const civ_mission = [
  {
    id: "1",
    mission:
      "To create, disseminate and integrate in depth knowledge in Civil Engineering among Graduates and to provide a dynamic learning environment that emphasizes open-ended design, problem-solving skills, team work, communication, and leadership skills which in turn enables the betterment of human society.",
  },
  {
    id: "2",
    mission:
      "To produce highly competent Civil Engineering professionals with innovative thinking and ethical standards.",
  },
  {
    id: "3",
    mission:
      "To promote quality education, research and consultancy for industrial and societal needs.",
  },
  {
    id: "4",
    mission:
      "To provide state-of-the-art resources that contributes to a congenial learning environment.",
  },
];

const civ_peo = [
  {
    id: "1",
    head: "PEO 1",
    house: "left",
    content:
      "To provide students a sound knowledge in mathematical, scientific and engineering fundamentals necessary to formulate, solve and analyze engineering problems related to civil engineering industry and to make them aware of the practical problems and constraints in executing an infrastructure and make them well skilled for the future.",
  },
  {
    id: "2",
    head: "PEO 2",
    house: "right",
    content:
      "To cultivate the habit of continuous learning and to create interest in students to pursue their higher studies and research.",
  },
  {
    id: "3",
    head: "PEO 3",
    house: "left",
    content:
      "To develop the ability of students to apply their civil engineering knowledge in practical problems and arrive with viable and economical solutions to confidently work in industries and to have successful careers.",
  },
  {
    id: "4",
    head: "PEO 4",
    house: "right",
    content:
      "To inculcate the habit of practicing ethical standards in the profession and to make them capable in resolving moral dilemmas arise in their profession.",
  },
];

const civ_outcomes = [
  {
    id: "1",
    point:
      "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems",
  },
  {
    id: "2",
    point:
      "Problem analysis: Identify, formulate, review research literature, and analyse complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
  },
  {
    id: "3",
    point:
      "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
  },
  {
    id: "4",
    point:
      "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions",
  },
  {
    id: "5",
    point:
      "Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
  },
  {
    id: "6",
    point:
      "The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice",
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
      "Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings",
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
      "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change",
  },
];
const civ_spec_outcomes = [
  {
    id: "1",
    point:
      "Prepare Plans and Layouts for any Civil Engineering Structures and apply construction and management principles to supervise and successfully complete the construction Projects as per the client requirements and need with in the stipulated period of time.",
  },
  {
    id: "2",
    point:
      "Analyse and economically design the safe and durable Superstructures and Foundations for Buildings, Bridges, Tower, Highway, Airfield pavement, Environmental Structures, Liquid and Material storage Structures, Water Conveying Systems and many other allied Civil Engineering Structures.",
  },
  {
    id: "3",
    point:
      "Investigate issues pertaining to water treatment, waste management, pollution control and provide sustainable solutions with due concerns on preserving the ecology and the environment",
  },
];

const civ_progs = [
  {
    id: "1",
    year:"1952",
    // period:"4 Years",
    top_head:"B.E.",
    program: "Civil Engineering",
    intake: "60",
  },
  {
    id: "2",
    year:"1971",
    // period:"4 Years",
    top_head:"Part time B.E.",
    program: "Civil Engineering",
    intake: "60",
  },
  {
    id: "3",
    year:"2002",
    // period:"4 Years",
    top_head:"M.E.",
    program: "Structural Engineering",
    intake: "18",
  },
  {
    id: "4",
    year:"2002",
    // period:"4 Years",
    top_head:"M.E.",
    program: "Environmental Engineering",
    intake: "18",
  },
];
const civ_labs=[
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

const civ_dept_events=[
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
  civ_dept_menu,
  civ_fac_profiles,
  civ_sup_profiles,
  civ_mission,
  civ_outcomes,
  civ_spec_outcomes,
  civ_peo,
  civ_vision,
  civ_progs,
  civ_dept_events,
  civ_labs
};
