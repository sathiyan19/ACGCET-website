const ecover = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/English/eng+cover.webp";
const englab = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/English/englab.webp";
const rajina = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/English/rajina.webp"
const rajamani = "https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/science_humanities/English/rajamani.webp";

const English_dept_fmenu = [
    {
      id: "1",
      path: "/englishdept",
      link: "About the Department",
      arl: "l",
    },
    {
      id: "2",
      path: "/englishdept/english-faculty",
      link: "Faculty",
      arl: "1",
    },
    {
      id: "3",
      path: "/englishdept/english-lab-facility",
      link: "Laboratory Facilities",
      arl: "1",
    },
    // {
    //   id: "4",
    //   path: "/Englishdept/English-research",
    //   link: "Research and Publications",
    //   arl: "1",
    // },
    {
      id: "5",
      path: "/englishdept/english-programme",
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

  const eng_labs = [
    {
      id: "1",
      heading: "English Language Laboratory",
      pic: englab,
      content_1:
        " Our Department has a well established language laboratory that boosts of well furnished equipment and technical gadgets to impart the nuances of communication through the digital platform catering to the needs of the technocrats.",
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

  export {
    English_dept_fmenu,
    eng_mission,
    eng_vision,
    eng_fac_profiles,
    eng_labs,
    eng_prog,
  }