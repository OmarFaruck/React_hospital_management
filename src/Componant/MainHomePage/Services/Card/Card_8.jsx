import React from 'react';
import Card from 'react-bootstrap/Card';
import card8 from '../../../images/home/card8.webp'
import '../Card/Card.css'
const Card_8 = () => {
    return (
        <>
            <Card style={{ width: '13rem' }} className='mx-auto mb-3 cards'>
                <Card.Img variant="top" src={card8} />
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>  Pathology Tests  </Card.Title>
                </Card.Body>
           </Card>
        </>
    );
};

export default Card_8;