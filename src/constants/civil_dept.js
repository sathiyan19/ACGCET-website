import dp from "../assets/pictures/dp.jpg";
import dpm from '../assets/pictures/boy.webp'
import dpf from '../assets/pictures/girl.webp'
import cover from "../assets/pictures/civil_banner.webp";

import swayam from '../assets/pictures/swayam.webp'
import robotics from '../assets/pictures/robotics.webp'
import placement from '../assets/pictures/placement.webp'

const civ_dept_menu = [
  {
    id: "1",
    path: "/civildept",
    link: "About the Department",
    arl:'l'
  },
  {
    id: "3",
    path: "/civildept/civil-peo",
    link: "Programme Objectives & Outcomes",
    arl:'l'
  },
  {
    id: "5",
    path: "/civildept/civil-faculties",
    link: "Faculties",
    arl:'l'
  },
  {
    id: "7",
    path: "/civildept/civil-lab",
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
    path: "/civildept/civil-dept-events",
    link: "Department Events",
    arl:'l'
  },
  {
    id: "12",
    path: "/civildept/civil-awards",
    link: "Awards, Patents & Copyrights",
    arl:'l'
  },
  {
    id: "11",
    path: "#",
    link: "MoU",
    arl:'l'
  },
];

const civ_fac_profiles = [
  {
    id: "1",
    cover: cover,
    dp: dpf,
    name: "Dr.A.Leelavathi",
    Designation: "Assistant Professor",
    mailid: "leelaaccet2007@gmail.com",
    pdf: "https://drive.google.com/file/d/19E3dQNGUdMENQp4p6EyeA2GpwlD1rJAW/view?usp=drive_link",
  },
  {
    id: "2",
    cover: cover,
    dp: dpm,
    name: "Senthamizhan M",
    Designation: "Assistant Professor(Consolidated Pay)",
    mailid: "tamizhanirtt@gmail.com",
    pdf: "https://drive.google.com/file/d/1sGVV5DEdPB0yVdtoquz4VQ6idq8l3JEC/view?usp=drive_link",
  },
  {
    id: "3",
    cover: cover,
    dp: dpm,
    name: "R.Manigandan",
    Designation: "Assistant Professor(Adhoc)",
    mailid: "manigandanabm@gmail.com",
    pdf: "https://drive.google.com/file/d/1F3pYXr90rYHYqkrTK7EJJ8ucdWTMYDxu/view?usp=drive_link",
  },
  {
    id: "4",
    cover: cover,
    dp: dpm,
    name: "R.Vinothkumar",
    Designation: "Assistant Professor(Adhoc)",
    mailid: "vinothrvkce@gmail.com",
    pdf: "https://drive.google.com/file/d/1aM6O4cKxCGbSstY4XhUOoQtoqGfuhOu_/view?usp=drive_link",
  },
  {
    id: "5",
    cover: cover,
    dp: dpm,
    name: "Venkatesh B",
    Designation: "Assistant Professor",
    mailid: "venkatesh@gcetly.ac.in",
    pdf: "https://drive.google.com/file/d/1mepcWTb4EsJf7fFTMs7S4QBf1t9yDJ-f/view?usp=drive_link",
  },
  {
    id: "6",
    cover: cover,
    dp: dpm,
    name: "Dr.C.Subramanian",
    Designation: "Professor",
    mailid: "csk285@gmail.com",
    pdf: "https://drive.google.com/file/d/1reOgq2O5xQzEsPK_cgvN6UhCgrSYKMYt/view?usp=drive_link",
  },
  {
    id: "7",
    cover: cover,
    dp: dpm,
    name: "Dr.C.Vijayaprabha",
    Designation: "Associate Professor",
    mailid: "vijayaprabha.struct@gmail.com",
    pdf: "https://drive.google.com/file/d/1JaVtmO9lL1tMx-AiOrt6OW5s_1h1dQ7Y/view?usp=drive_link",
  },
  {
    id: "8",
    cover: cover,
    dp: dpf,
    name: "Dr.S.M.Kavitha",
    Designation: "Associate Professor",
    mailid: "smkavitha@accetedu.in",
    pdf: "https://drive.google.com/file/d/1jZ2CmroavW3pQ7e75-GZM7VYaYiacLdt/view?usp=drive_link",
  },
  {
    id: "9",
    cover: cover,
    dp: dpf,
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
    dp: dpm,
    name: "R.Rajasekar",
    Designation: "Mechanic Grade II",
    mailid: "rajasekaraccet15@gmail.com",
    pdf: "https://drive.google.com/file/d/1SbntNfPPQlaD5bFw5_yzOleqRzMSbZ8f/view?usp=drive_link",
  },
  {
    id: "2",
    cover: cover,
    dp: dpm,
    name: "E.Kathiresan",
    Designation: "Lab Assistantr",
    mailid: "kathiresane2777@gmail.com",
    pdf: "https://drive.google.com/file/d/1Q0KvvXoWDjbhCCEWMwTO9b2H78b8ZFf4/view?usp=drive_link",
  },
  {
    id: "3",
    cover: cover,
    dp: dpm,
    name: "M.Ramakirshnan",
    Designation: "Cleaner",
    mailid: "ramakirshnan0602@gmail.com",
    pdf: "https://drive.google.com/file/d/139Tc3lgMnCBKkIJ_8GJsnlfQ_DoKQ38b/view?usp=drive_link",
  },
  {
    id: "4",
    cover: cover,
    dp: dpm,
    name: "K.Thiyagarajan",
    Designation: "Cleaner",
    mailid: "",
    pdf: "https://drive.google.com/file/d/13-HPV-MSMtpnhdNRVKvg4t5b_seeqfQd/view?usp=drive_link",
  },
  {
    id: "5",
    cover: cover,
    dp: dpm,
    name: "C.Selvaraj",
    Designation: "Lab Assistant(spl-gr)",
    mailid: "selvarajc1971@gmail.com",
    pdf: "https://drive.google.com/file/d/1q88hCWtv3g_k5S9TR2avLxWMwdorJu5T/view?usp=drive_link",
  },
  {
    id: "6",
    cover: cover,
    dp: dpm,
    name: "C.Muthuramalingam",
    Designation: "Lab Assistant(spl-gr)",
    mailid: "",
    pdf: "https://drive.google.com/file/d/19V56uEx3rQ6W13MG32Ni3-8R5kl3xkpi/view?usp=drive_link",
  },
  {
    id: "7",
    cover: cover,
    dp: dpm,
    name: "P.K.Murugesan",
    Designation: "Lab Assistant",
    mailid: "easank.81@gmail.com",
    pdf: "https://drive.google.com/file/d/1cOzrwf6JxNoojml-CwCxlbPwb6JgcFf4/view?usp=drive_link",
  },
  {
    id: "8",
    cover: cover,
    dp: dpf,
    name: "J.Veenus Rani",
    Designation: "Junior Draughting Officer",
    mailid: "veenusrani22@gmail.com",
    pdf: "https://drive.google.com/file/d/1ArGovhNL_iXvJqQ_ar1gkIpkjPSBhOFy/view?usp=drive_link",
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

const civ_awards = [
  {
    id: "6",
    head: "",
    house: "right",
    pdf:"https://drive.google.com/file/d/1XH1mUAAL8EJ48JKdN-RFFY5Uqz34F0Ap/view?usp=drive_link",
    content:
      "Dr. C. Vijayaprabha achieved the distinction of being designated as an 'NPTEL Domain Scholar' in the field of Concrete Technology by IIT Madras during the period from July to October 2023, demonstrating her advanced knowledge and expertise in civil engineering.",
  },
  {
    id: "5",
    head: "",
    house: "left",
    pdf:"https://drive.google.com/file/d/1lIQNqnjuMviz1KNEMD_zvqDEQRwnrSQl/view?usp=drive_link",
    content:
      "Dr. C. Vijayaprabha was recognized as an 'NPTEL Discipline Star' in Concrete Technology by IIT Madras for her exceptional performance during the NPTEL course from July to October 2022, showcasing her dedication and expertise in the field of civil engineering.",
  },
  {
    id: "4",
    head: "",
    house: "right",
    pdf:"https://drive.google.com/file/d/1iwS94tI0WzzlkaNFHhMxT-oTRT8ovjTd/view?usp=drive_link",
    content:
      "Dr. C. Vijayaprabha demonstrated her commitment to learning by earning the 'NPTEL Believer' recognition in the field of Concrete Technology from IIT Madras during the January to April 2022 period through the NPTEL (National Programme on Technology Enhanced Learning) program.",
  },
  {
    id: "3",
    head: "",
    house: "left",
    pdf:"https://drive.google.com/file/d/160ufTl6ly5eM-KoyJ2qgcAgAakJBEXos/view?usp=drive_link",
    content:
      "In 2022, Dr. C. Vijayaprabha was honored with the Best Paper Award from the Ramco Institute of Technology for her research titled 'The Effect of Sloshing due to the Dynamic Load in a Liquid Storage Tank with and Without Internal Obstructions' in the field of civil engineering.",
  },
  {
    id: "1",
    head: "",
    house: "right",
    content:
      "In 2021, Dr. S. R. Sumathy was awarded the NESIN Award for Best Researcher in Civil Engineering by Science Father, recognizing her exceptional contributions to the field.",
  },
  {
    id: "2",
    head: "",
    house: "left",
    pdf:"https://drive.google.com/file/d/1rnXzucT0I21lJqn-QUhqXvN67S4lb1Ke/view?usp=drive_link",
    content:
      "In October 2020, Dr. C. Vijayaprabha received the Research Excellence Award in Civil Engineering, known as the InSc Award 2020, from the Institute of Scholars (InSc), acknowledging her outstanding contributions to the field.",
  },
];

const civ_patents = [
  {
    id: "1",
    head: "",
    house: "left",
    pdf:"https://drive.google.com/file/d/1XoBHM3ZcFcCX72-rz8Lb49Te5HvjVmqR/view?usp=drive_link",
    content:
      "In 2021, a patent was granted to Dr. C. Vijayaprabha, Mr. A. Ramanan, Dr. K. Aarthi, and Dr. S. R. Sumathy for their innovative method of preparing paver blocks that incorporate copper slag.In 2021, a patent was granted to Dr. C. Vijayaprabha, Mr. A. Ramanan, Dr. K. Aarthi, and Dr. S. R. Sumathy for their innovative method of preparing paver blocks that incorporate copper slag. ",
  },
  {
    id: "2",
    head: "",
    house: "right",
    pdf:"",
    content:
      "Dr. K. Aarthi, Dr. C. Vijayaprabha, Dr. A. Leelavathi, and Dr. S. R. Sumathy published a method for the preparation of unburnt bricks that incorporate sewage sludge and granite sawing waste.",
  },
  {
    id: "3",
    head: "",
    house: "left",
    pdf:"https://drive.google.com/file/d/1yv2MQaWwZolT02GicJ993G2ULaoWlmkT/view?usp=drive_link",
    content:
      "In 2021, Dr. K. Aarthi was granted a patent for Manual-15CEC80, which focuses on the design and drawing of steel and RCC (Reinforced Concrete) structures, incorporating innovative software applications.",
  },
  {
    id: "4",
    head: "",
    house: "right",
    pdf:"https://drive.google.com/file/d/1gTXEGkQLlQr_c11c6bEilSshFh0Kkx-4/view?usp=drive_link",
    content:
      "In 2021, a patent was granted to Dr. C. Vijayaprabha for the creation of the 15CEC76 Concrete and Highway Laboratory Manual.",
  },
];

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
  civ_labs,
  civ_awards,
  civ_patents
};
