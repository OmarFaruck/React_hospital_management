import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/Technology/img3.jpg'
import '../Technology/Technology.css'
const Technology_3 = () => {
    return (
        <>
             <Card style={{ width: '18rem' }} className='mx-auto Technologies'>
      <Card.Img variant="top" src={img1} />
      
        
    </Card>
        </>
    );
};

export default Technology_3;