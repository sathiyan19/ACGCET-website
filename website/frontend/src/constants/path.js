const top_nav_paths = [
  {
    id: "1",
    type: "1",
    title: "About",
    basepath: "javascript:void(0);",
    links: [
      { path: "/", link:"Home"},
      { path: "/about-institution", link: "Institution" },
      { path: "/vision", link: "Vision, Mission & Core values" },
      { path: "/milestones", link: "Milestones" },
    ],
  },

  {
    id: "2",
    type: "1",
    title: "Administration",
    basepath: "javascript:void(0);",
    links: [
      // { path: "/under", link: "Governing council" },
      { path: "/office", link: "Principal Office" },
      { path: "/organisation", link: "Organization Structure" },
      { path: "/committee", link: "Committee/Cell" },
    ],
  },

  {
    id: "3",
    type: "1",
    title: "Academics",
    basepath: "javascript:void(0);",
    links: [
      { path: "/programs", link: "Programs offered" },
      { path: "/academic-calendar", link: "Academic Calendar" },
      {path:"coe",link:"Autonomous Office"},
      // {path:"/research",link:"Research"},
      {path:"/feedback/alumini_fb",link:"Research"},

      {path:"/feedback/collaborator_fb",link:"Feedback"},
      // {path:"/sgpa",link: "Sgpa Calculator"}
    ],
  },

  // {
  //   id: "4",
  //   type: "1",
  //   title: "Research",
  //   basepath: "javascript:void(0);",
  //   links: [
  //     { path: "/under", link: "Link1" },
  //     //     {'path':'/under','link':"Link2"},
  //     //     {'path':'/under','link':"Link3"}
  //   ],
  // },

  {
    id: "5",
    type: "1",
    title: "Placement",
    // basepath: "/under",
    basepath: "/placement",
    links: [],
  },

  {
    id: "7",
    type: "1",
    title: "Co-curricular",
    basepath: "javascript:void(0);",
    links: [
      { path: "/iste", link: "ISTE" },
      { path: "/sih", link: "SIH" },
      { path: "/clubs", link: "Clubs" },
      { path: "/sports", link: "Sports" },
      { path: "/nss", link: "NSS" },
      { path: "/ncc", link: "NCC" },
      { path: "/yrc", link: "YRC" },
      { path: "/uba", link: "UBA" },
      { path: "/thiran", link: "Thiran" },
      // { path: "/Xprez", link: "Xprez" },
    ],
  },
  
  { id: "6", type: "1", title: "Alumni", basepath: "/alumni", links: [] },

  // {
  //   id: "8",
  //   type: "2",
  //   title: "Departments",
  //   basepath: "javascript:void(0);",
  //   links: [
  //     { path: "/mechdept", link: "Mechanical Engineering" },
  //     { path: "/civildept", link: "Civil Engineering" },
  //     { path: "/eeedept", link: "Electrical & Electronics Engineering" },
  //     { path: "/ecedept", link: "Electronics & Communication Engineering" },
  //     { path: "/csedept", link: "Computer Science Engineering" },
  //     { path: "/sciencedept", link: "Science & Humanities" },
  //   ],
  // },

  // {
  //   id: "9",
  //   type: "2",
  //   title: "Life at ACGCET",
  //   basepath: "/life-at-acgcet",
  //   links: [],
  // },

  // {
  //   id: "10",
  //   type: "2",
  //   title: "Accreditation",
  //   basepath: "javascript:void(0);",
  //   links: [
  //     {
  //       path: "https://drive.google.com/file/d/16mZkLmHrTUkolXDtJS8mQLO3GAcgXuhC/view?usp=sharing",
  //       link: "NAAC",
  //     },
  //     { path: "/nba", link: "NBA" },
  //     { path: "/iqac", link: "IQAC" },
  //     { path: "/nirf", link: "NIRF" },
  //     { path: "/annual_reports", link: "Annual Reports" },
  //   ],
  // },

  // {
  //   id: "11",
  //   type: "2",
  //   title: "TEQIP & QIP",
  //   basepath: "javascript:void(0);",
  //   links: [
  //     { path: "/teqip1", link: "Teqip I" },
  //     { path: "/teqip2", link: "Teqip II" },
  //     { path: "/teqip3", link: "Teqip III" },
  //   ],
  // },

  //   {"id":'12',
  //   "type":"2",
  //   'title':'IIC and I&E Policies',
  //   'basepath':'/iic',
  //   'links':[ ]
  //   },

  // {
  //   id: "13",
  //   type: "2",
  //   title: "Centers & Facilities",
  //   basepath: "/centers-and-facilities",
  //   // basepath: "/under",
  //   links: [
  //     // { path: "/under", link: "Link1" },
  //     //     {'path':'/under','link':"Link2"},
  //     //     {'path':'/under','link':"Link3"}]
  //   ],
  // },
];

