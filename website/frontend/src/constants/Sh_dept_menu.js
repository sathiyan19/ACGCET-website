import cover from "../assets/pictures/microchip.webp";
import dpm from "../assets/pictures/boy.webp";
import dpf from "../assets/pictures/girl.webp";

// import gayathri from "../assets/pictures/eng_dept/Gayathri.webp";
// import sachin from "../assets/pictures/eng_dept/Sachin.webp";
// import ecover from "../assets/pictures/eng_dept/eng cover.webp";

// import anbukarasi from "../assets/pictures/maths_dept/anbukarasi.webp";
// import anitha from "../assets/pictures/maths_dept/anitha.webp";
// import mahalakshmi from "../assets/pictures/maths_dept/mahalakshmio.webp";
// import reegan from "../assets/pictures/maths_dept/reegan.webp";
// import vasanthi from "../assets/pictures/maths_dept/vasanthi.webp";
// import yamuna from "../assets/pictures/maths_dept/yamuna.webp";
// import balasundar from "../assets/pictures/nss/s1.webp";
// import mcover from "../assets/pictures/maths_dept/matcover.webp";


// import loki from "../assets/pictures/ncc/loki.webp";
// import rajaperumal from "../assets/pictures/chemi_dept/rajaperuma.webp";
// import thenraj from "../assets/pictures/chemi_dept/thenraj.webp";
// import vijayalakshmi from "../assets/pictures/chemi_dept/vijayalakshmi.webp";
// import ccover from "../assets/pictures/chemi_dept/chemi cover.webp";

// import cynthia from "../assets/pictures/phy_dept/cynthia (1).webp";
// import mariammal from "../assets/pictures/phy_dept/mariammal.webp";
// import parthiban from "../assets/pictures/phy_dept/parthiban.webp";
// import ponmudi from "../assets/pictures/phy_dept/ponmudi.webp";
// import sivaganesh from "../assets/pictures/phy_dept/sivaganesh.webp";
// import venkatrajan from "../assets/pictures/phy_dept/venkatrajan.webp";
// import vijayaragavan from "../assets/pictures/phy_dept/vijayaraghavan.webp";
// import pcover from "../assets/pictures/phy_dept/phy cover.webp";


// import englab from "../assets/pictures/englab.webp";

// english
const ecover = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/English/eng+cover.webp";
const englab = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/English/englab.webp";
const rajina = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/English/rajina.webp"
const rajamani = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/English/rajamani.webp";


// maths
const mcover ="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/matcover.webp";
const anbukarasi = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/anbukarasi.webp";
const anitha = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/anitha.webp";
const mahalakshmi = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/mahalakshmi.webp";
const reegan = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/reegan.webp";
const vasanthi = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/vasanthi.webp";
const yamuna = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/yamuna.webp";
const balasundar = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/balasundar.webp";

// chemistry
const ccover = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Chemistry/Chem_faculties/chemi+cover.webp";
const loki = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Chemistry/Chem_faculties/loki.webp";
const thenraj = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Chemistry/Chem_faculties/thenraj.webp";
const rajaperumal = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Chemistry/Chem_faculties/rajaperuma.webp"; 
const vijayalakshmi = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Chemistry/Chem_faculties/vijayalakshmi.webp";
const lakshmi = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Chemistry/Chem_faculties/lakshmi_narayanan.webp";

// physics
const pcover = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/phy+cover.webp";
const cynthia = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/cynthia.webp";
const mariammal = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/mariammal.webp";
const parthiban = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/parthiban.webp";
const ponmudi = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/ponmudi.webp";
const sivaganesh = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/sivaganesh.webp";
const venkatrajan = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/venkatrajan.webp";
const vijayaragavan = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/vijayaraghavan.webp";


const Sh_dept_fmenu = [
  {
    id: "1",
    path: "/Sciencedept",
    link: "About the Department",
    arl: "l",
  },
  {
    id: "2",
    path: "/Sciencedept/sh-faculty",
    link: "Faculties",
    arl: "1",
  },
  {
    id: "3",
    path: "/Sciencedept/sh-lab-facility",
    link: "Lab Facilities",
    arl: "1",
  },
  {
    id: "4",
    path: "/Sciencedept/Sh-research",
    link: "Research and Publications",
    arl: "1",
  },
  {
    id: "5",
    path: "/Sciencedept/science-programme",
    link: "Programme Organized",
    arl: "1",
  },
];

const eng_vision = {
  id: "1",
  visiondata:
    "Our vision is to create a conducive learning environment for acquisition of the language skills",
};

const eng_mission = [
  {
    id: "1",
    mission:
      "  Our mission is to impart communication skills in English to make the learners employable.",
  },
];

const mat_vision = {
  id: "1",
  visiondata:
    "To excel in the teaching of Mathematics by providing adequate knowledge and skills to the students which enable them to emerge as competent Professionals in Industry and Research",
};

const mat_mission = [
  {
    id: "1",
    mission:
      " To provide high quality education in Mathematics for all the engineering students of the Institution. ",
  },
  {
    id: "2",
    mission: " To develop the analytical and logical skills of the students. ",
  },
  {
    id: "3",
    mission:
      " To enhance  problem-solving ability and creativity among the students. ",
  },
];

