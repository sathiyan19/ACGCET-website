const mcover ="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/matcover.webp";
const anbukarasi = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/anbukarasi.webp";
const anitha = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/anitha.webp";
const mahalakshmi = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/mahalakshmi.webp";
const reegan = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/reegan.webp";
const vasanthi = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/vasanthi.webp";
const yamuna = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/yamuna.webp";
const balasundar = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Maths/Mat_faculties/balasundar.webp";

const Maths_dept_fmenu = [
    {
      id: "1",
      path: "/mathsdept",
      link: "About the Department",
      arl: "l",
    },
    {
      id: "2",
      path: "/mathsdept/maths-faculty",
      link: "Faculties",
      arl: "1",
    },
    // {
    //   id: "3",
    //   path: "/Mathsdept/Maths-lab-facility",
    //   link: "Lab Facilities",
    //   arl: "1",
    // },
    {
      id: "4",
      path: "/mathsdept/maths-research",
      link: "Research and Publications",
      arl: "1",
    },
    {
      id: "5",
      path: "/mathsdept/maths-programme",
      link: "Programme Organized",
      arl: "1",
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

  const mat_fac_profiles = [
    {
      id: "1",
      cover: mcover,
      dp: vasanthi,
      name: "Dr.R.Vasanthi",
      Designation: "Associate Professor and Head",
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

export {
    Maths_dept_fmenu,
    mat_vision,
    mat_mission,
    mat_fac_profiles,
    mat_prog,
    mat_res_vas,
    mat_res_ani,
}