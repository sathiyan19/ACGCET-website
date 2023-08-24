import dp from '../assets/pictures/dp.jpg'
import cover from '../assets/pictures/cover pic.jpg'

const ece_dept_menu = [
  {
    id: "1",
    path: "/ecedept",
    link: "About the Department",
  },
  {
    id: "2",
    path: "/ecedept/ece-peo",
    link: "Programme Objectives & Outcomes",
  },
  {
    id: "3",
    path: "/ecedept/ece-faculties",
    link: "Faculties",
  },
  {
    id: "4",
    path: "#",
    link: "Lab Facilities",
  },
  {
    id: "5",
    path: "#",
    link: "Department Library",
  },
  {
    id: "6",
    path: "#",
    link: "Research and Publications",
  },
  {
    id: "7",
    path: "#",
    link: "Department Events",
  },
  {
    id: "8",
    path: "#",
    link: "Placement Activites",
  },
  {
    id: "9",
    path: "#",
    link: "Elite Rankers",
  },
  {
    id: "10",
    path: "#",
    link: "Student Activities",
  },
  {
    id: "11",
    path: "#",
    link: "Best Projects",
  },
];



const ece_fac_proflies = [
  {
    id: "1",
    cover: cover,
    dp: dp,
    name: "Arjun",
    Designation: "Designation",
    mailid: "emailid@gmail.com",
    pdf:"#"
  },
];
const ece_sup_proflies = [
  {
    id: "1",
    cover: cover,
    dp: dp,
    name: "Arjun",
    Designation: "Designation",
    mailid: "emailid@gmail.com",
    pdf:"#"
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
      "ECE Graduates will Analyze, Synthesize, design and provide an engineering solution in the areas of VLSI, Image Processing and Embedded Systems.",
  },
  {
    id: "2",
    point:
      "ECE Graduates will Analyze, design and provide an engineering solution in the areas of RF and Microwaves, Wireless and Optical Communication.",
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
    period:"4 Years",
    top_head:"M.E.",
    program: "Optical Communication",
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

export {
  ece_dept_menu,
  ece_fac_proflies,
  ece_sup_proflies,
  ece_vision,
  ece_mission,
  ece_peo,
  ece_outcomes,
  ece_progs
};