const chemi_vision = {
  id: "1",
  visiondata:
    "To be a best centre in Chemistry of the new innovative world. To ensure the implementation of the science of Chemistry in day-to-day life.",
};

const chemi_mission = [
  {
    id: "1",
    mission:
      " To provide advanced education with skilled knowledge to the students to face the global challenges. ",
  },
  {
    id: "2",
    mission:
      "  To motivate the students to acquire technical, critical and innovative thinking skills in Chemistry to create a new world. ",
  },
  {
    id: "3",
    mission:
      "To help learners learn the art of creating an eco-friendly environment. ",
  },
  {
    id: "4",
    mission:
      "To teach learners to interpret life through the science of Chemistry. ",
  },
];

const phy_vision = {
  id: "1",
  visiondata:
    "The vision of the department is to contribute to scientific research and technical education through excellence in performance, innovations in research and teaching, and to serve as a valuable resource for industry, society and the country.",
};

const phy_mission = [
  {
    id: "1",
    mission:
      " Cultivating an interest towards Science and Technology among engineering students by providing excellent teaching-learning environment in Physics. ",
  },
  {
    id: "2",
    mission:
      "  Stimulating the students towards application of concepts and principles of Physics in order to develop Research and Development culture among students. ",
  },
];

const eng_fac_profiles = [
  {
    id: "1",
    cover: ecover,
    dp: rajamani,
    name: "A Rajamani",
    Designation: "Assistant Professor",
    mailid: "rajamani9428@gmail.com",
    pdf: "https://drive.google.com/file/d/1jASz1IzrRwjTpw9zV8A1i61ffdqhKWqv/view?usp=drive_link",
  },
  {
    id: "2",
    cover: ecover,
    dp: rajina,
    name: "Rajina Banu A",
    Designation: "Assistant Professor (AD-HOC)",
    mailid: "a.rajinabanu@gmail.com",
    pdf: "https://drive.google.com/file/d/1mVVV7yFO3o4W4Y73DDliTlyIwCajkb_5/view?usp=drive_link",
  }
];

const mat_fac_profiles = [
  {
    id: "1",
    cover: mcover,
    dp: vasanthi,
    name: "Dr.R.Vasanthi",
    Designation: "Assistant Professor and Head of the Department",
    mailid: "vasanthi2014accet@gmail.com",
    pdf: "https://drive.google.com/file/d/1nlNp_XBns6MCn8QgWf_-OpFsWCSFOwyH/view?usp=drive_link",
  },
  {
    id: "2",
    cover: mcover,
    dp: balasundar,
    name: "S.Balasundar",
    Designation: "Assistant Professor",
    mailid: "balasundaraccet@gmail.com",
    pdf: "https://drive.google.com/file/d/184ZiLnlTI-OCHOXCEle1G-VyNHpKk6Tp/view?usp=drive_link",
  },
  {
    id: "3",
    cover: mcover,
    dp: anitha,
    name: "Dr.T.Anitha",
    Designation: "Assistant Professor",
    mailid: " anitha81t@gmail.com",
    pdf: "https://drive.google.com/file/d/1Z0s9s4-hxgHmLcPcOF5Z-qxqBbsL8vX0/view?usp=drive_link",
  },
  {
    id: "4",
    cover: mcover,
    dp: yamuna,
    name: "S.Yamuna",
    Designation: "Assistant Professor (AD-HOC)",
    mailid: "bassyam1@gmail.com",
    pdf: "https://drive.google.com/file/d/1Xz5W5Srd2jyIF3dnVIKBuKAFEJ37SJyz/view?usp=drive_link",
  },
  {
    id: "5",
    cover: mcover,
    dp: mahalakshmi,
    name: "Ms.K.Mahalakshmi",
    Designation: "Assistant Professor (AD-HOC)",
    mailid: "mahukrishnan95@gmail.com",
    pdf: "https://drive.google.com/file/d/1WUZbuyUhppUU7lsCVjrj9lSOiyLXnKW5/view?usp=drive_link",
  },
  {
    id: "6",
    cover: mcover,
    dp: reegan,
    name: "M.Reegan",
    Designation: "Assistant Professor (AD-HOC)",
    mailid: "amalanstar6@gmail.com",
    pdf: "https://drive.google.com/file/d/1brToTDmWCXdfRDAegGurZg37QS3KBCN6/view?usp=drive_link",
  },
  {
    id: "7",
    cover: mcover,
    dp: anbukarasi,
    name: "V.Anbukkarasi",
    Designation: "Assistant Professor",
    mailid: "anbuvelmath@gmail.com",
    pdf: "https://drive.google.com/file/d/1gx1Ueptma9cwEuUXkG5KTDpebRsOLRme/view?usp=drive_link",
  },
];

