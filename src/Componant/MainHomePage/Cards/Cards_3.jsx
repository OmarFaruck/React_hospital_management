import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img3 from '../../images/home/package/package4.webp'
import '../Cards/Cards.css'
const Cards_4 = () => {
    return (
        <>
             <Card style={{ width: '18rem' }} className='mx-auto blog'>
      <Card.Img variant="top" src={img3} style={{ height: '14rem', padding:'15px'}}/>
      <Card.Body> 
        <Card.Text style={{color: 'black', fontSize:'18px'}}>
        GDIC Antenatal Profile...
        </Card.Text>
        <div className="d-flex align-items-center">
        <Button variant="primary">Book now</Button>
        <del>₹ 5680</del>
        <p style={{color: 'black', fontSize:'18px', marginLeft:'14px'}}>₹ 5780</p>
        </div>
      </Card.Body>
    </Card>
        </>
    );
};

export default Cards_4;