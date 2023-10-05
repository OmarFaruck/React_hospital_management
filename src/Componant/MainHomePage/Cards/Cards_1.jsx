import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/home/package/package2.webp'
  import '../Cards/Cards.css'
  
const Cards_1 = () => {
    return (
        <>
             <Card style={{ width: '18rem' }} className='mx-auto blog'>
      <Card.Img variant="top" src={img1} style={{ height: '14rem', padding:'15px'}}/>
      <Card.Body>
        
        <Card.Text style={{color: 'black', fontSize:'18px'}}>
        GDIC Bad Obstetric History...
        </Card.Text>
        
       
        <div className="d-flex align-items-center">
        <Button variant="primary">Book now</Button>
        <del>₹ 5230</del>
        <p style={{color: 'black', fontSize:'18px', marginLeft:'14px'}}>₹ 5550</p>
        </div>
      </Card.Body>
    </Card>
        </>
    );
};

export default Cards_1;