const chemi_fac_profiles = [
  {
    id: "1",
    cover: ccover,
    dp: loki,
    name: "K.T.Loganathan",
    Designation: "Assistant Professor and Head of the Department",
    mailid: "logchem80@gmail.com",
    pdf: "https://drive.google.com/file/d/1JujcMUsFo6rWqzcwv2_BQf203WU9M7au/view?usp=drive_link",
  },
  {
    id: "2",
    cover: ccover,
    dp: thenraj,
    name: "Dr.M.Thenraj",
    Designation: "Assistant Professor",
    mailid: "mtr.iisc@gmail.com",
    pdf: "https://drive.google.com/file/d/1r-WWKM3kXRz6NNzafirdn9LoZHHF7CYQ/view?usp=drive_link",
  },
  {
    id: "3",
    cover: ccover,
    dp: rajaperumal,
    name: "M.Rajaperumal",
    Designation: "Assistant Professor",
    mailid: "rajaperumalsjc@gmail.com",
    pdf: "https://drive.google.com/file/d/1jQ0lSaFxDO5pTyFQJT0KGQg7P7Zgx_fu/view?usp=drive_link",
  },
  {
    id: "4",
    cover: ccover,
    dp: vijayalakshmi,
    name: "K.Vijayalakshmi",
    Designation: "Assistant Professor(Adhoc)(On contract basis)",
    mailid: "vijayalakshmi2280@gmail.com",
    pdf: "https://drive.google.com/file/d/1qcVYRilzusVWm9GLx2keEPOQa4lAagnM/view?usp=drive_link",
  },
];

const chemi_sup_profiles = [
  {
    id: "1",
    cover: ccover,
    dp: dpm,
    name: "M.Mahamani",
    Designation: "Lab Assistant",
    mailid: "mahamaniaccet1964@gmail.com",
    pdf: "https://drive.google.com/file/d/1Ha1XHPwh2bBtU9mf4ys3R3fXrXyAIY4s/view?usp=drive_link",
  },
  {
    id: "2",
    cover: ccover,
    dp: lakshmi,
    name: "K.Lakshmi Narayanan",
    Designation: "Cleaner",
    mailid: "klakshminarayanan121@gmail.com",
    pdf: "https://drive.google.com/file/d/19RVQUZejoy4c34KW7IZ7H352yQiRdjmH/view?usp=drive_link",
  },
];

const phy_fac_profiles = [
  {
    id: "1",
    cover: pcover,
    dp: dpf,
    name: "Dr.B.V.Bhuvaneswari",
    Designation: "Professor and Head of the Department",
    mailid: "bhuvanavisaro@gmail.com",
  },
  {
    id: "2",
    cover: pcover,
    dp: ponmudi,
    name: "Dr.S.Ponmudi",
    Designation: "Associate Professor",
    mailid: "ponmudicdm1975@gmail.com",
    pdf: "https://drive.google.com/file/d/19fzoGvFZWPKA9IVXojDH9OpfltnBrW1e/view?usp=drive_link",
  },
  {
    id: "3",
    cover: pcover,
    dp: venkatrajan,
    name: "Mr.S.Venkatrajan",
    Designation: "Assistant Professor",
    mailid: "venkatrajan69@gmail.com",
    pdf: "https://drive.google.com/file/d/17Zc-wpv6oYdvmeG_51RZZOFg_cSoRLkh/view?usp=drive_link",
  },
  {
    id: "4",
    cover: pcover,
    dp: cynthia,
    name: "Dr.S.R.Cynthia",
    Designation: "Assistant Professor",
    mailid: "srcynthiasam@gmail.com",
    pdf: "https://drive.google.com/file/d/1cJ2q5uQbpHfVX-90OACWHu2zFgKEGU3V/view?usp=drive_link",
  },
  {
    id: "5",
    cover: pcover,
    dp: sivaganesh,
    name: "Dr.G.Sivaganesh",
    Designation: "Assistant Professor",
    mailid: "gc_siva@yahoo.com",
    pdf: "https://drive.google.com/file/d/12-Tx1KJ8cDe2MdMgL6sC-wokjaesaXD0/view?usp=drive_link",
  },
  {
    id: "6",
    cover: pcover,
    dp: parthiban,
    name: "Mr.R.Parthiban",
    Designation: "Assistant Professor",
    mailid: "parthirathinam@gmail.com",
    pdf: "https://drive.google.com/file/d/1Nf9NlWmUWNSOYBhnTx-Jz8Mtsp9IXwxr/view?usp=drive_link",
  },
  {
    id: "7",
    cover: pcover,
    dp: vijayaragavan,
    name: "Dr.K.R.Vijayaraghavan",
    Designation: "Assistant Professor ",
    mailid: "vijayanphy@gmail.com",
    pdf: "https://drive.google.com/file/d/1HZ_zBJRcZv3qFNP4rf5mnLZF0Txay91p/view?usp=drive_link",
  },
  {
    id: "8",
    cover: pcover,
    dp: mariammal,
    name: "Dr.R.N.Mariammal",
    Designation: "Assistant Professor ",
    mailid: "marigayathrirn@gmail.com",
    pdf: "https://drive.google.com/file/d/1852qDq-e6pO-R88Ykh4XBNYtGBYwtc-f/view?usp=drive_link",
  },
];
const phy_sup_profiles = [
  {
    id: "1",
    cover: pcover,
    dp: dpm,
    name: "V.Rengarajan",
    Designation: "Lab Assistant",
    mailid: "rajan3151989@gmail.com",
  },
  {
    id: "2",
    cover: pcover,
    dp: dpm,
    name: "R.Arumugam",
    Designation: "Cleaner",
    mailid: "ramarumugam1982ra@gmail.com",
  },
];

