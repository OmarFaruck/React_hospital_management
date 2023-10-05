import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/ambulance/3.webp'
import '../AmbulanceSlider/AmbulanceSlider.css'
const Ambulance_2 = () => {
    return (
        <>
              <Card style={{ width: '18rem' }} className='mx-auto AmbulanceSlider'>
      <Card.Img variant="top" src={img1} />
    
       
    </Card>
        </>
    );
};

export default Ambulance_2;