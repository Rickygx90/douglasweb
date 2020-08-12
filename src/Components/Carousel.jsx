import React, { useState } from 'react'
import '../assets/styles/carousel.css';
import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';
import ImgComponent from "./ImgComponent";

export default function Carousel() {
    let array = [
      <ImgComponent src={img1} />,
      <ImgComponent src={img2} />,
      <ImgComponent src={img3} />,
      <ImgComponent src={img4} />,
    ]
    const [x, setX] = useState(0);
    const handleLeft = () => {
      x === 0 ? setX(-100 * (array.length-1)) :setX(x + 100);
    }
    const handleRight = () => {
      (x === -100*(array.length-1)) ? setX(0) :setX(x - 100);
    }

    return (
      <div className="slider">
        {array.map((item, idx) => {
          return (
            <div key={idx} className="slide" style={{transform: `translateX(${x}%)`}}>
              {item}
            </div>
          )
        })}
        <button id="btnLeft" onClick={handleLeft}><i className="fas fa-chevron-left"></i></button>
        <button id="btnRight" onClick={handleRight}><i className="fas fa-chevron-right"></i></button>
      </div>
    )
}
