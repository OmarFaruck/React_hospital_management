import React from 'react';
import Card from 'react-bootstrap/Card';
import card10 from '../../../images/home/card10.webp'
import '../Card/Card.css'
const Card_10 = () => {
    return (
        <>
            <Card style={{ width: '13rem' }} className='mx-auto mb-3 cards' data-aos="zoom-in-up">
                <Card.Img variant="top" src={card10} />
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>  Pathology Tests  </Card.Title>
                </Card.Body>
           </Card>
        </>
    );
};

export default Card_10;