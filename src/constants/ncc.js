// Ncc_heroimage_carousalinfo
import image1 from "../assets/pictures/ncc/ncc1.webp";
import image2 from "../assets/pictures/ncc/ncc2.webp";
import image3 from "../assets/pictures/ncc/ncc3.webp";
import image4 from "../assets/pictures/ncc/pledg2-min.webp";


// profile_info
import s1cover from '../assets/pictures/s1cover.webp'
import s1 from '../assets/pictures/ncc/loki.webp'


const Ncc_heroimage_carousalinfo = {
    id: 1,
    title: "National Cadet Corps",
    img_list: [image1, image2 ,image3,image4],
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

  export {Ncc_heroimage_carousalinfo,profile_info,nccaim,nccmotto,ncccore}