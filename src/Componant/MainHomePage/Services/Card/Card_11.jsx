import React from 'react';
import Card from 'react-bootstrap/Card';
import card11 from '../../../images/home/card11.webp'
import '../Card/Card.css'
const Card_11 = () => {
    return (
        <>
            <Card style={{ width: '13rem' }} className='mx-auto mb-3 cards' data-aos="zoom-in-left">
                <Card.Img variant="top" src={card11} />
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>  Pathology Tests  </Card.Title>
                </Card.Body>
           </Card>
        </>
    );
};

export default Card_11;