import dpm from "../assets/pictures/boy.webp";
import arugumam from "../assets/pictures/R.Arugumugam.webp";
import rengarajan from "../assets/pictures/V.Rengarajan.webp";

const pcover = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/phy+cover.webp";
const cynthia = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/cynthia.webp";
const mariammal = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/mariammal.webp";
const parthiban = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/parthiban.webp";
const ponmudi = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/ponmudi.webp";
const sivaganesh = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/sivaganesh.webp";
const venkatrajan = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/venkatrajan.webp";
const vijayaragavan = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/vijayaraghavan.webp";
const buvaneswari = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/Dr.+BVB+photo.webp";

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

const Physics_dept_fmenu = [
    {
      id: "1",
      path: "/physicsdept",
      link: "About the Department",
      arl: "l",
    },
    {
      id: "2",
      path: "/physicsdept/physics-faculty",
      link: "Faculties",
      arl: "1",
    },
    {
      id: "3",
      path: "/physicsdept/physics-lab-facility",
      link: "Lab Facilities",
      arl: "1",
    },
    {
      id: "4",
      path: "/physicsdept/physics-research",
      link: "Research and Publications",
      arl: "1",
    },
    {
      id: "5",
      path: "/Physicsdept/Physics-programme",
      link: "Programme Organized",
      arl: "1",
    },
    {
      id: "6",
      path: "/Physicsdept/physics-former-prof",
      link: "Former Professors",
      arl: "1",
    },
  ];
  const phy_fac_profiles = [
    
    {
      id: "2",
      cover: pcover,
      dp: ponmudi,
      name: "Dr.S.Ponmudi",
      Designation: "Associate Professor and Head of the Department",
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
      dp: rengarajan,
      name: "V.Rengarajan",
      Designation: "Lab Assistant",
      mailid: "rajan3151989@gmail.com",
      pdf: "https://drive.google.com/file/d/1zKVO3wJEmVQSDgDt0P165Z3NaTwApE09/view?usp=sharing",
    },
    {
      id: "2",
      cover: pcover,
      dp: arugumam,
      name: "R.Arumugam",
      Designation: "Cleaner",
      mailid: "ramarumugam1982ra@gmail.com",
      pdf: "https://drive.google.com/file/d/1z_64hAN2QqfJsxfg3szhG3kCxBW5Gjis/view?usp=sharing",
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

const phy_former_prof = [
  {
    id: "1",
    cover: pcover,
    dp: buvaneswari,
    name: "Dr.B.V.Bhuvaneswari",
    Designation: "Former Head of the Department",
    mailid: "bhuvanavisaro@gmail.com",
    pdf: "https://drive.google.com/file/d/13n9By0mhIdayRoKWo-ocspLa6s2W5GCi/view?usp=drive_link",
  },
];


  export {
    phy_vision,
    phy_mission,
    Physics_dept_fmenu,
    phy_fac_profiles,
    phy_sup_profiles,
    Phy_research_B,
    Phy_research_P,
    Phy_research_V,
    Phy_research_C,
    Phy_research_S,
    Phy_research_Vj,
    Phy_research_M,
    phy_prog,
    phy_former_prof
  }