const eng_labs = [
  {
    id: "1",
    heading: "English Language Laboratory",
    pic: englab,
    content_1:
      " Our Department has a well established language laboratory that boosts of well furnished equipment and technical gadgets to impart the nuances of communication through the digital platform catering to the needs of the technocrats.",
  },
];

const mat_prog = [
  {
    sno: "1",
    title: "FDP on “Advanced Mathematics in Engineering",
    name: "ACGCET, Karaikudi",
    dur: "14.09.2016 to 20.09.2016",
  },
  {
    sno: "2",
    title: "FDP on “Mathematics for Engineers”",
    name: "ACGCET, Karaikudi",
    dur: "17.12.2018 to 30.12.2018",
  },
  {
    sno: "3",
    title: "	One Day Seminar on ‘Mathematics II for I year B.E students’",
    name: "ACGCET, Karaikudi",
    dur: "04.03.2017",
  },
  {
    sno: "4",
    title:
      "Two days Induction Programme on ‘Human Values’ for I year B.E students",
    name: "ACGCET, Karaikudi",
    dur: "13.02.2018 to 14.02.2018",
  },
];

const chemi_prog = [
  {
    sno: "1",
    name: "TEQIP III sponsored one week induction programme to I year BE students",
    period: "23.10.17 to 29.10.17",
    par: 360,
  },
  {
    sno: "2",
    name: "TEQIP III Sponsored two day workshop on “ESPERANZIA” for I year BE students",
    period: "22.03.18 to 23.03.18",
    par: 360,
  },
  {
    sno: "3",
    name: "TEQIP III sponsored one day FDP on “E-Procurement",
    period: "09.10.18",
    par: 28,
  },
  {
    sno: "4",
    name: "TEQIP III sponsored three week induction programme for I year BE",
    period: "13.08.18 to 02.09.18",
    par: 380,
  },
];

const phy_prog = [
  {
    sno: "1",
    title:
      "DOTE and TNSCTE sponsored FDP on New trends in Nanoscience and Technology",
    name: "ACGCET, Karaikudi",
    dur: "02-07-10 to 11-10-10",
  },
  {
    sno: "2",
    title:
      "TEQIP-II sponsored One week FDP on Advances in Engineering Materials",
    name: "ACGCET, Karaikudi",
    dur: "19-11-12 to 25-11-12",
  },
  {
    sno: "3",
    title:
      "TNSCTE and TEQIP Sponsored Workshop on Emerging trends in Nanoscience and technology",
    name: "ACGCET, Karaikudi",
    dur: "25-11-14",
  },
  {
    sno: "4",
    title:
      "National workshop on theory and practice of X-ray diffraction techniques",
    name: "ACGCET, Karaikudi",
    dur: "25-05-17 to 27-05-17",
  },
  {
    sno: "5",
    title:
      "TEQIP-II Sponsored One week FDP on Recent Developments in Material Science",
    name: "ACGCET, Karaikudi",
    dur: "08-08-16 to 24-07-16",
  },
  {
    sno: "6",
    title:
      "AICTE-QIP sponsored Two week FDP on thin film deposition and characterization",
    name: "ACGCET, Karaikudi",
    dur: "21-11-17 to 04-12-17",
  },
  {
    sno: "7",
    title: "TEQIP-II Sponsored One week Induction programme for I BE (2017-18)",
    name: "ACGCET, Karaikudi",
    dur: "23-10-17 to 29-10-17",
  },
  {
    sno: "8",
    title:
      "TEQIP-III Sponsored Three week Induction Programme for I BE (2018-19)",
    name: "ACGCET, Karaikudi",
    dur: "13-08-18 to 02-09-18",
  },
  {
    sno: "9",
    title:
      "TEQIP-III Sponsored Three week Induction Programme for I BE (2019-20)",
    name: "ACGCET, Karaikudi",
    dur: "01-08-19 to 21-08-19",
  },
  {
    sno: "10",
    title:
      "TEQIP-III Sponsored Two week online Induction programme for I BE (2020-21)",
    name: "ACGCET, Karaikudi",
    dur: "06-11-20 to 19-11-20",
  },
];

