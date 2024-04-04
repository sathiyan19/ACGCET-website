import React,{useState,useEffect} from 'react'

import './Slideshow.css'

import touch_effect from '../../Functions/touch_detect';

const Slideshow = ({images,flag}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const plus = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const minus = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const current = (index) => {
    setCurrentIndex(index - 1);
  };

  // let myvar1 = setInterval(plus, 4000);

  useEffect(()=>{
    let slides1 = document.getElementsByClassName("mslide");
    touch_effect(".slideshow-container",minus,plus)


const slideshowInterval = setInterval(plus, 5000); // Change the interval as needed (5000ms = 5 seconds)
    return () => clearInterval(slideshowInterval);
  },[])

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div key={index} className={`mslide fades ${index === currentIndex ? 'slide_active' : ''}`}>
            <img src={image} style={{ width: '100%', height:'auto' }} alt={`Slide ${index}`} />
          </div>
        ))}
        {!flag && (<>
        <a className="prev1" onClick={minus}>❮</a>
        <a className="next1" onClick={plus}>❯</a>
        </>)}
      </div>
      <br />
      <div className="tor">
        <div id="dots1" className="dots1" style={{ textAlign: 'center' }}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot1 ${index === currentIndex ? 'activ' : ''}`}
              onClick={() => current(index + 1)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slideshow