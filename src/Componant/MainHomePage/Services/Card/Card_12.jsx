import React from 'react';
import Card from 'react-bootstrap/Card';
import card12 from '../../../images/home/card12.webp'
import '../Card/Card.css'
const Card_12 = () => {
    return (
        <>
            <Card style={{ width: '13rem' }} className='mx-auto mb-3 cards'>
                <Card.Img variant="top" src={card12} />
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>  Pathology Tests  </Card.Title>
                </Card.Body>
           </Card>
        </>
    );
};

export default Card_12;