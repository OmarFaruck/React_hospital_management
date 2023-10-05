import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/Prominent/2.jpg'
import '../Prominent/Prominent.css'
const Prominent_2 = () => {
    return (
        <>
             <Card style={{ width: '18rem' , margin:'20px 0px'}} className='mx-auto Prominent'>
              <Card.Img variant="top" src={img1}  className='mx-auto d-block'/>
       
            </Card>
        </>
    );
};

export default Prominent_2;