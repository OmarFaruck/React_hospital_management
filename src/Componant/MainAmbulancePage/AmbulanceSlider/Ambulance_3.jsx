import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/ambulance/4.webp'
import '../AmbulanceSlider/AmbulanceSlider.css'
const Ambulance_3 = () => {
    return (
        <>
              <Card style={{ width: '18rem' }} className='mx-auto AmbulanceSlider'>
      <Card.Img variant="top" src={img1} />
    
       
    </Card>
        </>
    );
};

export default Ambulance_3;