// Ncc_heroimage_carousalinfo
// import image1 from "../assets/pictures/ncc/ncc1.webp";
// import image2 from "../assets/pictures/ncc/ncc2.webp";
// import image3 from "../assets/pictures/ncc/ncc3.webp";
// import image4 from "../assets/pictures/ncc/pledg2-min.webp";
// import image5 from "../assets/pictures/ncc/ncc4.webp";


// profile_info
import s1cover from '../assets/pictures/ncc/ncccover.webp'
import s1 from '../assets/pictures/ncc/loki.webp'

const image1="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/ncc/ncc2.webp"
const image2="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/ncc/ncc3.webp"
const image3="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/ncc/ncc4.webp"
const image4="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/ncc/ncchero2.webp"
const image5="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/ncc/pledg2-min.webp"


const Ncc_heroimage_carousalinfo = {
    id: 1,
    title: "National Cadet Corps",
    img_list: [image1, image2 ,image3,image4,image5],
  };


  const profile_info =[
    {
        'id':"1",
        'cover':s1cover,
        'dp':s1,
        'name':"Loganathan KT",
        'Designation':"Assistant Professor /Chemistry",
        'mailid':"logchem80@gmail.com"
    },
]

const nccaim = {
  id: 1,
  visiondata:'The ‘Aims’ of the NCC laid out in 1988 have stood the test of time and continue to meet the requirements expected of it in the current socio–economic scenario of the country. The NCC aims at developing character, comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless service amongst young citizens.Further, it aims at creating a pool of organized, trained and motivated youth with leadership qualities in all walks of life, who will serve the Nation regardless of which career they choose. Needless to say, the NCC also provides an environment conducive to motivating young Indians to join the armed forces.'
};

const nccmotto =[
  {
    id:'1',
    mission:'The need for having motto for the Corps was discussed in the 11th Central Advisory Committee (CAC) meeting held on 11 Aug 1978. The mottos suggested were “Duty and Discipline”; “Duty, Unity and Discipline”; “Duty and Unity”; “Unity and Discipline”.'
  },
  {
    id:'2',
    mission:'The final decision for selection of “Unity and Discipline” as motto for the NCC was taken in the 12th CAC meeting held on 12 Oct 1980.'
  },
]

const ncccore = [
  {
    id:1,
    point:'  A sense of patriotic commitment to encourage cadets to contribute to national development.'
  },
  {
    id:2,
    point:'Respect for diversities in religion, language, culture, ethnicity, life style and habitat to instill a sense of National unity and social cohesion.'
  },
  {
    id:3,
    point:'Abiding commitment to learn and adhere to the norms and values enshrined in the Indian Constitution'
  },
  {
    id:4,
    point:'   Understanding the value of a just and impartial exercise of authority.'
  },
  {
    id:5,
    point:'  Ability to participate in community development and other social programme.'
  },
  {
    id:6,
    point:'A healthy life style free of substance abuse and other unhealthy practices.'
  },
  {
    id:7,
    point:'  Sensitivity to the needs of poor and socially disadvantaged fellow citizens.'
  },
  {
    id:8,
    point:'Inculcating habits of restraint and self-awareness.'
  },
  {
    id:9,
    point:'Understanding the values of honesty, truthfulness, self-sacrifice, perseverance and hard work.'
  },
  {
    id:10,
    point:' Respect for knowledge, wisdom and the power of ideas.'
  }
]

const nccachievements=[
  {
    id:1,
    heading:"2017-2018",
    component:"table",
    structure:{
      data:[
        {
          sno:1,
          event:"Twenty five Cadets were participated in the CATC CUM TSC Camp held at AUCPE, Karaikudi",
          date:"24.05.2017 – 02.06.2017"
        },
        {
          sno:2,
          event:"One of the Cadet was selected to attend the CATC CUM TSC Camp at NIT, Trichy",
          date:"05.06.2017 – 14.06.2017"
        },
        {
          sno:3,
          event:"Two Cadets were participated in the RDC selection Camp held at Anna University, Tiuchirappalli",
          date:"02.08.2017 – 11.06.2017"
        },
        {
          sno:4,
          event:"Eight cadets were participated in the Combined Annual Training CUM RDC Training-I Camp held at AUCPE, Karaikudi",
          date:"19.08.2017 – 28.08.2017"
        },
        {
          sno:5,
          event:"Two cadets were selected and undergone Rock Climbing Training Camp at Gwalior",
          date:"01.11.2017 – 12.11.2017"
        },
        {
          sno:6,
          event:"Five cadets were participated in the National Integration Camp (NIC-I) at NASIK",
          date:"23.12.2017 - 03.01.2018"
        },
        {
          sno:7,
          event:"One of the NCC Cadet, CDT SELVAKARUPPASAMY.M has been selected to attend the RDC (Republic Day Camp) at New Delhi",
          date:"26.01.2018"
        },
      ],
      columns:[
        { field:"sno",header:"sno"},
        { field:"event",header:"event"},
        { field:"date",header:"date"},
      ]
    }
  },
  {
    id:2,
    heading:"2016-2017",
    component:"table",
    structure:{
      data:[
        {
          sno:1,
          event:"Twenty five cadets were participated in the Annual Training Camp held at AUCPE, Karaikudi",
          date:"20.05.2016 – 29.05.2016"
        },
        {
          sno:2,
          event:"Five girl cadets were participated in the Trekking CAMP at Nilgiris. (http://www.nilgiris1905.com/)",
          date:"23.05.2016 – 5.06.2016"
        },
        {
          sno:3,
          event:"Five Cadets were selected to attend the CATC CUM TSC held at BISHOP HEBER, Trichy",
          date:"29.05.2016 – 08.06.2016"
        },
        {
          sno:4,
          event:"One of the Cadet was selected to attend the Advance Leadership Camp-II at AGRA",
          date:"21.08.2016 – 01.09.2016"
        },
        {
          sno:5,
          event:"One girl attended Workshop on Carrier options in Indian defence forces at CIT, Coimbatore",
          date:"01.09.2016 – 02.09.2016"
        },
        {
          sno:6,
          event:"One girl attended Combined annual training camp-cum-NCC group RDC II and DTE Games Hockey 2016 at ACCET, karaikudi",
          date:"03.09.2016 – 12.09.2016"
        },
        {
          sno:7,
          event:"Fifteen Cadets were participated in the CATC CUM RDC Camp held at AUCPE, Karaikudi",
          date:"03.09.2016 – 12.09.2016"
        },
        {
          sno:8,
          event:"Two Girl Cadets were participated in the Rock Climbing Training Camps held at Gwalior",
          date:"15.10.2016  –  6.10.2016"
        },
        {
          sno:9,
          event:"One girl attended Combined annual training camp-cum-NCC group RDC II and DTE Games Hockey 2016 at ACCET, karaikudi",
          date:"24.05.2017 – 02.06.2017"
        },
      ],
      columns:[
        { field: "sno", header: "sno" },
        { field: "event", header: "event" },
        { field: "date", header: "date" },
      ]
    }
  }
]

  export {Ncc_heroimage_carousalinfo,profile_info,nccaim,nccmotto,ncccore,nccachievements}