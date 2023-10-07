import React from 'react';
import Card from 'react-bootstrap/Card';
import card2 from '../../../images/home/card2.webp'
import '../Card/Card.css'
const Card_2 = () => {
    return (
        <>
            <Card style={{ width: '13rem' }} className='mx-auto mb-3 cards' data-aos="fade-left">
                <Card.Img variant="top" src={card2} />
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}> CT SCANS  </Card.Title>
                </Card.Body>
           </Card>
        </>
    );
};

export default Card_2;