import React from 'react';
import Card from 'react-bootstrap/Card';
import card3 from '../../../images/home/card3.webp'
import '../Card/Card.css'
const Card_3 = () => {
    return (
        <>
            <Card style={{ width: '13rem' }} className='mx-auto mb-3 cards' data-aos="fade-up-right">
                <Card.Img variant="top" src={card3} />
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>   PET Scans   </Card.Title>
                </Card.Body>
           </Card>
        </>
    );
};

export default Card_3;