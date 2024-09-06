import React from 'react'

import './Pic_gallery.css'


const image1="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/sports/boys+ball+badminton.webp"
const image2="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/sports/boys+volleyball.webp"
const image3="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/sports/cricket.webp"
const image4="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/sports/girls+badminton.webp"
const image5="https://accet-site-media-trial.s3.ap-northeast-1.amazonaws.com/sports/girls+volleyball.webp"

const sports_slideshow=[image1,image2,image3,image4,image5]

const Pic_gallery = ({img_list}) => {
  return (
    <div className='pic_gallery_holder'>
        {img_list.map((item)=>(
        <div key={item.id} className='pic_gallery_card'>
            <div className='pic_gallery_card_img_holder'>
                <img className='pic_gallery_card_img' src={item.src}/>
            </div>
            <div className='pic_gallery_card_heading'>
                {item.head}
            </div>
        </div>
        ))}
        
    </div>
  )
}

export default Pic_gallery