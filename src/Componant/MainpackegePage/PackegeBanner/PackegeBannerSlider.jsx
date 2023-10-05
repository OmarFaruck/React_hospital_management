 import React from 'react';
 import Carousel from 'react-bootstrap/Carousel';
 import img1 from '../../images/Team/team-banner.webp'
 import img2 from '../../images/Packeges/packagesbanner.webp' 
 import img3 from '../../images/Packeges/packagesbanner.webp' 
import { NavLink } from 'react-router-dom';
 const PackegeBannerSlider = () => {
    return (
        <>
              <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 style={{color:'white'}}>Health Packages</h1> 
          <NavLink><h5 style={{color:'black'}}>Health Packages</h5> </NavLink>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 style={{color:'white'}}>Health Packages</h1> 
          <NavLink><h5 style={{color:'black'}}>Health Packages</h5> </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 style={{color:'white'}}>Health Packages</h1> 
          <NavLink><h5 style={{color:'black'}}>Health Packages</h5> </NavLink>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    );
 };
 
 export default PackegeBannerSlider;