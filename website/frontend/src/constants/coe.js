import dpm from "../assets/pictures/boy.webp";
import dpf from "../assets/pictures/girl.webp";
import cover from "../assets/pictures/cover.webp";

// import venkatrajan from '../assets/pictures/phy_dept/venkatrajan.webp';
import Coe_syllabuss from "../pages/coe/Coe_syllabuss";
const asr= "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Ece/faculties/teachingfac/ASR.webp"
const baskaran="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Eee/faculties/teachingfac/1-Baskaran-_3_.webp"
const Ramadas="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/Departments/Eee/faculties/teachingfac/6-Ramadas.webp"


const venkatrajan = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/Physics/Phy_faculties/venkatrajan.webp";

const coe_menu =[
    {
        id :"1",
        path:"/coe",
        link:"About",
        arl:'1'
    },
    {
        id :"2",
        path:"/coe/coe_adminstration",
        link:"Administration",
        arl:'1'
    },

    {
      id:"4",
      path:"/coe/coe_academic",
      link:"Academics",
      arl:'1'
    },
    {
        id:"5",
        path:"/coe/coe_link",
        link:"Links",
        arl:'1'
    },
    {
        id:"6",
        path:"/coe/coe_application",
        link:"Applications",
        arl:'1'
    },
    {
        id:"7",
        path:"/coe/coe_claim",
        link:"Claim bills",
        arl:'1'
    },
    // {
    //   id:"8",
    //   path:"/under",
    //   link:"Committiess",
    //   arl:'1'
    // },
    {
        id:"9",
        path:"/coe/coe_feestruct",
        link:"Fees Structure ",
        arl:'1'
    },
    {
      id:"11",
      path:"https://drive.google.com/drive/folders/1Ov9SmTy17q-PljCSszAB8sa_fmYrWIRX",
      link:"Question Bank ",
      arl:'1'
  },


    {
        id:"10",
        path:"/coe/coe_contact",
        link:"Contact",
        arl:'1'
      },
];
const coe_facilities=[
    {
        'id':"1",
     'point':"Setting up of Information and Communication Technology (ICT) Infrastructure, Networking, Technical Manpower and Help Desk"
     
 
   },
   {
    'id':2,
    'point':"Adoption of e-Governance (online submission of exam application, online payment of exam fee and instant generation / printing of e-Hall ticket) to operate with Paperless communication and cashless transactions effectively."
    
   },
   {
    'id':3,
'point':"Communication with Departments and administrative office through dedicated institutional e-mails."

},
{
    'id':4,
'point':"Pre-Exam Process (including customized dummy numbered answer booklets)"

},
{
    'id':5,
'point':"On-Exam Process (Computerized Attendance Sheets)"

},
{
    'id':6,
'point':"Post-Exam Process (Entering and generation of marks)"

},
{
    'id':7,
'point':"Publication of Results and Post-Result Process (Re-valuation etc)"

},
{
    'id':8,
'point':"Issue of highly secured Mark sheets and Certificates"

},
{
    'id':9,
'point':"Report Generation and Preservation of Data"

},

    
];
const Coe_adminstration=[
{
    id:"1",
    cover:cover,
    dp:baskaran,
    name:"Dr.k.Baskaran",
    Designation:"Principal & Chairman",
    mailid:"drbaskaran@accetedu.in",
    pdf: "https://drive.google.com/file/d/1-CyaqHhAV-kbm73tNpQWzePwJpnZb5mh/view?usp=drive_link",

    

    
},
{
    id:"2",
    cover:cover,
    dp:asr,
    name :"Dr.A.Sivanantha Raja",
    Designation:"Controller of Examination" ,

    
    mailid:"sivanantharaja@gmail.com",
    pdf: "https://drive.google.com/file/d/1R9A7ul9goH87qnMYhIZQvI8qFCNcR2iX/view?usp=drive_link",

},


{
    id: "6",
    cover: cover,
    dp: Ramadas,
    name: "Prof.K.Ramadas",
    Designation: "Assistant Controller of Examination",

    
    mailid: "proframadas@gmail.com",
    pdf: "https://drive.google.com/file/d/1a60IrGfnpHU23Uj0a54mEuo4Iopi2ffE/view?usp=drive_link",
  },
  {
    id: "9",
    cover: cover,
    dp: dpm,
    name: "Prof.M.L.Ramamoorthy",
    Designation: "Assistant Controller of Examination",

    
    mailid: "ramamoorthyml@gmail.com",
    pdf: "https://drive.google.com/file/d/1TDYW0Jlk76GKtapo-fZVtlgbn91eUaV1/view?usp=drive_link",
  },
  {
    id: "3",
    cover: cover,
    dp: venkatrajan,
    name: "Mr.S.Venkatrajan",
    Designation: "Assistant Professor",
    mailid: "venkatrajan69@gmail.com",
    pdf:"https://drive.google.com/file/d/17Zc-wpv6oYdvmeG_51RZZOFg_cSoRLkh/view?usp=drive_link"
      },

];
const Coe_adminstration1=[
  
  {
    id: "1",
    point:
       "Ms.S.Annalakshmi"  
},
       
  {
    id: "2",
    point:"Ms.T.Krishnaveni"
          },
       
  {
    id: "3",
    point:"Mr.P.Guberan"
},
       
  {
    id: "4",
    point:
       "Ms.N.Ranjitha"  
},
       
  {
    id: "5",
    point:
       "Ms.V.Varshini"  
},
{
  id: "6",
  point:
     "Mr.S. Aiyappan"  
},
       
       

 

    

    

]

