import dp from "../assets/pictures/dp.jpg";
import cover from "../assets/pictures/mech_banner.webp";

import placement from "../assets/pictures/placement.webp"
import robotics from "../assets/pictures/robotics.webp"

import Air_Machinery from "../assets/pictures/mech_dept/mech_labs/Air_Machinery_lab.webp"
import CAD_lab from "../assets/pictures/mech_dept/mech_labs/CAD_lab.webp"
import CAM_lab from "../assets/pictures/mech_dept/mech_labs/CAM_lab.webp"
import Dynamics_Machinery_lab from "../assets/pictures/mech_dept/mech_labs/Dynamics_Machinery_lab.webp"
import Fluid_Mechanics from "../assets/pictures/mech_dept/mech_labs/Fluid_Mechanics.webp"
import Heat_Transfer_lab from "../assets/pictures/mech_dept/mech_labs/Heat_Transfer_lab.webp"
import K_M_lab from "../assets/pictures/mech_dept/mech_labs/K_M_lab.webp"
import Thermal_lab from "../assets/pictures/mech_dept/mech_labs/Thermal_lab.webp"
import Solar_Power_lab from "../assets/pictures/mech_dept/mech_labs/Solar_Power_lab.webp"
import Fuels_lab from "../assets/pictures/mech_dept/mech_labs/Fuels_lab.webp"
import Centre_of_Excellence from "../assets/pictures/mech_dept/mech_labs/Centre_of_Excellence.webp"
import EP_lab from "../assets/pictures/mech_dept/mech_labs/EP_lab.webp"
import Metrology_lab from "../assets/pictures/mech_dept/mech_labs/Metrology_lab.webp"
import Mechatronics_lab from "../assets/pictures/mech_dept/mech_labs/Mechatronics_lab.webp"
import MT_I from "../assets/pictures/mech_dept/mech_labs/MT_I.webp"
import MT_II from "../assets/pictures/mech_dept/mech_labs/MT_II.webp"
import Eyantra from "../assets/pictures/mech_dept/mech_labs/Eyantra.webp"

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
      id:'1',
      heading:"Air Machinery Laboratory",
      'sub-head':"Empowering innovation through precision in Air Machinery Laboratory." ,
      pic:Air_Machinery,
      link: "https://drive.google.com/file/d/1wNEC3l5744NHxZ0mh_VIwIk1CkRkXhR6/view?usp=drive_link",
      content_1:'The laboratory was established in the Mechanical Engineering block of the laboratory complex in the year 1952 measuring 146.2 sq.m carpet area. The laboratory comprises major equipments like Kaplan turbine, two stage air compressor, Wind tunnel and Rotary compressor test rig',
      content_2:"These fundamentals will be useful to students to link the phenomenological processes taking place in the engine for issues of power generation, fuel economy and fuel composition effects on engine operation and mechanical limitations of obtaining ideal performance.The laboratory is supported with a laboratory in charge and a Foreman instructor who are responsible for all the day to day activities of the laboratory."
  },
  {
    id:'2',
    heading:"CAD Laboratory",
    'sub-head':'In the CAD Laboratory, ideas take shape, innovation meets design precision.',
    pic:CAD_lab,
    link: "https://drive.google.com/file/d/1XyNhNHGV9U0thkRHZ3PrSB9eBRDby3dz/view?usp=drive_link",
    content_1:
      "",
    'content_2':"The CAD Laboratory is a common facility of the department where all undergraduate and postgraduate students, research scholars and faculty members can work with the sophisticated 2-D & 3-D design and analysis software. They can learn to use the latest software and carry out their research work. The lab includes 45 computers with CAD software, as well as ANSYS software. The process of design, simulation takes place in a digitally integrated environment."
},
{
  id:'3',
  heading:"CAM Laboratory",
  'sub-head':"CAM Laboratory: Crafting Innovations with Precision." ,
  pic:CAM_lab,
  link: "https://drive.google.com/file/d/1k0ePjTRkqdZ7UxeSPqjb7gjb2x5NONT-/view?usp=drive_link",
  content_1:
    "",
  content_2:"The CAM Laboratory has been established over an area of 143.8 sq.m. The lab is equipped with CNC milling, CNC lathe, 3 D printing and Rapid prototyping. The objective of this laboratory is to impart skills to the students to operate machines through computer software. This lab is available to graduate the students in the field of Computer Aided Manufacturing. The students also trained through CAM simulation software packages. CNC machines available in the lab can be utilized for UG and PG student’s project work. Laboratory is supported with a laboratory in charge and Technical staff who are responsible for all the day to day activities of the laboratory"
},
{
  id:'4',
  heading:"Dynamics of Machinery Laboratory",
  'sub-head':"Dynamic insights drive innovation in our Machinery Lab.",
  pic:Dynamics_Machinery_lab,
  link: "https://drive.google.com/file/d/1TQZJ-HNL61Y9dkmcvzOvAQEG6KZdIY5l/view?usp=drive_link",
  content_1:"The laboratory was established in the Mechanical Engineering block of the laboratory complex in the year 2005 measuring 83 sq.m carpet area. The laboratory comprises major equipment's like Watt Governor, Porter Governor, Hartnell Governor, Proell Governor, whirling of shaft apparatus, Gyroscope and Vibration Laboratory set-up. ",
  'content_2':"Experiments in this lab are related to concepts of courses such as kinematics of machinery, design of machine elements and vibrations for under graduate students. The objective of conducting the practical classes in the laboratory is to develop skills to analyze the various forces acting on a Mechanical system and to identify the unbalanced forces and its effects such as vibration and its control. Apart from conducting the laboratory classes, the lab facilities are effectively utilized for project work by the students. The laboratory is looked after the Laboratory in charge and instructor who undertake the day to day activities of the laboratory"
},
{
  id:'5',
  heading:"Fluid Mechanics and Machinery Laboratory",
  'sub-head':'Precision flows in our Fluid Mechanics Lab.',
  pic:Fluid_Mechanics,
  link: "https://drive.google.com/file/d/1qIHxF0cgYSWtatfW_CKkg0dAPbqGXCY1/view?usp=drive_link",
  content_1:"",
  content_2:"This Laboratory houses equipment's for gaining hands on experience both in the field of Fluid Mechanics and Machinery. Total area covered is 204.7 sq.m including cabin for the laboratory incharge. Turbines like Francis, Kaplan, Pelton Wheel and Pumps like Centrifugal, Jet pump Submersible, Gear pump and reciprocating pump, Orifice meter,  Flow channel with V notch, Experimental set up to determine Pipe friction, Setup for determining metacentric height and models of impellers and pelton wheel are available in the laboratory"
},
{
  id:'6',
  heading:"Heat and Mass Transfer Laboratory",
  'sub-head':"Heat and Mass Transfer Lab: Mastering Thermal Dynamics for Innovative Solutions."  ,
  pic:Heat_Transfer_lab,
  link: "https://drive.google.com/file/d/1TQZJ-HNL61Y9dkmcvzOvAQEG6KZdIY5l/view?usp=drive_link",
  content_1:"",
  content_2:"Heat and Mass Transfer Laboratory was established in the year 1952, with the equipment’s like Heat Ex-changer, Thermal Conductivity Measurement Apparatus, Pin Fin Apparatus, Forced Convection Apparatus, Natural Convection Apparatus, Emissivity Measurement Apparatus, Stefan Boltzmann Apparatus and Lagged Heat Pipe Apparatus. The different modes of heat transfer like Conduction, Convection and Radiation phenomenon are studied with the help of the experiments and equipment's available in the laboratory."
},
{
  id:'7',
  heading:"Kinematics of Machinery Laboratory",
  'sub-head':"Precision in motion, our Kinematics Lab drives innovation.",
  pic:K_M_lab,
  link: "https://drive.google.com/file/d/1q7lX4L6iw24S1U-DLXPN_V07wSMJxk22/view?usp=drive_link",
  content_1:"The Kinematics of Machinery Laboratory has been established over an area of 73 sq.m. and is equipped with facilities like Crank rocker, Slider crank mechanism, Involute tooth in contact, Quick return mechanism, Kinematic pairs kit, Epicyclic gear train, Cam profile with follower , Synchronous gear box and Vibration Comprehensive Experimental Teaching System . ",
  content_2:"The objective of this laboratory is to develop skills for designing and analyzing linkages, cams, gears and other mechanisms and also used to provide a foundation for the study of machine design. With the study of rigid bodies motions and forces for the transmission systems, machine kinematics and dynamics can be well understood. The laboratory is supported with a laboratory in charge and Technical staff who are responsible for all the day to day activities of the laboratory"
},
{
  id:'8',
  heading:"Thermal Laboratory",
  'sub-head':'Heat the future with precision expertise at our Thermal Laboratory.',
  pic:Thermal_lab,
  link: "https://drive.google.com/file/d/1s8Y25vaixzqTFS8R5zhcKSRC4lZSfbxw/view?usp=drive_link",
  content_1:"The Thermal Laboratory has been established over an area of 204.7 sq.m. and is equipped with facilities like IC Engines, Steam Engines, turbines and Non- IBR Boiler. The objective of this laboratory is to provide the students a good environment to understand significant concepts and applications in the field of Thermal energy based power generation and utilisation. ",
  'content_2':"These fundamentals will be useful to students to link the phenomenological processes taking place in the engine for issues of: power generation, emissions and environmental impact, fuel economy and fuel composition effects on engine operation and mechanical limitations of obtaining ideal performance.The laboratory is supported with a laboratory in charge and a Foreman instructor who are responsible for all the day to day activities of the laboratory."
},
{
  id:'9',
  heading:"Center of Excellence for Smart Manufacturing",
  'sub-head':'Smart Manufacturing Lab: Innovate, Connect, Transform Industry',
  pic:Centre_of_Excellence,
  link: "https://drive.google.com/file/d/1TxcWDuBED3Hj-R4FQ2hLp9H9bXgC1bI6/view?usp=drive_link",
  content_1:"Welcome to our Center of Excellence for Smart Manufacturing Laboratory, where innovation meets precision in the realm of advanced manufacturing technologies. Our state-of-the-art facility is designed to be a nexus for cutting-edge research, development, and education in the field of smart manufacturing.  ",
  'content_2':"Equipped with the latest Industry 4.0 technologies, our laboratory serves as a hub for interdisciplinary collaboration, bringing together experts from engineering, data science, robotics, and automation. Here, researchers and industry professionals explore the convergence of digital and physical systems to revolutionize the manufacturing landscape. Our facility features a comprehensive suite of tools and equipment, including advanced sensors, IoT devices, augmented reality systems, and artificial intelligence platforms. These resources empower researchers to design and implement innovative solutions that enhance efficiency, optimize production processes, and minimize environmental impact."
},
{
  id:'10',
  heading:"Eyantra-Robotics",
  'sub-head':"The  Lab, Inspiring innovation, shaping tomorrow's technology leaders",
  pic:Eyantra,
  link: "https://drive.google.com/file/d/1H7dlzFNlDGT9B4fznC5QQmAV8EwiahaM/view?usp=drive_link",
  content_1:"The Eyantra Robotics Laboratory is a cutting-edge facility dedicated to fostering innovation and hands-on learning in the field of robotics. Equipped with state-of-the-art robotic platforms, advanced sensors, and a comprehensive set of tools, the laboratory provides students with a dynamic environment to explore, experiment, and develop their robotics skills.",
  'content_2':"Students engage in a range of projects, from basic robotics concepts to complex autonomous systems, gaining practical experience that prepares them for real-world challenges. The Eyantra Robotics Laboratory not only focuses on technical aspects but also emphasizes teamwork, problem-solving, and creativity. With a curriculum designed to align with industry standards, students acquire a solid foundation in robotics and automation, enhancing their competitiveness in the ever-evolving job market."
},
{
  id:'11',
  heading:"Engineering Practices",
  'sub-head':'Engineering Practices Lab: Where theory meets hands-on innovation.',
  pic:EP_lab,
  link: "https://drive.google.com/file/d/1__gV1vWA9FE32gJmR5GI1-j5ZgeQAZiO/view?usp=drive_link",
  content_1:"The Engineering Practices Laboratory consists of the Welding, Carpentry, Foundry, Fitting section and sheet metal section. The objective of this laboratory is to study and practice the various operations and to equip with the practical knowledge required in the core industries. This Laboratory is used to provide exposure to the first year students with hands on experience on various basic engineering practices. ",
  'content_2':"Experiments performed in the Carpentry shop include T lap joint, Dove tail lap joint, Mortise and Tenon joints. Students are illustrated with demonstration experiments in the Sheet Metal Shop as part of their syllabus. The Engineering Practices Laboratory is also used for Welding fabrication of projects by the students for their Project works in the 8th Semester, B.E. Mechanical Engineering course. Experiments performed in the Welding shop include Single V-butt joint, double lap joint and T joint."
},
{
  id:'12',
  heading:"Manufacturing Technology I",
  'sub-head':"Shaping Tomorrow's Innovation of our nation",
  pic:MT_I,
  link: "https://drive.google.com/file/d/19UochlzsjEmupdI53-vF6bx8-nW_XQdC/view?usp=drive_link",
  content_1:"These practical courses aim to provide the students with practical knowledge in basic machining processes that could be performed in Center lathe, Capstan lathe and Turret lathe etc.. The practical classes provide opportunity for students to visualize essential components of these machines. Students understand the method of operating the machines safely.",
  'content_2':"Also this practical course aims to provide the students with practical knowledge in basic manufacturing processes that could be performed in standard machine tools such as shaping, milling, slotting, grinding and allied machines. The practical classes provide opportunity for students to learn the methods to machine the models to desired accuracy and quality."
},
{
  id:'13',
  heading:"Manufacturing Technology II",
  'sub-head':' Precision that shapes future industries.',
  pic:MT_II,
  link: "https://drive.google.com/file/d/1h-ZDP7M3bqcehNvMhg4GlQMcyLBPUmtl/view?usp=drive_link",
  content_1:"These practical courses aim to provide the students with practical knowledge in basic machining processes that could be performed in Center lathe, Capstan lathe and Turret lathe etc.. The practical classes provide opportunity for students to visualize essential components of these machines. Students understand the method of operating the machines safely.",
  'content_2':"At the end of the second year, student will be capable of demonstrating the various basic operations such as Facing, Step turning, Drilling, tapping, Grooving, Chamfering and Knurling, External thread cutting, Step turning, counter boring, Eccentric turning and Taper turning. Also student will be capable of demonstrating the various basic operations such as shaping square block, machining by single point cutting tool, machining key ways , machining a spur gear, milling a Polygon Surface ,measuring and cutting tool forces etc. ."
},
{
  id:'14',
  heading:"Mechatronics",
  'sub-head':'Mechatronics Lab: Fusing mechanics and electronics for groundbreaking innovation.',
  pic:Mechatronics_lab,
  link: "https://drive.google.com/file/d/1s2u9O_F8XEBGjl8vYuAZ9ps4veW3SbWk/view?usp=drive_link",
  content_1:"The laboratory was established in the Mechanical Engineering block of the laboratory complex in the year 2006, measuring 61.7 sq.m carpet area. The laboratory comprises of computers with Automation studio software and FluidSIM softwares, 8085 Microprocessor Trainer kits, 8051 Microcontroller trainer Kits, PLC Simulator Kit, Hydraulic Trainer kit, Pneumatic Trainer kit and Sensor Trainer Kit. ",
  'content_2':" The objective of conducting the practical classes in the laboratory is to develop the skills in performing design and simulation of fluid power circuits using application softwares like FluidSim and Automation Studio and to test simple circuits using trainer kits. Also the student is trained in programming microprocessor and microcontroller and evaluate the performance of sensors in relation with development of mechatronics system."
},
{
  id:'15',
  heading:"Metrology",
  'sub-head':'Metrology Lab: Where Precision Meets Excellence.',
  pic:Metrology_lab,
  link: "https://drive.google.com/file/d/1yVs9HPofZURzzJqmtf3ecg2xR9op-q6H/view?usp=drive_link",
  content_1:"Explore precision in our Metrology Laboratory. Cutting-edge equipment ensures accurate measurements for quality control. Our expert team guarantees the reliability of your data. From dimensional analysis to calibration services, we provide solutions for diverse industries. Trust us for unparalleled precision and excellence in metrology.",
  'content_2':"The laboratory is to equip students with knowledge on common linear, angular and form measurement analysis by using the instruments meant for engineering measurements. The laboratory equipped with various instruments like Rapid- machine vision system, Sine bar & Slip Gauges, Autocollimator, Gear Roll Tester, Tool Makers Microscope, Impact Tester , Simultaneous Thermal Analyzer (STA) , Compression molding Machine, Bevel protector andFloating carriage micrometer which will be utilized by the students and Research scholar in carry out various studies in the area of Manufacturing."
},
{
  id:'16',
  heading:"Solar Power Laboratory",
  'sub-head':"Solar Power Lab: Unleashing Sunlight's Sustainable Energy Potential.",
  pic:Solar_Power_lab,
  content_1:"",
  content_2:"The laboratory was established in the Department of Mechanical Engineering (Lab) during the academic year of 2019-2020 under TEQIP III Grant, it has a 50.0 sq.m carpet area. The Facilities available are as follows: Solar water heater, Solar air heater, Solar cooker, Solar power plant, Pyranometer, Pyrheliometer, Cup Anemometer, Solarimeter. The UG,PG and research scholars are given hands-on training and also to carry out research."
},
{
  id:'17',
  heading:"Fuels Laboratory",
  'sub-head':'Fuels Laboratory: Igniting Quality, Powering Progress.',
  pic:Fuels_lab,
  content_1:"",
  content_2:"The Fuels laboratory provides ample opportunity to the students and the research scholars to test and study different properties of fuels that can be used in IC engine and to do their innovative projects. In fuels lab, several fuel testing equipment's are available to measure, vapour pressure thermometer, Dead weight pressure Gauge, measurement of flash point and fire point of an oil, determination of viscosity of an oil using Saybolt and Engler Viscometer, determination of smoke point, determination of aniline point, determination of cloud and pour point and also experiments are conducted on esterification process, in the production of bio-fuel."
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
  mech_dept_events
};
