import React from 'react';
import Card from 'react-bootstrap/Card';
import card4 from '../../../images/home/card4.webp'
import '../Card/Card.css'
const Card_4 = () => {
    return (
        <>
            <Card style={{ width: '13rem' }} className='mx-auto mb-3 cards'>
                <Card.Img variant="top" src={card4} />
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}> X-Rays </Card.Title>
                </Card.Body>
           </Card>
        </>
    );
};

export default Card_4;