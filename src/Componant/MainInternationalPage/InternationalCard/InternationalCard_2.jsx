import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/International/international-2.webp'
import '../InternationalCard/InternationalCard.css'
const InternationalCard_2 = () => {
    return (
        <>
             <Card style={{ width: '20rem' }} className='mx-auto'  data-aos="flip-right">
      <Card.Img variant="top" src={img1} className='img-fluid mx-auto'/>
      <Card.Body>
        <Card.Title className='text-center'>Nigeria</Card.Title> 
        <div className="text-center">
        <Button variant="primary">Go somewhere</Button>
        </div>
        
      </Card.Body>
    </Card>
        </>
    );
};

export default InternationalCard_2;