const eng_prog = [
  {
    sno: "1",
    title:
      "TEQIP-III Sponsored Workshop on “Developing Communication Skills,” conducted for I Year Students",
    dur: "24.01.2018 to 25.01.2018",
  },
  {
    sno: "2",
    title:
      "	TEQIP-III sponsored Awareness Programme on International Property Rights for staff and students",
    dur: "29.10.18 to 30.10.2018",
  },
  {
    sno: "3",
    title:
      "AICTE sponsored one week FDP on “English for Global Communication: Recent Trends and Approaches,” for Teachers",
    dur: "07.12.2018 to 13.07.2018",
  },
  {
    sno: "4",
    title:
      "TEQIP- III sponsored Training programme for TOEFL for third and final year students",
    dur: "13.10.2018",
  },
  {
    sno: "5",
    title:
      "TEQIP- III sponsored Training programme for TOEFL for third and final year students",
    dur: "09.12.2019 to 03.03.2019 (only on weekends)",
  },
  {
    sno: "6",
    title:
      "Conducted Teacher training programme, sponsored by Government of Tamilnadu and organized by Anna University, Chennai",
    dur: "18.12.2019 – 21.12.2019",
  },
  {
    sno: "7",
    title:
      "TEQIP-III sponsored two-week online Induction Programme for the first year BE students",
    dur: "06.11.2020 to 19.11.2020",
  },
];

const mat_res_vas = [
  {
    id: "1",
    point:
      "R.Vasanthi , K.Subramanian, Vertex covering transversal domination in graphs,   International Journal of Mathematics and Soft Computing, Vol.5, No.2 (2015), 01 – 07",
  },
  {
    id: "2",
    point:
      "R.Vasanthi , K.Subramanian, On vertex covering transversal domination number  of regular graphs, The Scientific World Journal, Vol 2016, Article ID 1029024, 7 pages",
  },
  {
    id: "3",
    point:
      "R.Vasanthi , K.Subramanian, Vertex covering transversal domatic number of graphs   Advances and Applications in Discrete Mathematics, Volume 18, Number 1, 2017,  pp 87-105 ",
  },
  {
    id: "4",
    point:
      "M. Perumalsamy, P. Arul Paul Sudhahar, J. John and R. Vasanthi, Edge Fixed Steiner Number of a Graph,International Journal of Mathematical Analysis Vol. 11, 2017, no. 16, 771 – 785",
  },
  {
    id: "5",
    point:
      "R.Vasanthi , K.Subramanian, On the minimum vertex covering transversal dominating sets in graphs and their classification, Discrete Mathematics, Algorithms and Applications, Vol. 09, No.05, (2017).",
  },
  {
    id: "6",
    point:
      "R.Vasanthi , K.Subramanian, Convex hull of   in graphs, International Journal of Computer Applications, Volume 180 ,No.23,2018",
  },
  {
    id: "7",
    point:
      "R.Vasanthi , M. Perumalsamy, K.Subramanian,  On the Convex hull of  in graphs, Global Journal of Pure and Applied Mathematics,Volume 15 Number 5, 2019 ,pp. 743-754",
  },
  {
    id: "8",
    point:
      "M. Perumalsamy, P. Arul Paul Sudhahar, J. John and R. Vasanthi, The forcing edge fixed Steiner number of a Graph, Journal of Statistics and Management Systems, 22 (1), 2019,1-10",
  },
  {
    id: "9",
    point:
      "M. Perumalsamy, P. Arul Paul Sudhahar, J. Johnand R. Vasanthi,  Edge Fixed edge Steiner Number of a Graph, International Journal of Computational System Engineering, 5,No.4, (2019).",
  },
  {
    id: "10",
    point:
      "M. Perumalsamy, P. Arul Paul Sudhaharand  R.Vasanthi, Extreme Edge Fixed Steiner Graphs, International Journal of Computer Applications, 178,No. 51,2019.",
  },
  {
    id: "11",
    point:
      "M. Perumalsamy , P. Arul Paul Sudhahar and R. Vasanthi,The Upper Edge Fixed Steiner  Number of a Graph,  International Journal of Mathematics and its Applications,6(2–A)(2018), 337–343 ISSN: 2347-1557",
  },
  {
    id: "12",
    point:
      "R. Vasanthi, M. Perumalsamy presented a paper entitled “Edge fixed edge Steiner number of a graph” in the International Conference on‘Mathematical Modeling and Computational Methods in Science and Engineering’ ,held at Alagappa University, Karaikudi during Feb. 20-22, 2017.",
  },
];

