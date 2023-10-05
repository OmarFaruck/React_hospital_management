import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/mri-scans/img7.webp'
import '../Related/Related.css'
const Related_7 = () => {
    return (
        <>
            <Card style={{ width: '18rem', padding:'10px'}} className='mx-auto img-fluid Related'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <h6>MRI Extremities With Contrast</h6>
        <div className="d-flex">
            <p>₹ 4000</p>
            <del style={{marginLeft:'10px'}}><h5>₹ 4000</h5></del>
        <Button variant="primary" style={{width:'100%'}}>Go somewhere</Button>
        </div>
       
      </Card.Body>
    </Card>
        </>
    );
};

export default Related_7;