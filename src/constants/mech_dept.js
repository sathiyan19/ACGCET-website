import dp from "../assets/pictures/dp.jpg";
import cover from "../assets/pictures/mech_banner.webp";

import swayam from '../assets/pictures/swayam.webp'
import robotics from '../assets/pictures/robotics.webp'
import placement from '../assets/pictures/placement.webp'

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

const mech_fac_profiles = [
  {
    id: "1",
    cover: cover,
    dp: dp,
    name: "Arjun",
    Designation: "Assistant professor",
    mailid: "e",
    pdf: "#",
  },
];
const mech_sup_profiles = [
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
  mech_lib_profiles,
  mech_phd_facilities,
  mech_research_phd,
  mech_organised,
  
};
