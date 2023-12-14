import dp from "../assets/pictures/dp.jpg";
import dpm from '../assets/pictures/boy.webp'
import cover from "../assets/pictures/mech_banner.webp";

import swayam from '../assets/pictures/swayam.webp'
import robotics from '../assets/pictures/robotics.webp'
import placement from '../assets/pictures/placement.webp'
import baja from '../assets/pictures/mechdept/mech_event/BAJA-2014.webp'
import supra from '../assets/pictures/mechdept/mech_event/SUPRA -2014.webp'
import efficycle from '../assets/pictures/mechdept/mech_event/efficycle.webp'
import efficar from '../assets/pictures/mechdept/mech_event/EFFICAR-2015.webp'
import tractor from '../assets/pictures/mechdept/mech_event/tractor-2018.webp'
import solar15 from '../assets/pictures/mechdept/mech_event/solar-2015.webp'
import solar18 from '../assets/pictures/mechdept/mech_event/solar-2018.webp'
import gokart from '../assets/pictures/mechdept/mech_event/GO Kart-2016.webp'
import bicycle from '../assets/pictures/mechdept/mech_event/bicycle.webp'
import Rakshana_21 from '../assets/pictures/mechdept/mech_rankers/Rakshana_21.webp'
import pooja_23 from '../assets/pictures/mechdept/mech_rankers/pooja_23.webp'
import akhilesh_22 from '../assets/pictures/mechdept/mech_rankers/akhilesh_22.webp'
import santhosh_23 from '../assets/pictures/mechdept/mech_rankers/santhosh_23.webp'
import satheysh_22 from '../assets/pictures/mechdept/mech_rankers/satheysh_22.webp'


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
  {
    id: "13",
    path: "/mechdept/mech-rankers",
    link: "Elite Rankers",
    arl: 'l',
  }
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
const mech_rankers =[
  {
    head: "2019-2023 Batch",
    rankers:[
      {
        id: "1",
          cover:cover,
          dp: pooja_23,
          name: "Pooja Sri V",
          Designation: "First rank holder",
          mailid: "1912068",
        },
        {
          id: "2",
            cover:cover,
            dp: santhosh_23,
            name: "Santhosh Kumar S",
            Designation: "Second rank holder",
            mailid: "1912084",
          },
        ]
  },
  {
    head:"2018-2022 Batch",
    rankers:[
      {
        
          id: "3",
            cover:cover,
            dp:satheysh_22,
            name: "Satheysh Paval P",
            Designation: "First rank holder",
            mailid: "1912068",
          
      },
      
        {
          id: "4",
            cover:cover,
            dp: akhilesh_22,
            name: "Akhilesh RN",
            Designation: "Second rank holder",
            mailid: "1812301",
          },
  
    ]
  },
 {
  head: "2017-2021 Batch",
  rankers:[
    {
      id: "5",
        cover:cover,
        dp: Rakshana_21,
        name: "Rakshana A",
        Designation: "First rank holder",
        mailid: "1712078",
      },
      {
        id: "6",
        cover:cover,
        dp: dpm,
        name: "Vishnubabu",
        Designation: "Second rank holder",
        mailid: "1712111",
      },
      
    ]

    }
  ]




