import React from 'react'; 
import Card from 'react-bootstrap/Card';
import img3 from '../../images/Lifecycle/lungus.webp'
import '../Lifecycle/Lifecycle.css'
const Lifecycle_4 = () => {
    return (
        <>
               <Card style={{ width: '18rem', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className='mx-auto Lifecycle'>
      <Card.Img variant="top" src={img3} style={{ height: '14rem', padding:'15px'}}/>
      <Card.Body>
        
        <Card.Text style={{color: 'black', fontSize:'25px', textAlign:'center'}}>
        lungus
        </Card.Text> 
      </Card.Body>
    </Card>
        </>
    );
};

export default Lifecycle_4;