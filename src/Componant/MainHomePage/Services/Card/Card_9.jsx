import React from 'react';
import Card from 'react-bootstrap/Card';
import card9 from '../../../images/home/card9.webp'
import '../Card/Card.css'
const Card_9 = () => {
    return (
        <>
            <Card style={{ width: '13rem' }} className='mx-auto mb-3 cards'>
                <Card.Img variant="top" src={card9} />
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>  Pathology Tests  </Card.Title>
                </Card.Body>
           </Card>
        </>
    );
};

export default Card_9;