import React from 'react';
import Card from 'react-bootstrap/Card';
import card1 from '../../../images/home/card1.webp'
import '../Card/Card.css'
const Card_1 = () => {
    return (
        <>
            <Card style={{ width: '13rem' }} className='mx-auto mb-3 cards' data-aos="fade-right">
                <Card.Img variant="top" src={card1} />
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}> MRI SCANS </Card.Title>
                </Card.Body>
           </Card>
        </>
    );
};

export default Card_1;