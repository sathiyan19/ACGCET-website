import React,{useState,useEffect} from 'react'

import './Slideshow.css'

const Slideshow = ({images}) => {

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
var startx1,
    starty1,
    starttime1,
    dist1,
    distx1,
    disty1,
    elapsedtime1,
    threshold1 = 2000,
    dist1 = 100,
    restraint1 = 30
const element1 = document.querySelector(".slideshow-container")
element1.addEventListener("touchstart", e1 => {
    var obj1 = e1.changedTouches[0]
    startx1 = obj1.pageX
    starty1 = obj1.pageY
    starttime1 = new Date().getTime()
    e1.preventDefault()
})

element1.addEventListener("touchend", e1 => {
    e1.preventDefault()
    var obj2 = e1.changedTouches[0]
    distx1 = obj2.pageX - startx1
    disty1 = obj2.pageY - starty1
    elapsedtime1 = new Date().getTime() - starttime1
    if (elapsedtime1 < threshold1 & disty1 < 60) {
        if (distx1 < 0) {
            // console.log("Left")
            plus()
        } else if (distx1 > 0) {
            // console.log("Right")
            minus()
        }
    }
})

const slideshowInterval = setInterval(plus, 5000); // Change the interval as needed (5000ms = 5 seconds)
    return () => clearInterval(slideshowInterval);
  },[])

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div key={index} className={`mslide fades ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} style={{ width: '100%' }} alt={`Slide ${index}`} />
          </div>
        ))}
        <a className="prev1" onClick={minus}>❮</a>
        <a className="next1" onClick={plus}>❯</a>
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