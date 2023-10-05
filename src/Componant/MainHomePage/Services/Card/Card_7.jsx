import React from 'react';
import Card from 'react-bootstrap/Card';
import card7 from '../../../images/home/card7.webp'
import '../Card/Card.css'
const Card_7 = () => {
    return (
        <>
            <Card style={{ width: '13rem' }} className='mx-auto mb-3 cards'>
                <Card.Img variant="top" src={card7} />
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>  Pathology Tests  </Card.Title>
                </Card.Body>
           </Card>
        </>
    );
};

export default Card_7;