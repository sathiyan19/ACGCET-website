import dp from '../assets/pictures/dp.jpg'
import cover from '../assets/pictures/microchip.webp'


import somasundaram from '../assets/pictures/ece_faculties/Somasundaram.webp'



const Sh_dept_fmenu = [
    {
        id:'1',
        path:'Sciencedept',
        link:'About the Department'
    },
    {
        id:'2',
        path:'Sciencedept/Sh-faculty',
        link:'Faculties'
    },
    {
        id:'3',
        path:'Sciencedept/Sh_lab-facilities',
        link:'Lab Facilities'
    },
    {
        id:'4',
        path:'Sciencedept/Sh_research',
        link:'Research and Publications'
    },
    {
        id:'5',
        path:'Sciencedept/Sh_programme-organized',
        link:'Programme Organized'
    },
]

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
    },]

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
            mission:
            " To develop the analytical and logical skills of the students. ",
                },
                {
                    id: "3",
                    mission:
                    " To enhance  problem-solving ability and creativity among the students. ",
                        },]

 const chemi_vision = [{
        id: "1",
        visiondata:
         "To be a best centre in Chemistry of the new innovative world.",
                              },
        {
            id:"2",
            visiondata:"To ensure the implementation of the science of Chemistry in day-to-day life."
        }]

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
                                        },]

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
                            ]

const eng_fac_profiles = [
    {
      id: "1",
      cover: cover,
      dp: dp,
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
]

export {Sh_dept_fmenu,
eng_mission,
eng_vision,
mat_vision,
mat_mission,
chemi_vision,
chemi_mission,
phy_vision,
phy_mission };