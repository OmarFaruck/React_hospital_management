import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
import slider1 from '../../images/home/slider1.webp'
import slider2 from '../../images/home/slider2.webp'
import slider3 from '../../images/home/slider3.webp'
import slider4 from '../../images/home/slider4.webp'
import slider5 from '../../images/home/slider5.webp'
import slider6 from '../../images/home/slider6.webp'
import slider7 from '../../images/home/slider7.webp'
import slider8 from '../../images/home/slider8.webp'
import '../Slider/Slider.css'
const Slider = () => {
    return (
        <>
            <Carousel fade slide>
      <Carousel.Item> 
        <img src={slider1} className="img-fluid mx-auto logo" alt=''/> 
      </Carousel.Item>
      <Carousel.Item>
    <img src={slider2} className="img-fluid mx-auto logo" alt=''/>
        
      </Carousel.Item>
      <Carousel.Item>
    <img src={slider3 } className="img-fluid mx-auto logo" alt=''/>
        
      </Carousel.Item>
      <Carousel.Item>
    <img src={slider4 } className="img-fluid mx-auto logo" alt=''/>
         
      </Carousel.Item>
      <Carousel.Item>
    <img src={slider5 } className="img-fluid mx-auto logo" alt=''/>
         
      </Carousel.Item>
      <Carousel.Item>
    <img src={slider6 } className="img-fluid mx-auto logo" alt=''/>
        
      </Carousel.Item>
      <Carousel.Item>
    <img src={slider7 } className="img-fluid mx-auto logo" alt=''/>
        
      </Carousel.Item>
      <Carousel.Item>
    <img src={slider8 } className="img-fluid mx-auto logo" alt=''/>
         
      </Carousel.Item>
    </Carousel>
        </>
    );
};

export default Slider;