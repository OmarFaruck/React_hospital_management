import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img4 from '../../images/home/package/package5.webp'
import '../Cards/Cards.css'
const Cards_4 = () => {
    return (
        <>
             <Card style={{ width: '18rem' }} className='mx-auto blog'>
      <Card.Img variant="top" src={img4} style={{ height: '14rem', padding:'15px'}}/>
      <Card.Body> 
        <Card.Text style={{color: 'black', fontSize:'18px'}}>
        GDIC Diamond Premium...
        </Card.Text>
        <div className="d-flex align-items-center">
        <Button variant="primary">Book now</Button>
        <del>₹ 5260</del>
        <p style={{color: 'black', fontSize:'18px', marginLeft:'14px'}}>₹ 5780</p>
        </div>
      </Card.Body>
    </Card>
        </>
    );
};

export default Cards_4;