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
import s3 from '../assets/pictures/s3.webp'


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
      'name':"S.Balasundar",
      'Designation':"ASST.Prof/Maths",
      'mailid':"emailid@gmail.com"
  },
  {
      'id':"2",
      'cover':s2cover,
      'dp':s2,
      'name':"Dr.S.M.Sivagami",
      'Designation':"ASST.Prof/Mech",
      'mailid':"emailid@gmail.com"
  },
  {
      'id':"3",
      'cover':s3cover,
      'dp':s3,
      'name':"Dr.S.Pauline",
      'Designation':"ASST.Prof/Civil",
      'mailid':"emailid@gmail.com"
  }
]

export {Nss_heroimage_carousalinfo,profile_info}