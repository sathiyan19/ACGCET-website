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
    path: "/mechdept/mech-phd",
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
    path: "/mechdept/mech-library",
    link: "Department Library",
    arl: "l",
  },
  {
    id:"12",
    path:"/mechdept/mech-org",
    link:"Event organised",
    arl:"1",
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

const mech_lib_profiles=[
  { 'id' : '1',
     'program':'Library Books',
     'pdf':'https://drive.google.com/file/d/1oOjtrfWazkyXW-dKWXSIXdOmjcx3PTBZ/view?usp=sharing'
 },
 ]
 const mech_research_phd=[
   {
 'sno' : "1",
 'scholar':"U.Natarajan",
 'supervisor' :"Dr.V.M.Periyasamy",
 'month and year':"Aug-2006"
   },
   {
     'sno' : "2",
     'scholar':"P.Seenikannan",
     'supervisor' :"Dr.V.M.Periyasamy",
     'month and year':"Dec-2008"
       },
       {
         'sno' : "3",
         'scholar':"K.Ramanathan ",
         'supervisor' :"Dr.V.M.Periyasamy",
         'month and year':"June-2009"
           },
           {
             'sno' : "4",
             'scholar':"G.Rajagopal ",
             'supervisor' :"Dr.V.M.Periyasamy",
             'month and year':"June-2009"
               },
               {
                 'sno' : "5",
                 'scholar':"A.Elango",
                 'supervisor' :"Dr.V.M.Periyasamy",
                 'month and year':"June-2009"
                   },
                   {
                     'sno' : "6",
                     'scholar':"K.Subramaniyan",
                     'supervisor' :"Dr.V.M.Periyasamy",
                     'month and year':"Feb-2010"
                       },
                       {
                         'sno' : "7",
                         'scholar':"S.Jayabal",
                         'supervisor' :"Dr.V.M.Periyasamy",
                         'month and year':"June-2011"
                           },
                           {
                             'sno' : "8",
                             'scholar':"S.Sathiyamurthy",
                             'supervisor' :"Dr.A.SyedAbuThaheer"
 
                             ,
                             'month and year':"Mar-2013"
                               },
                               {
                                 'sno' : "9",
                                 'scholar':"K.Velmanirajan"
 
                                 ,
                                 'supervisor' :"Dr.A.SyedAbuThaheer"
 
                                 ,
                                 'month and year':"Mar-2013"
                                   },
                                   {
                                     'sno' : "10",
                                     'scholar':"A.Kumaravadivel"
 
                                     ,
                                     'supervisor' :"Dr.U.Natarajan"
 
                                     ,
                                     'month and year':"May-2013"
                                       },
                                       {
                                         'sno' : "11",
                                         'scholar':"G.Senthilkumar",
                                         'supervisor' :"Dr.U.Natarajan"
 
                                         ,
                                         'month and year':"June-2013"
                                           },
                                          {
                                             'sno' : "12",
                                             'scholar':"S.Palani"
 
                                             ,
                                             'supervisor' :"Dr.U.Natarajan"
 
                                             ,
                                             'month and year':"Sep-2013"
 
                                             
                                               },
                                               {
                                                 'sno' : "13",
                                                 'scholar':"P.R.Periyannan"
 
                                                 ,
                                                 'supervisor' :"Dr.U.Natarajan",
                                                 'month and year':"Oct-2013"
 
                                                 
                                                   },
                                                   {
                                                     'sno' : "14",
                                                     'scholar':"P.Narasimman"
 
                                                     ,
                                                     'supervisor' :"Dr.V.M.Periyasamy",
                                                     'month and year':"Nov-2013"
                                                       },
                                                       {
                                                         'sno' : "15",
                                                         'scholar':"K.Karrupasamy"
 
                                                         ,
                                                         'supervisor' :"Dr.A.SyedAbuThaheer",
                                                         'month and year':"Nov-2014"
                                                           },
                                                           {
                                                             'sno' : "16",
                                                             'scholar':"S.Karthikeyan"
 
                                                             ,
                                                             'supervisor' :"Dr.A.Elango",
                                                             'month and year':"Nov-2015"
                                                               },
                                                               {
                                                                 'sno' : "17",
                                                                 'scholar':"M.Balasubramanian"
 
                                                                 ,
                                                                 'supervisor' :"Dr.K.Ramanathan",
                                                                 'month and year':"Dec-2015"
 
                                                                 
                                                                   },
                                                                   {
                                                                     'sno' : "18",
                                                                     'scholar':"S.Kalyanasundaram"
 
                                                                     ,
                                                                     'supervisor' :"Dr.S.Jayabal"
 
                                                                     ,
                                                                     'month and year':"Dec-2015"
 
                                                                     
                                                                       },
                                                                       {
                                                                         'sno' : "19",
                                                                         'scholar':"S.Rajamuneeswaran"
 
                                                                         ,
                                                                         'supervisor' :"Dr.S.Jayabal",
                                                                         'month and year':"June-2016"
 
                                                                         
                                                                           },
                                                                           {
                                                                             'sno' : "20",
                                                                             'scholar':"S.Chockalingam",
                                                                             'supervisor' :"Dr.U.Natarajan"
 
                                                                             ,
                                                                             'month and year':"Sep-2016"
                                                                               },
                                                                               {
                                                                                 'sno' : "21",
                                                                                 'scholar':" R.Ram Prasath"
 
                                                                                 ,
                                                                                 'supervisor' :" Dr.S.Jayabal"
 
                                                                                 ,
                                                                                 'month and year':" Jan-2017"
 
                                                                                 
                                                                                   },
                                                                                   {
                                                                                     'sno' : "22",
                                                                                     'scholar':"  R.Prithivirajan",
                                                                                     'supervisor' :"  Dr.S.Jayabal"
 
                                                                                     ,
                                                                                     'month and year':" Mar-2017"
 
                                                                                     
                                                                                       },
                                                                                       {
                                                                                         'sno' : "23",
                                                                                         'scholar':"A.P.Mohanraj",
                                                                                         'supervisor' :" Dr.A.Elango"
 
                                                                                         ,
                                                                                         'month and year':" Mar-2017"
 
                                                                                         
                                                                                           },
                                                                                           {
                                                                                             'sno' : "24",
                                                                                             'scholar':"K.Kalaiselvan"
 
                                                                                             ,
                                                                                             'supervisor' :"Dr.A.Elango"
 
                                                                                             ,
                                                                                             'month and year':" Apr-2017"
 
                                                                                             
                                                                                               },
                                                                                               {
                                                                                                 'sno' : "25",
                                                                                                 'scholar':"G.Bharathiraja",
                                                                                                 'supervisor' :"Dr.S.Jayabal"
 
                                                                                                 ,
                                                                                                 'month and year':" May-2017"
 
                                                                                                 
                                                                                                   },
                                                                                                   {
                                                                                                     'sno' : "26",
                                                                                                     'scholar':"K.Vignesh"
 
                                                                                                     ,
                                                                                                     'supervisor' :"Dr.U.Natarajan",
                                                                                                     'month and year':"Jul-2017"
 
                                                                                                     
                                                                                                       },
                                                                                                       {
                                                                                                         'sno' : "27",
                                                                                                         'scholar':"R.Joseph Ravi Selvan",
                                                                                                         'supervisor' :"Dr.K.Ramanathan",
                                                                                                         'month and year':"Sep-2017"
 
                                                                                                         
                                                                                                           },
                                                                                                           {
                                                                                                             'sno' : "28",
                                                                                                             'scholar':"Louie Frango.T"
 
                                                                                                             ,
                                                                                                             'supervisor' :"Dr.K.Ramanathan"
 
                                                                                                             ,
                                                                                                             'month and year':"Nov-2017"
 
                                                                                                             
                                                                                                               },
                                                                                                               {
                                                                                                                 'sno' : "29",
                                                                                                                 'scholar':"Hyacinth Suganthi X",
                                                                                                                 'supervisor' :"Dr.U.Natarajan",
                                                                                                                 'month and year':"Nov-2017"
 
                                                                                                                 
                                                                                                                   },
                                                                                                                   {
                                                                                                                     'sno' : "30",
                                                                                                                     'scholar':"Marlon Jones Lovis",
                                                                                                                     'supervisor' :"Dr.R.Malayalamurthi"
 
                                                                                                                     ,
                                                                                                                     'month and year':"Sep-2018"
                                                                                                                       },
                                                                                                                       {
                                                                                                                         'sno' : "31",
                                                                                                                         'scholar':"PrasannaVenkatesh.R"
 
                                                                                                                         ,
                                                                                                                         'supervisor' :"Dr.K.Ramanathan"
 
                                                                                                                         ,
                                                                                                                         'month and year':"Oct-2018"
 
                                                                                                                         
                                                                                                                           },
                                                                                                                           {
                                                                                                                             'sno' : "32",
                                                                                                                             'scholar':"Kannan.S"
 
                                                                                                                             ,
                                                                                                                             'supervisor' :"Dr.K.Ramanathan",
                                                                                                                             'month and year':"Feb-2019"
                                                                                                                               },
                                                                                                                               {
                                                                                                                                 'sno' : "33",
                                                                                                                                 'scholar':"M.Krishnamoorthy",
                                                                                                                                 'supervisor' :"Dr.R.Malayalamurthi",
                                                                                                                                 'month and year':"Mar-2019"
                                                                                                                                   },
                                                                                                                                   {
                                                                                                                                     'sno' : "34",
                                                                                                                                     'scholar':"A.Ranjithkumar",
                                                                                                                                     'supervisor' :"Dr.R.Malayalamurthi",
                                                                                                                                     'month and year':"Apr-2019"
                                                                                                                                       },
                                                                                                                                       {
                                                                                                                                         'sno' : "35",
                                                                                                                                         'scholar':"A.Baraniraj"
 
                                                                                                                                         ,
                                                                                                                                         'supervisor' :"Dr.R.Malayalamurthi"
 
                                                                                                                                         ,
                                                                                                                                         'month and year':"Jul-2019"
                                                                                                                                           },
                                                                                                                                           {
                                                                                                                                             'sno' : "36",
                                                                                                                                             'scholar':"Mohan E",
                                                                                                                                             'supervisor' :"Dr.U.Natarajan",
                                                                                                                                             'month and year':"Jul-2019"
                                                                                                                                               },
                                                                                                                                               {
                                                                                                                                                 'sno' : "37",
                                                                                                                                                 'scholar':"Geetha S",
                                                                                                                                                 'supervisor' :"Dr.U.Natarajan",
                                                                                                                                                 'month and year':"Nov-2019"
                                                                                                                                                   },
                                                                                                                                                   {
                                                                                                                                                     'sno' : "38",
                                                                                                                                                     'scholar':"Selvam B",
                                                                                                                                                     'supervisor' :"Dr.U.Natarajan",
                                                                                                                                                     'month and year':"Nov-2019"
                                                                                                                                                       },
                                                                                                                                                       {
                                                                                                                                                         'sno' : "39",
                                                                                                                                                         'scholar':"Valarrmathi G",
                                                                                                                                                         'supervisor' :"Dr.K.Ramanathan",
                                                                                                                                                         'month and year':"Dec-2019"
                                                                                                                                                           },
 
                                                                                                                                                           {
                                                                                                                                                             'sno' : "40",
                                                                                                                                                             'scholar':"Jamuna R",
                                                                                                                                                             'supervisor' :"Dr.U.Natarajan",
                                                                                                                                                             'month and year':"Dec-2019"
                                                                                                                                                               },
                                                                                                                                                               {
                                                                                                                                                                 'sno' : "41",
                                                                                                                                                                 'scholar':"S.Yuvaraj",
                                                                                                                                                                 'supervisor' :"Dr.R.Malayalamurthi",
                                                                                                                                                                 'month and year':"July2020"
                                                                                                                                                                   },
                                                                                                                                                                   {
                                                                                                                                                                     'sno' : "42",
                                                                                                                                                                     'scholar':"C. Subharaj",
                                                                                                                                                                     'supervisor' :"Dr.U.Natarajan",
                                                                                                                                                                     'month and year':"July2020"
                                                                                                                                                                       },
                                                                                                                                                                       {
                                                                                                                                                                         'sno' : "43",
                                                                                                                                                                         'scholar':"P.Raja",
                                                                                                                                                                         'supervisor' :"Dr.R.Malayalamurthi",
                                                                                                                                                                         'month and year':"August 2020"
                                                                                                                                                                           },
                                                                                                                                                                           {
                                                                                                                                                                             'sno' : "44",
                                                                                                                                                                             'scholar':"G. Sathya Priya",
                                                                                                                                                                             
                                                                                                                                                                             'supervisor' :"Dr.U.Natarajan",
                                                                                                                                                                             'month and year':"Octobar-2020"
                                                                                                                                                                               },
                                                                                                                                                                               {
                                                                                                                                                                                 'sno' : "45",
                                                                                                                                                                                 'scholar':"D.Sivanesan",
                                                                                                                                                                                 'supervisor' :"Dr.U.Natarajan",
                                                                                                                                                                                 'month and year':"Nov-2020"
                                                                                                                                                                                   },
                                                                                                                                                                                   {
                                                                                                                                                                                     'sno' : "46",
                                                                                                                                                                                     'scholar':"Ramaswamy S",
                                                                                                                                                                                     'supervisor' :"Dr.J.Selwin Rajadurai",
                                                                                                                                                                                     'month and year':"June -2020"
                                                                                                                                                                                       },
                                                                                                                                                                                       {
                                                                                                                                                                                         'sno' : "47",
                                                                                                                                                                                         'scholar':"Ponnukrishnan P",
                                                                                                                                                                                         'supervisor' :"Dr.J.Selwin Rajadurai",
                                                                                                                                                                                         'month and year':"August 2020"
                                                                                                                                                                                           },
                                                                                                                                                                                           {
                                                                                                                                                                                             'sno' : "48",
                                                                                                                                                                                             'scholar':"R.Sundaramoorthy",
                                                                                                                                                                                             'supervisor' :"Dr.K.Manonmani",
                                                                                                                                                                                             'month and year':"Dec - 2020"
                                                                                                                                                                                               },
                                                                                                                                                                                               
 
 
 ]
 const mech_organised=[
   {
     'sno':"1",
     'title':"Inter college Technical Symposium “ SHACKLES 2022",
     'Date':"17.04.2023 & 18.04.2023",
     'resource':"Mr.Anand Thiruvenkatachari, Head, Quality Assurance, Grundfos Pumps India Pvt Ltd",
     'beneficiary':"UG students"
 
     ,
     'co-ordinator':"Dr.P.Raveendran & Dr.J.Prabakaran"
   },{
     'sno':"2",
     'title':"Intra college Technical Symposium “FUELS 2023”",
     'Date':"11.04.2023",
     'resource':"Dr.M.Raju, Chief Scientist, CECRI, Karaikudi",
     'beneficiary':"UG students",
     'co-ordinator':"Dr.P.Raveendran & Dr.J.Prabakaran"
   },
   {
     'sno':"3",
     'title':"Inter college Technical Symposium “ SHACKLES 2022”",
     'Date':"10.05.2022",
     'resource':"",
     'beneficiary':"UG students",
     'co-ordinator':"Dr.S.Sankarapandian"
   },
   {
     'sno':"4",
     'title':"Intra college Technical Symposium “FUELS 2022”",
     'Date':"27.04.2022",
     'resource':"Dr.G.Sreedhar, Scientist, CECRI, Karaikudi",
     'beneficiary':"UG students",
     'co-ordinator':"Dr.S.Sankarapandian"
   },
   {
     'sno':"5",
     'title':"SHACKLES 2K21",
     'Date':"March 2021",
     'resource':"Dr.K.ManonomaniPrincipal-ACGCETKaraikudi"
     ,
     'beneficiary':"UG students",
     'co-ordinator':"Dr. U.Natarajan Dr.B.GuruprasadDr.R.Sarala"
     
   },
   {
     'sno':"6",
     'title':"TEQIP Sponsored Workshop on “FilterAlgorithm used in Robotics”"
     ,
     'Date':"21.0.2021",
     'resource':"Dr.Wong Wai Kit, Multimedia University (Melaka) Malaysia",
     'beneficiary':"Faculty and PG students",
     'co-ordinator':"Dr.S.Geetha"
   },
   {
     'sno':"7",
     'title':"Webinar on “Outcome based Education (OBE)                       - In and Out",
     'Date':"24.072020",
     'resource':"Dr.J.Selwin Rajadurai",
     'beneficiary':"Faculty of ACGCET, Karaikudi",
     'co-ordinator':"Dr.K.Ramanathan"
   },
   {
     'sno':"8",
     'title':"Webinar on “Leveraging Scinece Direct platform for maximum research Impact”",
     'Date':"15.07 2020",
     'resource':"Experts from M/s Elsevier and M/s GIST, Knimbus",
     'beneficiary':"Faculty and P.G students of ACGCET, Karaikudi",
     'co-ordinator':"Dr.K.Ramanathan"
   },
   {
     'sno':"9",
     'title':"SHACKLES 2K20",
     'Date':"20.02.2020",
     'resource':"Dr.R.Malayalamurthi Principal-ACGCET Karaikudi"
     ,
     'beneficiary':"UG students",
     'co-ordinator':"Dr. U.Natarajan Dr.B.Guruprasad Dr.R.Sarala"
     
   },
   {
     'sno':"10",
     'title':"Briefing about CO-PO attainment for NBA",
     'Date':"14..02 2020",
     'resource':"Dr.J.Selwin Rajadurai",
     'beneficiary':"Faculty of ACGCET, Karaikudi",
     'co-ordinator':"Dr.K.Ramanathan"
   },
   {
     'sno':"11",
     'title':"Briefing about CO-PO attainment for NBA",
     'Date':"10.02.2019",
     'resource':"Dr.J.Selwin Rajadurai",
     'beneficiary':"Faculty of ACGCET, Karaikudi",
     'co-ordinator':"Dr.K.Ramanathan"
   },
   {
     'sno':"12",
     'title':"TEQIP III Sponsored “Advancement and Automation Industrial Engines”",
     'Date':"04.01.2019",
     'resource':"Dr.K.MURUGAN M/s.Venus Energy Bangalore"
     ,
     'beneficiary':"UG students",
     'co-ordinator':"Dr.B.Guruprasad"
   },
   {
     'sno':"13",
     'title':"Seminar on“Material characterization using XRD”",
     'Date':"22.02.2019",
     'resource':"Faculty from Alagappa University",
     'beneficiary':"P.G students and Faculty"
 
     ,
     'co-ordinator':"Dr.K.Ramanathan"
   },
   {
     'sno':"14",
     'title':"TEQIP III Sponsored “Advancement of Smart Materials”",
     'Date':"14.02.2019",
     'resource':"Dr.Veeramani Scientist- CECRI Karaikudi"
     ,
     'beneficiary':"UG students",
     'co-ordinator':"Dr.B.Guruprasad"
   },
   {
     'sno':"15",
     'title':"TEQIP III Sponsored SHACKLES 2K19",
     'Date':"28.02.2019",
     'resource':"Dr.Veeramani Scientist- CECRI Karaikudi"
     ,
     'beneficiary':"UG and PG students",
     'co-ordinator':"Dr. U.Natarajan Dr.B.Guruprasad Dr.R.Sarala"
     
   },
   {
     'sno':"16",
     'title':"TEQIP III Sponsored “Mercedes Engine Diagnosis”",
     'Date':"02.03.2019",
     'resource':"IIT-Bombay",
     'beneficiary':"UG students",
     'co-ordinator':"Dr.B.Guruprasad"
   },
   {
     'sno':"17",
     'title':"TEQIP III Sponsored “Industrial Scenario in Renewable Energy Sector",
     'Date':"22.03.2019",
     'resource':"Dr.B.SRIMANICKAM, MBA., M.Tech., Ph.D., Consultant/Assistant Professor, Dept. R & D Coordinator, Department of Mechanical Engineering, Vel Tech Rangarajan r.Sagunthala R&D Ins. of Sci. & Tech., Chennai 600 062, Tamil Nadu",
     'beneficiary':"UG students",
     'co-ordinator':"Dr.B.Guruprasad"
   },
   {
     'sno':"18",
     'title':"TEQIP III Sponsored Buliding Career- Engineering and Beyond",
     'Date':"01.04.2019",
     'resource':"Er.G.JEGAPRIYAN   M.E., Managing Director ,Tecumseh Products India ,Balanagar 9Township, Hydrabad 500 037",
     'beneficiary':"UG students",
     'co-ordinator':"Dr.B.Guruprasad"
   },
   {
     'sno':"19",
     'title':"Hands on training on “Patent searching and introduction to patent drafting”",
     'Date':"21.06.2019",
     'resource':"Ms.N.Kumutha, IPR Consulatant",
     'beneficiary':"Faculty of ACGCET, Karaikudi",
     'co-ordinator':"Dr.K.Ramanathan"
   },
   {
     'sno':"20",
     'title':"Hands on training on “Patent searching and introduction to patent drafting”",
     'Date':"21.06  2019",
     'resource':"Ms.N.Kumutha, IPR Consulatant,",
     'beneficiary':"Faculty of ACGCET, Karaikudi",
     'co-ordinator':"Dr.K.Ramanathan"
   },
   {
     'sno':"21",
     'title':"AICTE-QIP FDP on “Modelling and Optimization Techniques for Engineering Applications”",
     'Date':"11.11.2018-25.11.2018",
     'resource':"",
     'beneficiary':"Faculty Members",
     'co-ordinator':"Prof. T. Raja Vijay Dr. C.R. Senthil Kumar"
     
   },
   {
     'sno':"22",
     'title':"TEQIP Sponsored Workshop on “Project based learning through E-Yantra”"
     ,
     'Date':"15.09.2018 & 16.09.2018",
     'resource':"Mr.K Thiyagarajan, Lecturer / Instrumentation & Control Engg,Annamalai Polytechnic College, Chettinad."
     ,
     'beneficiary':"UG students",
     'co-ordinator':"Dr.S.Geetha"
   },
   {
     'sno':"23",
     'title':"FDP on “Modeling and Optimization Techniques for Engineering Applications”",
     'Date':"12thto 25th November 2018"
     ,
     'resource':"Faculty from NITs and Government Institutions and Engineers from Industry",
     'beneficiary':"Faculty of Engineering and Polytechnic colleges",
     'co-ordinator':"Dr.K.Ramanathan & Prof. T. Rajavijay"
     
   },
   {
     'sno':"24",
     'title':"AICTE-QIP sponsored Faculty Development programme  on Application of Finite Element Analysis (AFEA-2018)",
     'Date':"12thto 25th February 2018",
     'resource':"Faculty from NITs and Government Institutions and Engineers from Industry",
     'beneficiary':"Faculty of Engineering and Polytechnic colleges",
     'co-ordinator':"Dr.S.Jayabal & Dr.K.Ramanathan"
   },
   {
     'sno':"25",
     'title':"TEQIP III Sponsored “How to Solve Corporate problems in engineering way”",
     'Date':"22.07.2018",
     'resource':"Mr. GURUCHARAN RAGHUNATHAN,PRODUCT MANAGER SHIELD SQUARE BANGALORE."
     ,
     'beneficiary':"UG students",
     'co-ordinator':"Dr.B.Guruprasad"
     
   },
   
   {
     'sno':"26",
     'title':"TEQIP Sponsored National Conference on “Contemporary Approaches in Design and Manufacturing”",
     'Date':"26.04.2018",
     'resource':"",
     'beneficiary':"PG students and Faculty’s",
     'co-ordinator':"Prof. V. Jawahar Prof. T. Raja Vijay"
     
   },
   {
     'sno':"27",
     'title':"TN GOVT Sponsored Two days workshop on “Industrial safety”",
     'Date':"26.03.2018 & 27.03.2018",
     'resource':"NATIONAL FIRE AND SAFETY COLLEGE, KARAIKUDI",
     'beneficiary':"UG students",
     'co-ordinator':"Dr. U.Natarajan Dr.B.Guruprasad"
     
   },
   {
     'sno':"28",
     'title':"TEQIP III Sponsored”SHAKLES-18”",
     'Date':"06.03.2018",
     'resource':"T.Kartheek/ Madhan kumar EID parry- Chennai"
     ,
     'beneficiary':"UG and PG students",
     'co-ordinator':"Dr. U.Natarajan Dr.B.Guruprasad Dr.R.Sarala"
     
   },
   {
     'sno':"29",
     'title':"TEQIP III Sponsored “FUEL-2K18” technical symposium",
     'Date':"25.07.2018 & 26.07.2018",
     'resource':"Er.B.Arokiyaraj Fernando AGM- Quality,  Sanmar metal ltd, Trichy"
     ,
     'beneficiary':"UG and PG students",
     'co-ordinator':"Dr. U.Natarajan Dr.B.Guruprasad Dr.R.Sarala"
     
   },
   {
     'sno':"30",
     'title':"TEQIP III Sponsored “FUEL-2K17” technical symposium",
     'Date':"10.10.2017",
     'resource':"V.Madhukar Head HR, SPIC Tuticorin"
     ,
     'beneficiary':"UG and PG students",
     'co-ordinator':"Dr. U.Natarajan Dr.B.Guruprasad Dr.R.Sarala"
     
   },
   {
     'sno':"31",
     'title':"Edusat programmes for thermodynamics",
     'Date':"19.09.2017",
     'resource':"ANNA UNIVERSITY",
     'beneficiary':"UG students",
     'co-ordinator':"Dr.N.Babu"
   },
   {
     'sno':"32",
     'title':"Fire Safety Awareness Programme",
     'Date':"10.03.2017",
     'resource':"District Officer Fire Safety and Rescue Department, Sivagangai"
     ,
     'beneficiary':"UG students",
     'co-ordinator':"Dr.S.Geetha"
   },
   {
     'sno':"33",
     'title':"Five Days Training Cum Skill development Programme on Apiculuture",
     'Date':"19.09.2016 to  23.09.2016"
     ,
     'resource':"Mr.S.Jeyaraja Kumaradoss Incharge of state bee Keeping extension, Kuzhithurai"
     ,
     'beneficiary':"UG and PG students",
     'co-ordinator':"Dr.S.Geetha"
   },
   {
     'sno':"34",
     'title':"TEQIP Sponsored Workshop on “Robotics Competitions based Education in Engineering (RoCK- BEE)"
     ,
     'Date':"14.09.2016 to 15.09.2016",
     'resource':"Dr. Subir Kumar Saha,Naren Gupta Chair Professor,Department of Mechanical Engineering, Indian Institute of Technology, Delhi.Dr .S.Saravanaperumal,Assistant Professor,Department of Mechanical Engineering, Thiagarajar College of Engineering,Madurai."
     ,
     'beneficiary':"Faculty and PG students",
     'co-ordinator':"Dr.S.Geetha"
   },
   {
     'sno':"35",
     'title':"TEQIP Sponsored Workshop on “Recent trends in Robot Technology”"
     ,
     'Date':"7.01.2016",
     'resource':"Dr Somashekhar S. Hiremath Professor Department of Mechanical Engineering, Indian Institute of Technology, Madras"
     ,
     'beneficiary':"UG and PG students",
     'co-ordinator':"Dr.S.Geetha"
 
     
   },
   {
     'sno':"36",
     'title':"TEQIP sponsored workshop on “Sheet Metal Forming”",
     'Date':"15th April 2016",
     'resource':"Faculty and Technical staffs of ACCET,Karaikudi",
     'beneficiary':"Non teaching technical staffs",
     'co-ordinator':"K.Ramanathan"
   },
   {
     'sno':"37",
     'title':"Staff Development Programme on “Hands on training on Basic Welding”",
     'Date':"20thto 24th June 2016",
     'resource':"Faculty and Technical staffs of ACCET,Karaikudi",
     'beneficiary':"Non teaching technicalstaffs",
     'co-ordinator':"K.Ramanathan"
   },
   {
     'sno':"38",
     'title':"Seminar on “Material characterization using XRD”",
     'Date':"5th August 2016",
     'resource':"Scientist from CECRI,Karaikudi",
     'beneficiary':"P.G students and Faculty",
     'co-ordinator':"P.Perumal"
   },
   {
     'sno':"39",
     'title':"SDP on “First Aid & Home Nursing”",
     'Date':"22ndto 23rd August 2016",
     'resource':"Expert from St.John Ambulance, Trichy"
 
     ,
     'beneficiary':"Non teaching technical staffs",
     'co-ordinator':"K.Ramanathan"
   },
   {
     'sno':"40",
     'title':"AICTE Sponsored FDP on”Entrepreneurship Development",
     'Date':"10thto 23rdFebruary 2014",
     'resource':"Tamilnadu Entrepreneurship Development Cell,Madurai",
     
     'beneficiary':"Faculty of Engineering and Polytechnic colleges",
     'co-ordinator':"K.Ramanathan"
   },
   {
     'sno':"41",
     'title':"TEQIP Sponsored Workshop on “Surface protection of metals”",
     'Date':"28thto 30thOctober2013",
     'resource':"Scientist from CECRI,Karaikudi",
     'beneficiary':"Faculty of Engineering and Polytechnic colleges",
     'co-ordinator':"Dr.A. Elango & Dr.K.Ramanathan"
   },
   {
     'sno':"42",
     'title':"Workshop on Surface Engineering",
     'Date':"24th March 2008",
     'resource':"Scientist from CECRI,Karaikudi",
     'beneficiary':"Faculty of Engineering and Polytechnic colleges",
     'co-ordinator':"A.Elango"
   },
   {
     'sno':"43",
     'title':"TEQIP sponsored training on Training on Un",
     'Date':"15-19, October 2007",
     'resource':"Faculty of ACCET,Karaikudi",
     'beneficiary':"Students of networking engineering colleges",
     'co-ordinator':"S.Jayabal & S.Selvaraj"
 
     
   },
   {
     'sno':"44",
     'title':"TEQIP sponsored training on Advanced Manufacturing Techniques",
     'Date':"18-22, June 2007",
     'resource':"Faculty and Technical staffs of ACCET,Karaikudi",
     'beneficiary':"Public ( Service to the community)",
     'co-ordinator':"S.Jayabal"
   },
   {
     'sno':"45",
     'title':"TEQIP sponsored training on Gas welding and Gas cutting Practice",
     'Date':"11-15 June 2007"
     ,
     'resource':"Faculty and Technical staffs of ACCET,Karaikudi",
     'beneficiary':"Public ( Service to the community)",
     'co-ordinator':"K.Ramanathan"
   },
   {
     'sno':"46",
     'title':"TEQIP sponsored training on Gas welding and Gas cutting Practice",
     'Date':"11-15 June 2007",
     'resource':"Faculty and Technical staffs of ACCET,Karaikudi",
     'beneficiary':"Public ( Service to the community)",
     'co-ordinator':"K.Ramanathan"
   },
   {
     'sno':"47",
     'title':"TEQIP sponsored training on Manufacturing Techniques",
     'Date':"04-08, June 2007",
     'resource':"Faculty and Technical staffs of ACCET,Karaikudi",
     'beneficiary':"Public ( Service to the community)",
     'co-ordinator':"S.Jayabal"
   },
   {
     'sno':"48",
     'title':"TEQIP sponsored training on Molding and Casting Practices",
     'Date':"21-25, May 2007",
     'resource':"Faculty and Technical staffs of ACCET,Karaikudi",
     'beneficiary':"Public ( Service to the community)",
     'co-ordinator':"S.Jayabal"
   },
   {
     'sno':"49",
     'title':"TEQIP sponsored training on Sheet Metal working",
     'Date':"09-15, May 2007",
     'resource':"Faculty and Technical staffs of ACCET,Karaikudi",
     'beneficiary':"Public ( Service to the community)",
     'co-ordinator':"S.Jayabal"
   },
   {
     'sno':"50",
     'title':"TEQIP sponsored training on Gas Welding and Gas Cutting Practice",
     'Date':"14-May-07",
     'resource':"Faculty and Technical staffs of ACCET,Karaikudi",
     
     'beneficiary':"Public ( Service to the community)",
     'co-ordinator':"K.Ramanathan"
 
     
   },
   {
     'sno':"51",
     'title':"TEQIP sponsored training on Plastic Wire Knitting for furniture",
     'Date':"27-ov 2006 to 01-Dec 2006",
     'resource':"Faculty and Technical staffs of ACCET,Karaikudi",
     'beneficiary':"Public ( Service to the community)",
     'co-ordinator':"A.Athijayamani"
   },
   {
     'sno':"52",
     'title':"TEQIP sponsored training on Special Purpose Machines",
     'Date':"31- July 2006 to 04-August 2006",
     'resource':"Faculty and Technical staffs of ACCET,Karaikudi",
     'beneficiary':"Public ( Service to the community)",
     'co-ordinator':"S.Jayabal"
   },
   {
     'sno':"53",
     'title':"TEQIP sponsored training on CNC programming and operations",
     'Date':"19-Dec-2005",
     'resource':"Faculty and Technical staffs of ACCET,Karaikud",
     'beneficiary':"Public ( Service to the community)",
     'co-ordinator':"A.Athijayamani"
   },
   {
     'sno':"54",
     'title':"TEQIP sponsored training on Machine Tool Operation",
     'Date':"14-18, Nov 2005",
     'resource':"Faculty and Technical staffs of ACCET,Karaikudi",
     'beneficiary':"Public ( Service to the community)",
     'co-ordinator':"S.Jayabal"
   },
   {
     'sno':"55",
     'title':"",
     'Date':"",
     'resource':"",
     'beneficiary':"",
     'co-ordinator':""
   },
   {
     'sno':"56",
     'title':"TEQIP sponsored training on Arc Welding Practice",
     'Date':"07-11, Nov 2005",
     'resource':"Faculty and Technical staffs of ACCET,Karaikudi",
     'beneficiary':"Public ( Service to the community)",
     'co-ordinator':"A.Elango"
   },
   
 ]
 const mech_phd_facilities=[
   {
     'id':"1",
     'point':"Tensile testing machine for Composite and Plastic material."
 
   },
   {
     'id':"2",
     'point':"Impact testing machine for Composite and Plastic material."
   },
   {
     'id':"3",
     'point':"Thermo gravimetric analysis."
   },
   {
     'id':"4",
     'point':"Pin on disc Tribometer."
   },
   {
     'id':"5",
     'point':"Physical Vapour Depositing machine"
   },
   {
     'id':"6",
     'point':"Laser interferometer"
   },
   {
     'id':"7",
     'point':"Bottom pouring stir casting furnace"
   },
   {
     'id':"8",
     'point':"Vibration test rig"
   },
   {
     'id':"9",
     'point':"Energy gadgets for Solar Energy Measurement"
     
   },
   {
     'id':"10",
     'point':"Integrated Robotic Rapid WAAM as per Industry 4.0 with accessories"
     
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
  mech_rankers,
  mech_lib_profiles,
  mech_phd_facilities,
  mech_research_phd,
  mech_organised,
  
};
