// Nss_heroimage_carousalinfo
import image1 from "../assets/pictures/nsshero1.webp";
import image2 from "../assets/pictures/nsshero2.webp";
import image3 from "../assets/pictures/nsshero3.webp";
import image4 from "../assets/pictures/nsshero4.webp";

// profile_info
import s1cover from '../assets/pictures/s1cover.webp'
import s2cover from '../assets/pictures/s2cover.webp'
import s3cover from '../assets/pictures/s3cover.webp'
import s1 from '../assets/pictures/s1.webp'
import s2 from '../assets/pictures/s2.webp'
import dumy from '../assets/pictures/dp.jpg'


const Nss_heroimage_carousalinfo = {
  id: 1,
  title: "National Service Scheme",
  img_list: [image1, image2 ,image3,image4],
};

const profile_info =[
  {
      'id':"1",
      'cover':s1cover,
      'dp':s1,
      'name':"Mr.S.Balasundar",
      'Designation':"Assistant Professor (Mathematics)",
      'mailid':"balasundaraccet@gmail.com"
  },
  {
      'id':"2",
      'cover':s2cover,
      'dp':s2,
      'name':"Dr.S.M.Sivagami",
      'Designation':"Associate Professor (Mechanical)",
      'mailid':"smsivagami@gmail.com"
  },
  {
      'id':"3",
      'cover':s3cover,
      'dp':dumy,
      'name':" Dr.R.N.Mariammal",
      'Designation':"Assistant Professor\n(Physics)",
      'mailid':"marigayathrirn@gmail.com"
  }
]

const achieve17=[
  {
    'sno':'1',
    'name':'K.T. Loganathan, NSS PO',
    'noa':'Best Programme Officer',
    'issue':'NSS,Anna University,Chennai'
  },
  {
    'sno':'2',
    'name':'K.T. Loganathan, NSS PO',
    'noa':'Best Unit Award',
    'issue':'NSS, Anna University, Chennai'
  },
  {
    'sno':'3',
    'name':'P. Pradeep',
    'noa':'Best Volunteer Award',
    'issue':'NSS, Anna University, Chennai'
  },{
    'sno':'4',
    'name':'S. Vignesh & B. A. Jeyamurugan',
    'noa':'First prize winner in documentary film',
    'issue':'NSS, A.C. Tech, Anna University, Chennai-25'
  },
  {
    'sno':'5',
    'name':'M. Esakki ammal & A. Anitha',
    'noa':'First prize winner in poster presentation in “We- The volunteers” two days state level workshop',
    'issue':'NSS, A.C. Tech, Anna University, Chennai-25'
  },
  {
    'sno':'6',
    'name':'S.M. Mangalam',
    'noa':'First prize winner in poster presentation in “One day NSS social innovation symposium 2018”',
    'issue':'NSS, BIT Campus, Anna University college of Engineering, Tiruchirappalli'
  },
  {
    'sno':'7',
    'name':'V. Sonia & S. Gnanaharish',
    'noa':'First prize winner in “art and paint event” One day NSS social innovation symposium 2018”',
    'issue':'NSS, BIT Campus, Anna University college of Engineering, Tiruchirappalli'
  },
  {
    'sno':'8',
    'name':'S. Kavin',
    'noa':'First prize winner in “Photography” One day NSS social innovation symposium 2018”',
    'issue':'NSS, BIT Campus, Anna University college of Engineering, Tiruchirappalli'
  },
  {
    'sno':'9',
    'name':'P. Gayathri',
    'noa':'First prize winner in “Group discussion event” One day NSS social innovation symposium 2018”',
    'issue':'BIT Campus, Anna University college of Engineering, Tiruchirappalli'
  },
  {
    'sno':'10',
    'name':'P. Pradeep',
    'noa':'First prize winner in Paper presentation in “One day NSS social innovation symposium 2018”',
    'issue':'NSS, BIT Campus, Anna University college of Engineering, Tiruchirappalli'
  },
  {
    'sno':'11',
    'name':'B. Arthe',
    'noa':'Second prize winner in “art and paint event” One day NSS social innovation symposium 2018”',
    'issue':'NSS, BIT Campus, Anna University college of Engineering, Tiruchirappalli'
  },
  {
    'sno':'12',
    'name':'P. Moorthy',
    'noa':'Best volunteer award for photography about “Swachch Bharat Mission” photo contest',
    'issue':'Ministry of Drinking Water and Sanitation, New Delhi'
  }
]

export {Nss_heroimage_carousalinfo,profile_info,achieve17}