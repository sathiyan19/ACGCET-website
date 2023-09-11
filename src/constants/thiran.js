// Thiran_heroimage_carousalinfo
import image1 from "../assets/pictures/nsshero1.webp";
import image2 from "../assets/pictures/nsshero2.webp";
import image3 from "../assets/pictures/nsshero3.webp";
import image4 from "../assets/pictures/nsshero4.webp";
import kavz from "../assets/pictures/girl.webp";
import cov from "../assets/pictures/csecover.webp";




const Thiran_heroimage_carousalinfo = {
    id: 1,
    title: "Thiran",
    img_list: [image1, image2 ,image3,image4],
  };

  const vision= {

    id:'1',
    visiondata:'To enhance the knowledge of an individual in particular concern that is considered and improve the leadership skills  of an every individual by a set of achievable actions.'
  }

  const mission_data=[
    {
      id:'1',
      mission:'To provide the standard approach for the porject execution.'
    },
    {
      id:'2',
      mission:'To bring forth the complete and accurate visibility of the project status.'
    },
    {
      id:'3',
      mission:'To set a effective prioritisation for the project management to support the fellowing teams to direct the projects.'
    },
    {
      id:'4',
      mission:'To improvise the  professional skills of an individual in project management.'
    }

  ]

  const profile_info =[
    {
        'id':"1",
        'cover':cov,
        'dp':kavz,
        'name':"Kaviya",
        'Designation':"IAS Officer",
        'mailid':"abc@gmail.com"
    },
    {
      'id':"2",
      'cover':cov,
      'dp':kavz,
      'name':"Yogesh",
      'Designation':"Doctor",
      'mailid':"abc@gmail.com"
  },
  {
    'id':"3",
    'cover':cov,
    'dp':kavz,
    'name':"Hema",
    'Designation':"Doctor",
    'mailid':"abc@gmail.com"
}
  ]
export{ Thiran_heroimage_carousalinfo,vision,mission_data,profile_info}