const hidden_nav_paths = [
  {
    id: "14",
    type: "2",
    title: "Departments",
    basepath: "javascript:void(0);",
    links: [
      { path: "/mechdept", link: "Mechanical Engineering" },
      { path: "/civildept", link: "Civil Engineering" },
      { path: "/eeedept", link: "Electrical & Electronics Engineering" },
      { path: "/ecedept", link: "Electronics & Communication Engineering" },
      { path: "/csedept", link: "Computer Science Engineering" },
      { path: "/Physicsdept", link: "Physics" },
      { path: "/Chemistrydept", link: "Chemistry" },
      { path: "/Mathsdept", link: "Mathematics" },
      { path: "/Englishdept", link: "English" },

    ],
  },

  {
    id: "15",
    type: "2",
    title: "Life at ACGCET",
    basepath: "/life-at-acgcet",
    links: [],
  },

  {
    id: "16",
    type: "2",
    title: "Accreditation",
    basepath: "javascript:void(0);",
    links: [
      {
        path: "https://drive.google.com/file/d/16mZkLmHrTUkolXDtJS8mQLO3GAcgXuhC/view?usp=sharing",
        link: "NAAC",
      },
      { path: "/iqac", link: "IQAC" },
      { path: "/nba", link: "NBA" },
      { path: "/nirf", link: "NIRF" },
      { path: "/rti", link: "RTI" },
      { path: "/annual_reports", link: "Annual Reports" },
    ],
  },

  {
    id: "17",
    type: "2",
    title: "TEQIP & QIP",
    links: [
      { path: "/teqip1", link: "Teqip I" },
      { path: "/teqip2", link: "Teqip II" },
      { path: "/teqip3", link: "Teqip III" },
    ],
  },

  {
    id: "18",
    type: "2",
    title: "IIC and I&E Policies",
    basepath: "/iic",
    links: [],
  },

  {
    id: "19",
    type: "2",
    title: "Centers & Facilities",
    basepath: "/centers-and-facilities",
    // basepath: "/under",
    links: [
      // { path: "/", link: "Link1" },
      // { path: "/", link: "Link2" },
      // { path: "/", link: "Link3" },
    ],
  },
];
const bottom_nav_paths = [
  {
    id: "14",
    type: "3",
    title: "Departments",
    basepath: "javascript:void(0);",
    links: [
      { path: "/civildept", link: "Civil Engineering" },
      { path: "/mechdept", link: "Mechanical Engineering" },   
      { path: "/eeedept", link: "Electrical & Electronics Engineering" },
      { path: "/ecedept", link: "Electronics & Communication Engineering" },
      { path: "/csedept", link: "Computer Science Engineering" },
      { path: "/Physicsdept", link: "Physics" },
      { path: "/Chemistrydept", link: "Chemistry" },
      { path: "/Mathsdept", link: "Mathematics" },
      { path: "/Englishdept", link: "English" },


    ],
  },

  {
    id: "15",
    type: "3",
    title: "Life at ACGCET",
    basepath: "/life-at-acgcet",
    links: [],
  },

  {
    id: "16",
    type: "3",
    title: "Accreditation",
    basepath: "javascript:void(0);",
    links: [
      {
        // path: "https://drive.google.com/file/d/16mZkLmHrTUkolXDtJS8mQLO3GAcgXuhC/view?usp=sharing",
        path: "/naac",
        link: "NAAC",
      },
      { path: "/iqac", link: "IQAC" },
      { path: "/nba", link: "NBA" },
      { path: "/rti", link: "RTI" },
      // { path: "/nirf", link: "NIRF" },
      { path: "/annual_reports", link: "Annual Reports" },
    ],
  },

  {
    id: "21",
    type: "3",
    title: "NIRF",
    basepath: "/nirf",
    links: [],
  },

  {
    id: "17",
    type: "3",
    title: "TEQIP & QIP",
    basepath: "javascript:void(0);",
    links: [
      { path: "/teqip1", link: "Teqip I" },
      { path: "/teqip2", link: "Teqip II" },
      { path: "/teqip3", link: "Teqip III" },
    ],
  },

  {
    id: "18",
    type: "3",
    title: "IIC and I&E Policies",
    basepath: "/iic",
    links: [],
  },

  {
    id: "19",
    type: "3",
    title: "Centers & Facilities",
    basepath: "/centers-and-facilities",
    // basepath: "/under",
    links: [
      // { path: "/", link: "Link1" },
      // { path: "/", link: "Link2" },
      // { path: "/", link: "Link3" },
    ],
  },
];
const login_nav_paths = [
  {
    id: "20",
    type: "4",
    title: "Login",
    // basepath: "/dashboard",
    basepath: "/login-page",
    links: [],
  },
];

export { top_nav_paths, bottom_nav_paths, hidden_nav_paths, login_nav_paths };
