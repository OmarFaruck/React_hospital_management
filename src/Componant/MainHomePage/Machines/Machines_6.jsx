import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/Machines/img5.webp'
import '../Machines/Main_Machines.css'
const Machines_6 = () => {
    return (
        <>
            <Card style={{ width: '18rem' }} className='mx-auto Machines'>
                <Card.Img variant="top" src={img1} className='mx-auto d-block'/>
                <Card.Body className='text-center'> 
                    <Card.Text className='fs-5'>
                    CFX96 Bio-Rad Real...
                    </Card.Text>
                    <Button variant="primary Read">Read about Machines</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Machines_6;