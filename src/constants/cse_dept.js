import dp from "../assets/pictures/dp.jpg";
import dpm from '../assets/pictures/boy.webp'
import dpf from '../assets/pictures/girl.webp'
import cover from "../assets/pictures/cse_banner.webp";

import swayam from '../assets/pictures/swayam.webp'
import robotics from '../assets/pictures/robotics.webp'
import placement from '../assets/pictures/placement.webp'

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
  designation:"Head of the Department, ECE",
  pic:dpf,
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
    dp: dpf,
    name: "S.Syed Suhaila",
    Designation: "Assistant professor",
    mailid: "syedsuhaila63@gmail.com",
    pdf: "https://drive.google.com/file/d/1bhp8EW2O_4bXHvchHsbfsE-ylujZnDfe/view?usp=drive_link",
  },
  {
    id: "2",
    cover: cover,
    dp: dpm,
    name: "Dr.K.Sundara Krishnan",
    Designation: "Assistant professor",
    mailid: "sundarakrishnank@gmail.com",
    pdf: "https://drive.google.com/file/d/1Q8LmN5KQyHpSfPGzqJxVSleJzQg_hHPj/view?usp=drive_link",
  },
  {
    id: "3",
    cover: cover,
    dp: dpf,
    name: "Anbu Selvi P",
    Designation: "Assistant professor",
    mailid: "anbuselvi17@gmail.com",
    pdf: "https://drive.google.com/file/d/19_plkpq1IGaxhevM7d1QUyVZocjaPcoe/view?usp=drive_link",
  },
  {
    id: "4",
    cover: cover,
    dp: dpf,
    name: "G. Karthika",
    Designation: "Assistant professor",
    mailid: "kartiga.g@gmail.com",
    pdf: "https://drive.google.com/file/d/1SRHrupLxqjI6IzVpVVEzmAS8MpTUJp6I/view?usp=drive_link",
  },
  {
    id: "5",
    cover: cover,
    dp: dpf,
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
    dp: dpm,
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
    dp: dpm,
    name: "S.Rajendran",
    Designation: "Cleaner",
    mailid: "bhuvanagirirajendran@gmail.com",
    pdf: "https://drive.google.com/file/d/160eR2fkBXQKrWneCnac3Tjfz0nnnS34i/view?usp=drive_link",
  },
  {
    id: "4",
    cover: cover,
    dp: dpm,
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

const cse_labs=[
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
  cse_labs,
  cse_dept_events,
  cse_hod
};
