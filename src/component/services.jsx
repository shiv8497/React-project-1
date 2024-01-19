import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/4png.jpg";
import img2 from "../assets/3png.jpg";

const services = () => {
  return (
    <div >

      <Carousel infiniteLoop 
      autoPlay showStatus={false} 
      showArrows={false} 
      interval={1000}
      showThumbs={false}
      showIndicators={false}>
       <div>
        <img src={img1} alt="Item 1" />
        <p>Full Stack</p>
      </div>

      <div>
        <img src={img2} alt="Item 3" />
        <p>Peer-to-peer Support</p>
      </div>
      </Carousel>

    </div>
  )
}

export default services