const mat_res_ani = [
  {
    id: "1",
    point:
      "T. Anitha and D. Krishnaswamy, Roughness in subtraction semigroups, International journal of Algebra, V6,Number 32, pp. 1569-1578, 2011.",
  },
  {
    id: "2",
    point:
      "T. Anitha and D. Krishnaswamy, (λ,μ)- Fuzzy quasi ideals and (λ,μ )-Fuzzy bi-iedals in ternary semirings, Malaya Journal of Mathematik, V4, No 1, pp 171-177, 2013.",
  },
  {
    id: "3",
    point:
      "T. Anitha and D. Krishnaswamy, (λ,μ)- Fuzzy prime ideals in ternary semirings, Annals of fuzzy mathematics and informatics, V8, No 1, pp 47-54, 2014.",
  },
  {
    id: "4",
    point:
      "T. Anitha and D. Krishnaswamy, Fuzzy prime ideals in ternary semirings, Annals of fuzzy mathematics and informatics, V7, No 5, pp 755-763, 2014.",
  },
  {
    id: "5",
    point:
      "P. Dheena, T.Anitha, On intuitionistic Q-fuzzy sets in ternary semirings, Annals of fuzzy mathematics and informatics, V9, No 6, pp 925-940, 2015.",
  },
  {
    id: "6",
    point:
      "T. Anitha, D. Krisnaswamy, (λ,μ)- Fuzzy ideals in ternary semirings,  Journal of Prime Research in Mathematics, V11, No 818-5495, pp 85-92, 2015.",
  },
  {
    id: "7",
    point:
      "T. Anitha, (λ,μ)- Fuzzy ideals in ordered ternary semigroups, Malaya Journal of Mathematik, s(2),  pp 326-335, 2015.",
  },
  {
    id: "8",
    point:
      "D. Krishnaswamy, J. Jayaraj and T. Anitha, interval-valued intuitionistic fuzzy bi-ideals in ternary semirings, Romanian Journal of Mathematics and Computer science, V6 (1), pp 6-15, 2016.",
  },
  {
    id: "9",
    point:
      "D. Krishnaswamy,  J. Jayaraj and T. Anitha, interval-valued intuitionistic fuzzy k-ideals in ternary semirings, The Journal of Fuzzy mathematics, V24, No 4, pp.941-954, 2016.",
  },
  {
    id: "10",
    point:
      " J. Jayaraj and T. Anitha, interval-valued intuitionistic Q-fuzzy bi-ideals in ternary semirings, Malaya Journal of Mathematik, V1, No S(1), pp 144-150, 2019.",
  },
  {
    id: "11",
    point:
      "T. Anitha , J. Jayaraj and Thirumaran. S,-Fuzzy  ideals in ternary semirings, Malaya Journal of Mathematik, V1, No S(1), pp 120-125, 2019.",
  },
  {
    id: "12",
    point:
      "J. Jayaraj and T. Anitha , Interval valued -Fuzzy  ideals in ternary semirings, Recent trends in Pure and Applied Mathematics, AIP Conf. Proc. 2177, pp 020026-1—020026-7, 2019.",
  },
  {
    id: "13",
    point:
      "Anitha T, Interval-Valued Anti Fuzzy ideals in Ternary Semirings, 4th International Conference on Emerging Trends in Multidisciplinary Research, Feb 23-24, 2019, Shanmuga Industries Arts & Science College,Tiruvannamalai, pp. 9-9. Tiruvannamalai, Arunai International Research Foundation.",
  },
  {
    id: "14",
    point:
      "Anitha T, (∈,∈∨ q)-Fuzzy Prime ideals in Ternary Semirings, Recent Advancements in Pure and Applied Mathematics, Feb 25-25, 2019, Government Arts College(Autonomous),Kumbakonam, pp. 13-13. Kumbakonam, Ramanujan Research Centre,PG & Research Department of Mathematics.",
  },
  {
    id: "15",
    point:
      "Dheena.P, Krishnaswamy, D and T. Anitha, (λ,μ)- Fuzzy ideals in ternary semirings., National                 Conference on Mathematical Modelling 2012(supported by UGC), Feb 23-24, 2012, Department of Mathematics,Annamalai University, pp. 9-9. Chidambaram, Annamalai University.",
  },
  {
    id: "16",
    point:
      "Anitha T, (λ,μ)- Fuzzy ideals in Ordered Ternary Semigroups, National Conference on Applied Mathematics and Computer Simulation-Recent Trends-2015, Oct 7-8, 2015, Tranquebar Bishop Manikam Lutheran College(TELC),Porayar, pp. 36-36. Porayar, PG & Research Department of Mathematics,TELC.",
  },
  {
    id: "17",
    point:
      "Anitha.T , J.Jayaraj and Thirumaran.S, (∈,∈∨ q)-Fuzzy ideals in Ternary Semirings, National Conference on Recent Research Development in Pure and Applied Mathematics, Feb 21-22, 2019, Government Arts College(Autonomous), Karur, pp. 13-13. Karur, PG & Research Department of Mathematics,Karur.",
  },
];

const chemi_research_l = [
  {
    id: "1",
    point:
      "Loganathan K T, Aditya P. Pandey, Uday Kumar Padidela, and Ramakrishnan Sethu, in collaboration with Pothiappan Vairaprakash and Venkatesan S. Thimmakondu*, conducted research on MgC6H2 isomers, which are considered potential candidates for laboratory and radioastronomical studies. Their findings were published in the Journal of Physical Chemistry A in 2020, Volume 124, Issue 37, pages 7518–7525.",
  },
];

const chemi_research_R = [
  {
    id: "1",
    point:
      "M. Rajaperumal provided a commentary on the paper titled 'Microwave synthesis of graphene/magnetite composite electrode material for symmetric supercapacitor with superior rate performance' authored by K. Karthikeyan, D. Kalpana, S. Amaresh, and Y. S. Lee, published in RSC Advances in 2017, with the reference pages 47332-47334.",
  },
  {
    id: "2",
    point:
      "M. Rajaperumal collaborated with K. Sivakumar and C. Sivanesan on research involving the production of biodiesel and emission analysis using Karanja (Pongamia) non-edible vegetable oil. This work was published in the International Research Journal of Engineering and Technology.",
  },
];