const coe_regulation=[
    {
        'id':'1',
        'program':' UG Regulation 2019',
        'pdf':'https://drive.google.com/file/d/1nR37piyQ0TGPK_lNSCmwKlPZSuoqqnik/view?usp=sharing'
    },
    {
        'id':'2',
        'program':' PG Regulation 2019',
        'pdf':'https://drive.google.com/file/d/1o7BWQ_KCR90qLtQK_gebJtYb4s3f1bF8/view?usp=sharing'
    },
    {
        'id':'3',
        'program':' UG Regulation 2019A',
        'pdf':'https://drive.google.com/file/d/1-01NYLl5-qRdkLZ1U19jnf7MQrZOj_4K/view?usp=sharing'
    },
    {
        'id':'4',
        'program':' PG Regulation 2019A ',
        'pdf':'https://drive.google.com/file/d/11RK1C4Kl2MonBPvj_4qR-vcQd4vcVlNV/view?usp=sharing'
    },
    {
        'id':'5',
        'program':'UG Regulation 2022',

        'pdf':'https://drive.google.com/file/d/1biZjrg1cooJZdTGsDO-F2OXKvGTsjhY5/view?usp=sharing'
    },
    {
        'id':'6',
        'program':' PG Regulation 2022 ',
        'pdf':'https://drive.google.com/file/d/1cP56mVh0A40oT7fZXRVeY--GKCPBC6ms/view?usp=sharing'
    },

];
const coe_syllabus=[
    {
        'id':'1',
        'program':'  Mechanical Engineering',
        'pdf':'https://drive.google.com/file/d/10305LCKUHWq2Nc9wo_7nAoNM7JGnj3mR/view?usp=sharing',
       
    },
    {
      'id':'2',
      'program':'  Civil Engineering',
      'pdf':'https://drive.google.com/file/d/17K031CqGzl2tgmAiwIP0a1Dxn9oxeCQy/view?usp=sharing',
     
  },
  {
    'id':'3',
    'program':'  Computer Science and Engineering',
    'pdf':'https://drive.google.com/file/d/1YmqkeMAtwA0ra2LWNiHATmF3aV2oxk6E/view?usp=sharing',
   
},
{
  'id':'4',
  'program':' Electronics and Communication Engineering',
  'pdf':'https://drive.google.com/file/d/1g5z3ndEWrUoMQ_pIyeFtVS71GjjpmmpB/view?usp=sharing',
 
},
{
  'id':'5',
  'program':'Electrical and Electronics Engineering',
  'pdf':'https://drive.google.com/file/d/14w0j3oG9D3T_1SDr9Ya-5n9cWfBD30K4/view?usp=sharing',
 
},
{
  'id':'6',
  'program':' I year',
  'pdf':'https://docs.google.com/document/d/1bTwpteQLMZoOPlRhH9Wa_DceiuYXzsn-/edit?usp=sharing&ouid=108455310361181583387&rtpof=true&sd=true',
 
},
  

];
 const coe_syllabus1=[
  {
    'id':'1',
    'program':'  Mechanical Engineering',
    'pdf':'https://drive.google.com/file/d/10305LCKUHWq2Nc9wo_7nAoNM7JGnj3mR/view?usp=sharing',
   
},
{
  'id':'2',
  'program':'  Civil Engineering',
  'pdf':'https://drive.google.com/file/d/17K031CqGzl2tgmAiwIP0a1Dxn9oxeCQy/view?usp=sharing',
 
},
{
  'id':'4',
  'program':' Electronics and Communication Engineering',
  'pdf':'https://drive.google.com/file/d/1g5z3ndEWrUoMQ_pIyeFtVS71GjjpmmpB/view?usp=sharing',
 
},
{
  'id':'5',
  'program':'Electrical and Electronics Engineering',
  'pdf':'https://drive.google.com/file/d/14w0j3oG9D3T_1SDr9Ya-5n9cWfBD30K4/view?usp=sharing',
 
},
    

];
const coe_syllabus2=[
  {
    'id':'1',
    'program':'Environmental Engineering',
    'pdf':'https://drive.google.com/file/d/1Zo95QYoPCKYT6awl1Y-9LJFnpd3E3jnI/view?usp=sharing',
   
  },
  {
    'id':'2',
    'program':'Computer Aided Design',
    'pdf':'https://drive.google.com/file/d/1se9ElZEzLR5pVmrlbve0SY37vzSXTxu8/view?usp=sharing',
   
  },
  {
    'id':'3',
    'program':'Manufacturing Engineering',
    'pdf':'https://drive.google.com/file/d/1PBM7NNxF3QG-_oNNSE0LDF691c3zUKE5/view?usp=sharing',
   
  },
  {
    'id':'4',
    'program':'Optical Communication',
    'pdf':'https://drive.google.com/file/d/1QZO9TCcafwxNrkfB-F3eCzm0KkHtx7dV/view?usp=sharing',
   
  },
  {
    'id':'5',
    'program':'Power Electronics and Drives',
    'pdf':'https://drive.google.com/file/d/1uK23osPumS5TorvprxHhxj4Vi7tTHzWw/view?usp=sharing',
   
  },
  {
    'id':'6',
    'program':'Structural Engineering',
    'pdf':'https://drive.google.com/file/d/1_yw2g8W8ZWQzsGn-KPXE_1GNsPDtm_J6/view?usp=sharing',
   
  },
]
const coe_syllabus22=[
  {
  
    'id':'1',
    'program':'Computer Science And Engineering',
    'pdf':'https://drive.google.com/file/d/1flPg5MjLQv4GXAufeyQHEzYCQgoVabIa/view?usp=sharing',
   
  },
  {
  
    'id':'2',
    'program':'Mechanical engineering',
    'pdf':'https://drive.google.com/file/d/1dEOopLkPc6uhqzvrSanuOBocTxyQlsFW/view?usp=sharing',
   
  },
  {
  
    'id':'3',
    'program':'Electronics And Communication Engineering',
    'pdf':'https://drive.google.com/file/d/1oNDLkhmB-I1Us3gEzlvVy8bFa7CQpUBD/view?usp=sharing',
   
  },
  {
  
    'id':'4',
    'program':'Electrical And Electronics Engineering',
    'pdf':'https://drive.google.com/file/d/1n1Emoq2XKTZ6Y1McffPH6H4XqbZE74xb/view?usp=sharing',
   
  },
  {
  
    'id':'5',
    'program':'Civil Engineering',
    'pdf':'https://drive.google.com/file/d/1lyLkLD6zAfiKi0trnkkbx5Y_m02E_Yua/view?usp=sharing',
   
  },
  {
  
    'id':'6',
    'program':'I year',
    'pdf':'https://drive.google.com/file/d/15T_YK6fZ1bUt0q28L7wja2XQ2BhlMMRr/view?usp=sharing',
   
  },
  


];
const coe_syllabus221=[
  {
    'id':'1',
    'program':'Environmental Engineering',
    'pdf':'https://drive.google.com/file/d/1JaxM409JpL5Xuzi6W1nLiN8nqe54dt5B/view?usp=sharing',
   
  },
  {
    'id':'2',
    'program':'Computer Aided Design',
    'pdf':'https://drive.google.com/file/d/1ejIgmwQRgFuTQ1oLzBfnbZxwwbWQDVg4/view?usp=sharing',
   
  },
  {
    'id':'3',
    'program':'Manufacturing Engineering',
    'pdf':'https://drive.google.com/file/d/11_8g4m0396Xpsuj1vd1i_TgI3bzAoMhw/view?usp=sharing',
   
  },
  {
    'id':'4',
    'program':'Microwave And Optical Communication',
    'pdf':'https://drive.google.com/file/d/19PF3M9nNNu0y0a5H8hMOVGUIOSAtH9LF/view?usp=sharing',
   
  },
  {
    'id':'5',
    'program':'Power Electronics and Drives',
    'pdf':'https://drive.google.com/file/d/1u8w7PjXOKbjEnOQSBbxBKQEXLchDuohu/view?usp=sharing',
   
  },
  {
    'id':'6',
    'program':'Structural Engineering',
    'pdf':'https://drive.google.com/file/d/1t888f_wuLP011KITQmuoko9Mkan_Zqi9/view?usp=sharing',
   
  },
]



