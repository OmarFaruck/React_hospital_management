import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
import img1 from '../../images/Team/team-banner.webp'
import img2 from '../../images/Education/bannern.webp'
import img3 from '../../images/Our_Doctors/doctors.webp'
import img4 from '../../images/Specialities/specialities.webp'
import img5 from '../../images/Hospitals/hospitals.webp'
import img6 from '../../images/International/international-centers.webp'

import '../AboutTeamSlider/AboutTeamSlider.css'
const AboutTeamSliders = () => {
    return (
        <>
            <Carousel fade slide>
      <Carousel.Item> 
        <img src={img1} className="img-fluid mx-auto banner" alt='' style={{height:'370px !important'}}/> 
      </Carousel.Item>
      <Carousel.Item>
    <img src={img2} className="img-fluid mx-auto banner" alt=''/>
        
      </Carousel.Item>
      <Carousel.Item>
    <img src={img3} className="img-fluid mx-auto banner" alt=''/>
        
      </Carousel.Item>
      <Carousel.Item>
    <img src={img4} className="img-fluid mx-auto banner" alt=''/>
         
      </Carousel.Item>
      <Carousel.Item>
    <img src={img5} className="img-fluid mx-auto banner" alt=''/>
         
      </Carousel.Item>
      <Carousel.Item>
    <img src={img6} className="img-fluid mx-auto banner" alt=''/>
        
      </Carousel.Item>
      <Carousel.Item>
    <img src={img2} className="img-fluid mx-auto banner" alt=''/>
        
      </Carousel.Item>
      <Carousel.Item>
    <img src={img4} className="img-fluid mx-auto banner" alt=''/>
         
      </Carousel.Item>
    </Carousel>
        </>
    );
};

export default AboutTeamSliders;