const Phy_research_B = [
  {
    id: "1",
    point:
      "R.M. Sakthi Sadhasivam, K. Ramanathan, B.V. Bhuvaneswari and K. Raja, A study on tribological behaviour and analysis of ZnO reinforced AA6061 matrix composites fabricated by stir casting route, Industrial Lubricant and Tribology, Vol.73, Issue 4, 2021.",
  },
  {
    id: "2",
    point:
      "S.Venkatarjan, B.V.Bhuvaneswari,A.Athijayamani,S.Sekar, Effect of addition of areca fine fibers on the mechanical properties of CGF/PF biocomposites,  Elsevier- Vacuum, 166(2019), 6-10,0042-207X.",
  },
  {
    id: "3",
    point:
      "S.Venkatarajan, B.V.Bhuvaneswari, A.Athijayamani, S.Navaneethakrishnan, Mechanical Properties of Roselle fiber/Coconut shell particulate/Vinyl Ester Hybrid composite, Journal of Applied Science and Computations, Vol 5, ISS 10 OCT 2018P.1369 – 1378, 1076-5131.",
  },
];
const Phy_research_P = [
  {
    id: "1",
    point:
      "S Ponmudi, R Sivakumar, C Sanjeeviraja, C Gopalakrishnan and T Okamoto, Development of room temperature sensor based on high quality rhombohedral Al2O3: Cr2O3 (1:1) thin film with bone like morphological feature for ultrasensitive detection of NH3 gas. Journal of Materials Science: Materials in Electronics 31 (2020) 10123–10141.",
  },
  {
    id: "2",
    point:
      "S. Ponmudi,R. Sivakumar, C. Sanjeeviraja, C. Gopalakrishnanand K. Jeyadheepan, Facile fabrication of spinel structured n-type CuAl2O4 thin film with nano-grass like morphology by sputtering technique, Appl. Surf. Sci. 483 (2019) 601-615 [IF: 6.182].",
  },
  {
    id: "3",
    point:
      "S. Ponmudi,R. Sivakumar, C. Sanjeeviraja, C. Gopalakrishnanand K. Jeyadheepan,  Influences of sputtering power and annealing temperature on the structural and optical properties of Al2O3:CuO thin films fabricated by radio frequency magnetron sputtering technique, Journal of Materials Science: Materials in Electronics30 (2019) 18315–18327.",
  },
  {
    id: "4",
    point:
      "S. Ponmudi,R. Sivakumar, C. Sanjeeviraja, C. Gopalakrishnanand K. Jeyadheepan,  Al2O3:Cr2O3:CuO (1:1:1) thin film prepared by radio frequency magnetron sputtering technique: a promising material for high sensitive room temperature ammonia sensor, Mater. Res. Express 6 (2019) 066422.",
  },
  {
    id: "5",
    point:
      "S. Ponmudi,R. Sivakumar, C. Sanjeeviraja, Tuning the morphology of Cr2O3:CuO (50:50) thin films by RF magnetron sputtering for room temperature sensing application, C. Gopalakrishnanand K. Jeyadheepan, Appl. Surf. Sci. 466 (2019) 703-714.",
  },
  {
    id: "6",
    point:
      "S. Ponmudi,R. Sivakumar andC. Sanjeeviraja, Effects of sputtering power and substrate temperature on the optical properties of Al2O3:Cr2O3 thin films, Mater. Today Proc. 9 (2019) 1979-1984.",
  },
];

const Phy_research_V = [
  {
    id: "1",
    point:
      "S.Venkatarajan, A.Athijayamani, B.V.Bhuvaneswari, R.Ganesamoorthy, Analysis of mechanical properties of Agave Sisalana Variegata/banana fiber reinforced vinyl ester composites, AIP Conference Proceedings 2281, 020027(2020), https://doi.org/10.1063/5.0028043.",
  },
  {
    id: "2",
    point:
      "S.Venkatarajan, Athijayamani, An overview on natural cellulose fiber reinforced polymer composites, Elseiver- Materials Today: Proceedings 2214-7853 (2020),",
  },
  {
    id: "3",
    point:
      "S.Venkatarjan, B.V.Bhuvaneswari,A.Athijayamani,S.Sekar, Effect of addition of areca fine fibers on the mechanical properties of CGF/PF biocomposites,  Elsevier- Vacuum, 166(2019), 6-10,0042-207X.",
  },
  {
    id: "4",
    point:
      "S.Venkatarajan, B.V.Bhuvaneswari, A.Athijayamani, S.Navaneethakrishnan, Mechanical Properties of Roselle fiber/Coconut shell particulate/Vinyl Ester Hybrid composite, Journal of Applied Science and Computations, Vol 5, ISS 10 OCT 2018P.1369 – 1378, 1076-5131.",
  },
];

