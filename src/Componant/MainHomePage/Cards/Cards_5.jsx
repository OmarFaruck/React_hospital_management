import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img5 from '../../images/home/package/package6.webp'
import '../Cards/Cards.css'
const Cards_5 = () => {
    return (
        <>
             <Card style={{ width: '18rem' }} className='mx-auto blog'>
      <Card.Img variant="top" src={img5} style={{ height: '14rem', padding:'15px'}}/>
      <Card.Body> 
        <Card.Text style={{color: 'black', fontSize:'18px'}}>
        Advance Full Body Health...
        </Card.Text>
        <div className="d-flex align-items-center">
        <Button variant="primary">Book now</Button>
        <del>₹ 5950</del>
        <p style={{color: 'black', fontSize:'18px', marginLeft:'14px'}}>₹ 6520</p>
        </div>
      </Card.Body>
    </Card>
        </>
    );
};

export default Cards_5;