import React from 'react';
import Card from 'react-bootstrap/Card';
import card5 from '../../../images/home/card5.webp'
import '../Card/Card.css'
const Card_5 = () => {
    return (
        <>
            <Card style={{ width: '13rem' }} className='mx-auto mb-3 cards'>
                <Card.Img variant="top" src={card5} />
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}> ULTRASOUNDS  </Card.Title>
                </Card.Body>
           </Card>
        </>
    );
};

export default Card_5;