const mech_fac_profiles = [
  {
    id: "1",
    cover: cover,
    dp: dp,
    name: "Dr.K.RAMANATHAN",
    Designation: "professor(CAS)",
    mailid: "ramsananthi@gmail.com",
    pdf: "https://drive.google.com/file/d/1RRcE1m8PZoikgh1IO1c7rJey75LKnRSm/view?usp=sharing",

  },
  
  

];
const mech_sup_profiles = [
  {
    id: "2",
    cover: cover,
    dp: dp,
    name: "",
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
  'heading':'BAJA ',
  'sub-head':"2014-2015 BAJA SAE event by SAE, Feb 12-15, Pithambur, Indore, 25 participants.",
  'pic':baja,
  'content_1':"In the academic year 2014-2015, a notable event known as BAJA SAE took place under the auspices of the Society of Automotive Engineers (SAE). The event unfolded from February 12th to 15th, 2015, at the challenging terrain of Pithambur, located in the vicinity of the National Automotive Testing and R&D Infrastructure Project (NATRiP) in Indore.",
  'content_2':" BAJA SAE, renowned for its off-road vehicle design and fabrication challenges, drew the participation of 25 enthusiastic teams. This gathering of automotive enthusiasts and engineering minds showcased innovation, technical expertise, and a passion for pushing the boundaries of vehicular design and performance. The event not only provided a platform for friendly competition but also fostered knowledge exchange and collaboration within the automotive engineering community."

},
  {
      'id':'2',
      'heading':"SUPRA",
      'sub-head':"SAE's 2015 SUPRA event: July 16-19 at MRF Motors Racetrack, Chennai, 25 participants.",
      'pic':supra,
      'content_1':"In July 2015, the MRF Motors Racetrack in Chennai played host to a notable event organized under the banner of SUPRA SAE. Taking place from July 16th to 19th, the event brought together 25 participating societies. With a focus likely centered around automotive engineering and innovation, this gathering provided a platform for enthusiasts and professionals to showcase their skills.",
      'content_2':" The competitive yet collaborative spirit prevailed throughout the event, fostering knowledge exchange and friendly interactions among the participants. The choice of the MRF Motors Racetrack as the venue underscored the significance of the automotive industry in the discussions and activities that unfolded during those days. Overall, the event contributed to the advancement and recognition of the participating societies in the realm of engineering and automotive expertise."
  },
  {
      'id':'3',
      'heading':'EFFICYCLE 16',
      'sub-head':'EFFICYCLE 2015-2016 by SAE at LPU, Punjab, had 10 participants.',
      'pic':efficycle,
      'content_1':"During the academic year 2015-2016, an event of significance transpired in the form of EFFICYCLE organized by the Society of Automotive Engineers (SAE). Held from October 16th to 18th, 2015, this event took place at Lovely Professional University (LPU) in Jalandhar, Punjab. The occasion drew the participation of 10 teams, showcasing their prowess in the field, likely emphasizing efficiency and innovation in the realm of cycling.",
      'content_2':"The event at LPU provided a conducive platform for participants to exchange knowledge, compete in a friendly atmosphere, and contribute to the broader discourse on advancements in sustainable transportation. The relatively modest number of participants suggests a more intimate setting, allowing for focused interactions and a deeper engagement with the shared goals of the participants and the overarching objectives of EFFICYCLE."
    },
    {
      'id':'4',
      'heading':'EFFICARS',
      'sub-head':'EFFICARS 2015-2016: UIET Chandigarh event, Jan 22-24, 2016, 10 participants.',
      'pic':efficar,
      'content_1':"In the academic year 2015-2016, an impactful event took place in the form of EFFICARS at the University Institute of Engineering and Technology (UIET) in Chandigarh. This event, held from January 22nd to 24th, 2016, brought together a total of 10 participants from UIET, Chandigarh. The gathering served as a platform for students to showcase their skills and engage in meaningful discussions, fostering a collaborative spirit within the academic community.",
      'content_2':" Such events play a crucial role in enhancing the overall learning experience, providing students with opportunities to apply their knowledge and interact with peers in a practical setting. The success of EFFICARS at UIET, Chandigarh, during this period reflects the enthusiasm and commitment of both organizers and participants towards promoting academic excellence and innovation."
    },
    {
      'id':'5',
      'heading':'EFFICYCLE 17',
      'sub-head':'EFFICYCLE 2016-2017 by SAE at LPU, Punjab, had 10 participants.',
      'pic':efficycle,
      'content_1':"In the academic year 2016-2017, a notable event named EFFICYCLE took place under the auspices of the Society of Automotive Engineers (SAE). The event unfolded from October 12 to 16, 2016, at Lovely Professional University (LPU) in Jalandhar, Punjab. EFFICYCLE, which attracted a considerable participation of 10 enthusiastic teams, showcased the innovative spirit and engineering prowess of students who engaged in a variety of challenges and competitions. ",
      'content_2':"This gathering not only provided a platform for the exchange of ideas and technical knowledge but also fostered a sense of camaraderie among participants, contributing to the overall growth and development of the automotive engineering community."
    },
    {
      'id':'6',
      'heading':'TRACTOR DESIGN COMPETITION',
      'sub-head':"SAE's 2017-18 Tractor Design at SRM, Chennai, had 25 participants.",
      'pic':tractor,
      'content_1':"In the academic year 2017-18, a notable event took place in the form of the Tractor Design Competition organized by the Society of Automotive Engineers (SAE). The competition unfolded from June 21 to June 26, 2018, at SRM University in Chennai. This gathering attracted a commendable number of participants, with a total of 25 individuals engaging in the event.",
      'content_2':"The competition, focused on designing innovative and efficient tractors, provided a platform for students to showcase their engineering skills and knowledge in the realm of automotive technology. Such events play a pivotal role in fostering a spirit of creativity and healthy competition within academic and professional circles, contributing to the advancement of technology and engineering prowess."
    },
    {
      'id':'7',
      'heading':'BICYCLE',
      'sub-head':"SAE's 8th Bicycle event in 2018-19 at Kongu Engg College (Aug 3-4, 2019) had 5 participants.", 
      'pic':bicycle,
      'content_1':"In the academic year 2018-19, an exciting event unfolded as the Bicycle competition took center stage under the auspices of the Society of Automotive Engineers (SAE). The event, held on August 3-4, 2019, brought together enthusiasts and participants at Kongu Engineering College in Perundurai. With a total of five participants, the competition showcased the passion and innovation of individuals dedicated to advancing the field of bicycle engineering.",
      'content_2':"The venue, Kongu Engineering College, served as the perfect backdrop for the event, providing a platform for participants to demonstrate their skills and knowledge in the realm of bicycle technology. The event not only fostered healthy competition but also contributed to the exchange of ideas and the promotion of advancements in bicycle engineering. Overall, the 2018-19 Bicycle competition organized by SAE at Kongu Engineering College stood as a testament to the vibrancy and dedication within the community, with five participants making their mark in this dynamic and intellectually stimulating event."
    },
    {
      'id':'8',
      'heading':'ELECTRIC SOLAR VEHICLE 15',
      'sub-head':"ISIE's 2015 Electric Solar Vehicle event at MM College, Haryana, featured 25 participants.",
      'pic':solar15,
      'content_1':"In the academic year 2014-2015, a significant event unfolded in the realm of innovative engineering—the Electric Solar Vehicle competition organized by the International Society of Innovation and Entrepreneurship (ISIE). This groundbreaking event took place from March 17 to 19, 2015, at MM College in Haryana, India. The competition, centered around the development and showcase of electric solar vehicles, attracted considerable attention and participation from 25 enthusiastic teams.",
      'content_2':"Engineers, designers, and innovators converged at this event to not only demonstrate their prowess in harnessing solar energy for vehicular propulsion but also to exchange ideas and foster a spirit of innovation within the scientific community. The MM College venue served as a hub for intellectual exchange and spirited competition, marking this event as a memorable chapter in the pursuit of sustainable and eco-friendly transportation solutions."
    },

    {
      'id':'9',
      'heading':'ELECTRIC SOLAR VEHICLE 18',
      'sub-head':"ISIE's 9th Electric Vehicle event (2018-19) at Chandigarh University with 5 participants.",   
      'pic':solar18,
      'content_1':"During the academic year 2018-19, the International Society of Innovation and Entrepreneurship (ISIE) continued to propel advancements in sustainable engineering through its Electric Solar Vehicle competition. This particular event unfolded from March 25 to 31, 2019, with the vibrant city of Chandigarh hosting the innovative showcase at Chandigarh University. A total of 5 dedicated teams participated in this edition of the competition, bringing forth their cutting-edge electric solar vehicle designs and technological innovations.",
      'content_2':"The event not only served as a platform for friendly competition but also fostered an environment for collaboration and the exchange of ideas among like-minded individuals. Chandigarh University, with its conducive atmosphere for academic discourse, played a pivotal role in making this event a success, contributing to the ongoing dialogue on sustainable transportation solutions and the integration of solar energy into vehicular systems."
    },
    {
      'id':'10',
      'heading':'GOKART 16',
      'sub-head':"ISNEE's 2015-2016 GOKART event: Coimbatore, Feb 12-15, 25 participants.",
      'pic':gokart,
      'content_1':"In the year 2015-2016, an exhilarating event unfolded in the world of motorsports as the Indian Society of New Era Engineers (ISNEE) organized a thrilling Gokart competition. This adrenaline-pumping event took place from February 12 to 15, 2016, at the renowned Kari Motors Speedway in Coimbatore. The event attracted a significant participation of 25 enthusiastic individuals, all geared up to showcase their skills and passion for Gokart racing.",
      'content_2':"Against the backdrop of the high-speed tracks and the competitive spirit in the air, participants brought their A-game to this prestigious event, making it a memorable experience for both the racers and the spectators alike. The Gokart event organized by ISNEE in 2015-2016 undoubtedly left an indelible mark on the motorsports landscape, celebrating the thrill of speed, skill, and the pursuit of victory."
    },
    {
      'id':'11',
      'heading':'GOKART 23',
      'sub-head':"ISNEE's 2023-2024 GOKART event: Coimbatore, Oct 29- Nov 2nd 2023,25 participants.",
      'pic':gokart,
      'content_1':"In the upcoming year of 2023-2024, the Indian Society of New Era Engineers (ISNEE) is set to ignite the racing scene once again with a thrilling Gokart event. Scheduled to take place from October 29 to November 2, 2023, this high-octane competition will unfold at the renowned Kari Motors Speedway in Coimbatore, maintaining the tradition of hosting these adrenaline-fueled races in a premier racing location. Anticipation is building as 25 participants gear up to engage in intense competition, showcasing their driving prowess and passion for Gokart racing.",
      'content_2':"Against the backdrop of the challenging tracks and the electric atmosphere of competition, the event promises to be a riveting experience for both participants and spectators. As the countdown begins for the Gokart event organized by ISNEE in the 2023-2024 season, the stage is set for another thrilling chapter in the world of motorsports, where speed, skill, and the pursuit of victory converge on the tracks of Kari Motors Speedway."
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
  mech_dept_events,
  mech_rankers
};
