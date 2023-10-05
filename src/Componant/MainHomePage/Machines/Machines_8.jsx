import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/Machines/img8.webp'
import '../Machines/Main_Machines.css'
const Machines_8 = () => {
    return (
        <>
            <Card style={{ width: '18rem' }} className='mx-auto Machines'>
                <Card.Img variant="top" src={img1} className='mx-auto d-block'/>
                <Card.Body className='text-center'> 
                    <Card.Text className='fs-6'>
                    Maglumi 2000 from......
                    </Card.Text>
                    <Button variant="primary Read">Read about Machines</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Machines_8;