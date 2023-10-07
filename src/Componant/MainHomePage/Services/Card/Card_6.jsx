import React from 'react';
import Card from 'react-bootstrap/Card';
import card6 from '../../../images/home/card6.webp'
import '../Card/Card.css'
const Card_6 = () => {
    return (
        <>
            <Card style={{ width: '13rem' }} className='mx-auto mb-3 cards' data-aos="fade-down-left">
                <Card.Img variant="top" src={card6} />
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>  Pathology Tests  </Card.Title>
                </Card.Body>
           </Card>
        </>
    );
};

export default Card_6;