const Phy_research_C = [
  {
    id: "1",
    point:
      "S.R. Cynthia, R. Sivakumar, C. Sanjeeviraja, Ternary CuO:SnO2:ZnO (1:1:1) composite thin film for room temperature gas sensor application, Optik 234 (2021) 166615",
  },
  {
    id: "2",
    point:
      "S.R. Cynthia, R. Sivakumar, C. Sanjeeviraja, C. Gopalakrishnan, K. Jeyadheepan, Sputtering power and annealing effects on the properties of Zn2SnO4–SnO2 composite thin film for pungent smelling gas (NH3) detection, Phys. Status Solidi A 217 (2020) 2000512.",
  },
  {
    id: "3",
    point:
      "S.R. Cynthia, R. Sivakumar, C. Sanjeeviraja, C. Gopalakrishnan, K. Jeyadheepan, Room temperature ammonia gas sensing characteristics of copper oxide-tin oxide composite thin films prepared by radio frequency magnetron sputtering technique, J. Mater. Sci. Mater. Electron 31 (2020) 18018.",
  },
];

const Phy_research_S = [
  {
    id: "1",
    point:
      "Sharmila, BD, Sivaganesh, G, & Arulgnanam, A, 2020, ‘Effect of optimal uncoupling in enhancing synchronization stability in drive-response system’, Europhysics Letters, Vol. 131, No. 6, pp. 60003.",
  },
  {
    id: "2",
    point:
      "Sharmila, BD, Sivaganesh, G, & Arulgnanam, A, 2020, ‘Inducement and enhancement of synchronization stability by transient uncoupling in coupled chaotic systems with inherent frequency parameters’, The European Physical Journal B, Vol. 93, pp. 72.",
  },
  {
    id: "3",
    point:
      "Sivaganesh, G, Arulgnanam, A & Seethalakshmi, AN, 2019, ‘Generalized analytical solutions for secure transmission of signals using a simple communication scheme with numerical and experimental confirmation’, Chinese Journal of Physics, Vol. 62, pp. 72-85.",
  },
  {
    id: "4",
    point:
      "Sivaganesh, G, Arulgnanam, A & Seethalakshmi, AN, 2019, ‘Stability enhancement by induced synchronization using transient uncoupling in certain coupled chaotic systems’, Chaos Solitons & Fractals, Vol. 123, pp. 213-228.",
  },
  {
    id: "5",
    point:
      "Sivaganesh, G, Arulgnanam, A & Seethalakshmi, AN, 2019, ‘A complete analytical study on the dynamics of simple chaotic systems’, Pramana, Vol. 92, pp. 42.",
  },
  {
    id: "6",
    point:
      "Sivaganesh, G, Arulgnanam, A & Seethalakshmi, AN, 2018, ‘Generalized analytical solutions and experimental confirmation of complete synchronization in a class of mutually coupled simple nonlinear electronic circuits’, Chaos Solitons & Fractals, Vol. 123, pp. 294-307.",
  },
  {
    id: "7",
    point:
      "Sivaganesh, G, Arulgnanam, A, Seethalakshmi, AN & Selvaraj, S, 2018, ‘Analytical studies on the synchronization of a network of linearly-coupled simple chaotic systems’, Journal of the Korean Physical Society, Vol. 72, No. 10, pp. 1121-1128.",
  },
  {
    id: "8",
    point:
      "Sivaganesh, G & Arulgnanam, A, 2017, ‘Generalized analytical solutions for certain coupled simple chaotic systems’, Chinese Physics B, Vol. 26, No. 5.",
  },
];

const Phy_research_Vj = [
  {
    id: "1",
    point:
      "K. R. Vijayaraghavan, V. Gokula Lakshmi, P. Prema and M Balasubramaniam, Equatorial, collinear trajectories in the ternary fission of  for various third fragments , Journal of Physics G: Nuclear and Particle Physics 46, 025103 (2019).",
  },
];

const Phy_research_M = [
  {
    id: "1",
    point:
      " R.N. Mariammal and K. Ramachandran,  Increasing the reactive sites of ZnO nanoparticles by Li doping for ethanol sensingMaterials Research Express, 6 015024 (2019).",
  },
  {
    id: "2",
    point:
      "R.N. Mariammal and K. Ramachandran, Study on gas sensing mechanism in p-CuO/n-ZnO heterojunction sensor, Materials Research Bulletin, 100 420–428 (2018).",
  },
  {
    id: "3",
    point:
      " R. N. Mariammal, N. Rajamanickam, B. Renganathan, D. Sastikumar, and K. Ramachandran, Effect of Co on the magnetic and gas sensing properties of SnO2 nanoparticles, Journal of Applied Physics,122 124504 (2017).",
  },
];

export {
  Sh_dept_fmenu,
  eng_mission,
  eng_vision,
  mat_vision,
  mat_mission,
  chemi_vision,
  chemi_mission,
  phy_vision,
  phy_mission,
  eng_fac_profiles,
  mat_fac_profiles,
  chemi_fac_profiles,
  chemi_sup_profiles,
  phy_fac_profiles,
  phy_sup_profiles,
  eng_labs,
  mat_prog,
  phy_prog,
  chemi_prog,
  eng_prog,
  mat_res_vas,
  mat_res_ani,
  chemi_research_l,
  chemi_research_R,
  Phy_research_B,
  Phy_research_P,
  Phy_research_V,
  Phy_research_C,
  Phy_research_S,
  Phy_research_Vj,
  Phy_research_M,
};