const coe_link=[
    {
    'id':'1',
    'program':'NPTEL',
    'pdf':' https://nptel.ac.in/'
},
];
const coe_link1=[
    {
    'id':'1',
    'program':'Udemy',
    'pdf':'https://www.udemy.com/join/login-popup/'
    },
];
const coe_link2=[
    {
        'id':'1',
        'program':'Coursera',
        'pdf':'https://www.coursera.org/'
    },
];
const app=[
    {
        'id':'5',
        'program':'Course Registration',
        'pdf':'https://drive.google.com/file/d/1oOiCuWTbMuzrz8GZllMav4Fd_4hWNkph/view?usp=sharing'
    },
    {
        'id':'1',
        'program':'Exam fees',
        'pdf':'https://drive.google.com/file/d/1scJcbSbtQ3ZaAFaGQO9vA9ZFiOXeqZfP/view?usp=sharing'
    },
    {
        'id':'4',
        'program':'Revaluation',
        'pdf':'https://drive.google.com/file/d/1RRGCLQDfFl2EDTObnxG1ahZ8KsKQ9bMw/view?usp=sharing'
    },

    {
        'id':'2',
        'program':'Transcript',
        'pdf':'https://drive.google.com/file/d/1_fTMrsloU5cAfg9f_oCbRJZEh44jvfkb/view?usp=sharing'
    },
    {
        'id':'3',
        'program':'Condonation',
        'pdf':'https://drive.google.com/file/d/1ERX1lwlLwTzp-iNFvP2MaknCkmOMLYWB/view?usp=sharing'
    },


];
const claim=[
    {
        'id':'1',
        'program':' BOS/AC/RPB Meeting',   
        'pdf':'https://drive.google.com/file/d/1ToWoP-5oP5RnECuSEzlNyA8UJ-zwclwK/view?usp=sharing'
    },
    {
        'id':'2',
        'program':' Question Paper Setting',   
        'pdf':'https://drive.google.com/file/d/1ibc3Ded8z6pr_Vc9vvHLGuskXw8LxM29/view?usp=sharing'
    },
    {
        'id':'3',
        'program':' Central Valuation',   
        'pdf':'https://drive.google.com/file/d/1nvyu8CuD-8rHoJcASrCRmskdOyAJndSt/view?usp=sharing'
    },
    {
        'id':'4',
        'program':' Practical Claim',   
        'pdf':'https://drive.google.com/file/d/1x2YHy1SYRFCreaq6OU_6r2FMcoJYVSlA/view?usp=sharing'
    },
    {
        'id':'5',
        'program':' UG Thesis',   
        'pdf':'https://drive.google.com/file/d/1FuHh2GxbtCOKbfAyoeGKMom9uE7wKHV6/view?usp=sharing'
    },
    {
        'id':'6',
        'program':' TA & DA Rates',   
        'pdf':'https://drive.google.com/file/d/1MpApdcp45t3D7twH5k2Qi6UHFLJK107p/view?usp=sharing'
    },

];
const fees_structure=[
    {
        'sno' : "1",
        'Fees for':"Application form",
        'Amount in Ruppes' :"75"
       
          },
          {
            'sno' : "2",
            'Fees for':"Semester mark statement",
          
            'Amount in Ruppes' :"150"
           
              },
              {
                'sno' : "3",
                'Fees for':"UG Exam – Theory subject (Full-Time & Part-Time)",
                'Amount in Ruppes' :"175"
               
                  },
                  {
                    'sno' : "4",
                    'Fees for':"UG Exam – Practical subject (Full-Time & Part-Time)",
                    'Amount in Ruppes' :"175"
                   
                      },
                      {
                        'sno' : "5",
                        'Fees for':"PG Exam – Theory subject (Full-Time & Part-Time)",
                        'Amount in Ruppes' :"400"
                       
                          },
                          {
                            'sno' : "6",
                            'Fees for':"PG Exam – Practical subject (Full-Time & Part-Time)",
                            'Amount in Ruppes' :"400"
                           
                              },
                              
                                  {
                                    'sno' : "7",
                                    'Fees for':"UG Exam – Project work (Full-Time & Part-Time)",
                                    'Amount in Ruppes' :"700"
                                   
                                      },
                                      {
                                        'sno' : "8",
                                        'Fees for':"PG Exam – Project work (Full-Time & Part-Time)",
                                        'Amount in Ruppes' :"800"
                                       
                                          },
                                          {
                                            'sno' : "9",
                                            'Fees for':"Ph.D. / M.S.(By Research) Exam – Course work",
                                            'Amount in Ruppes' :"2000"
                                           
                                              },
                                              {
                                                'sno' : "10",
                                                'Fees for':"Duplicate Hall ticket",
                                                'Amount in Ruppes' :"100"
                                               
                                                  },
                                                  {
                                                    'sno' : "11",
                                                    'Fees for':"Penalty for remitting exam fees after the due date",
                                                    'Amount in Ruppes' :"200"
                                                   
                                                      },
                                                      {
                                                        'sno' : "12",
                                                        'Fees for':"Rank certificate",
                                                        'Amount in Ruppes' :"250 (within 1 year) 400 (after 1 year)"
                                                       
                                                          },
                                                          {
                                                            'sno' : "13",
                                                            'Fees for':"Consolidated mark statement",
                                                            
                                                            'Amount in Ruppes' :"400"
                                                           
                                                              },
                                                              {
                                                                'sno' : "14",
                                                                'Fees for':"Duplicate mark sheet",
                                                                'Amount in Ruppes' :"1000 (within 1 year) 2000 (after 1 year)"
                                                               
                                                                  },
                                                                  {
                                                                    'sno' : "15",
                                                                    'Fees for':"Photo copy of answer script per subject",
                                                                    'Amount in Ruppes' :"200"
                                                                   
                                                                      },
                                                                      {
                                                                        'sno' : "16",
                                                                        'Fees for':"Re-totalling per subject",
                                                                        'Amount in Ruppes' :"250"
                                                                       
                                                                          },
                                                                          {
                                                                            'sno' : "17",
                                                                            'Fees for':"Revaluation per subject",
                                                                            'Amount in Ruppes' :"500 (Failed subject) 1000 (Passed subject)"
                                                                           
                                                                              },
                                                                              {
                                                                                'sno' : "18",
                                                                                'Fees for':"Condonation fee for having 65 % to 75 % attendance",
                                                                                'Amount in Ruppes' :"1000"
                                                                               
                                                                                  },
                                                                                  {
                                                                                    'sno' : "19",
                                                                                    'Fees for':"True copy of Syllabus (for higher education purpose)",
                                                                                    'Amount in Ruppes' :"500"
                                                                                   
                                                                                      },
                                                                                      {
                                                                                        'sno' : "20",
                                                                                        'Fees for':"Student verification",
                                                                                        'Amount in Ruppes' :"1000"
                                                                                       
                                                                                          },
                                                                                          {
                                                                                            'sno' : "21",
                                                                        
                                                                                            'Fees for':"Course completion certificate",
                                                                                            'Amount in Ruppes' :"100"
                                                                                           
                                                                                              },
                                                                                              {
                                                                                                'sno' : "22",
                                                                                                'Fees for':"Last attended semester examination date certificate",
                                                                                                'Amount in Ruppes' :"100 (within 1 year)  300 (after 1 year)"
     
     
                                                                                                 
                                                                                                
                                                                                               
                                                                                                  },
                                                                                                  {
                                                                                                    'sno' : "23",
                                                                                                    'Fees for':"Last attended semester examination date certificate",
                                                                                                    'Amount in Ruppes' :"100 (within 1 year)  300 (after 1 year)"
                                                                                                  },
                                                                                                  {
                                                                                                    'sno' : "24",
                                                                                                    'Fees for':"Result challenge",
                                                                                                    'Amount in Ruppes' :"2000"
                                                                                                  },
                                                                                                  {
                                                                                                    'sno' : "25",
                                                                                                    'Fees for':"Transcript – Ordinary mode",
                                                                                                    
                                                                                                    'Amount in Ruppes' :"-"
                                                                                                  },
                                                                                                  {
                                                                                                    'sno' : "",
                                                                                                    'Fees for':"(i) Individual mark statement",
                                                                                                    
                                                                                                    'Amount in Ruppes' :"100"
                                                                                                  },
                                                                                                  {
                                                                                                    'sno' : "",
                                                                                                    'Fees for':"(ii) Consolidated mark statement",
                                                                                                    
                                                                                                    
                                                                                                    'Amount in Ruppes' :"200"
                                                                                                  },
                                                                                                  {
                                                                                                    'sno' : "",
                                                                                                    'Fees for':"(iii) Provisional certificate",
                                                                                                    
                                                                                                    'Amount in Ruppes' :"100"
                                                                                                  },
                                                                                                  {
                                                                                                    'sno' : "",
                                                                                                    'Fees for':"(iv) Degree certificate",
                                                                                                    
                                                                                                    'Amount in Ruppes' :"100"
                                                                                                  },
                                                                                                  {
                                                                                                    'sno' : "26",
                                                                                                    'Fees for':"Transcript – Tatkal mode",
                                                                                                    
                                                                                                    'Amount in Ruppes' :"-"
                                                                                                  },

                                                                                                  {
                                                                                                    'sno' : "",
                                                                                                    'Fees for':"(i) Individual mark statement",
                                                                                                    
                                                                                                    'Amount in Ruppes' :"200"
                                                                                                  },
                                                                                                  {
                                                                                                    'sno' : "",
                                                                                                    'Fees for':"(ii) Consolidated mark statement",
                                                                                                    
                                                                                                    'Amount in Ruppes' :"400"
                                                                                                  },{
                                                                                                    'sno' : "",
                                                                                                    'Fees for':"(iii) Provisional certificate",
                                                                                                    
                                                                                                    'Amount in Ruppes' :"200"
                                                                                                  },
                                                                                                  {
                                                                                                    'sno' : "",
                                                                                                    'Fees for':"(iv)  Degree certificate",
                                                                                                    
                                                                                                    'Amount in Ruppes' :"200"
                                                                                                  },
                                                                                                

         
                                                                                                     
                                                                                                    
                                   
];
const newId=[
  {
  'id':'1',
  'program':'2019 and 2019 A Regulation  Syllabus',
  'click':'/coe/Coe_syllabuss'
  },
  {
    'id':'2',
  'program':'2022 Regulation Syllabus',
  'click':'/coe/coe_syllabus1'
  }
];
const query=[
  {
    id:"2",
    cover:cover,
    dp:asr,
    name :"Dr.A.Sivanantha Raja",
    Designation:"Controller of Examination" ,

    
    mailid:"sivanantharaja@gmail.com",
    pdf: "https://drive.google.com/file/d/1R9A7ul9goH87qnMYhIZQvI8qFCNcR2iX/view?usp=drive_link",

},
];




export{
    coe_menu,
    coe_facilities,
    Coe_adminstration,
    Coe_adminstration1,
    coe_regulation,
    coe_syllabus,
    coe_link,
    coe_link1,
    coe_link2,
    app,
    claim,
    fees_structure,
    newId,
    query,
    coe_syllabus1,
    coe_syllabus2,
    coe_syllabus22,
    coe_syllabus221
};