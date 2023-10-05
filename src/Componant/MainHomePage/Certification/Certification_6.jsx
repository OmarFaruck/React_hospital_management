import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/Certification/img2.webp'
import '../Certification/Certification.css'
const Certification_6 = () => {
    return (
        <> 

<Card style={{ width: '18rem' }} className='img-fluid mx-auto p-3 Certification'>
<Card.Img variant="top" src={img1} className='img-fluid'/> 
      <Card.Body> 
        <Card.Text className='text-center fs-5' style={{fontWeight:'bold', fontFamily:'sans-serif'}}>
         NABC ACCRIDITED
        </Card.Text> 
      </Card.Body>
    </Card>
            
        </>
    );
};

export default Certification_6;