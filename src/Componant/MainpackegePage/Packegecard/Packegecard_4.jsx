import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/home/package/package4.webp'
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircleFill } from 'react-icons/bs';
const Packegecard_4 = () => {
  return (
    <>
       <Card style={{ width: '13rem' }} className='mx-auto'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>GDIC Bad Obstetric History and Obstetric</Card.Title>
        <Card.Text className='d-flex'>
      <> ₹ 2193</>
      <del style={{fontSize:'20px', marginLeft:"15px"}}>₹ 13950</del>
        </Card.Text> 
        <NavLink className= "nav-link" style={{color:'#29BDD1'}}>read more<BsArrowRightCircleFill style={{marginLeft:'15px'}}/></NavLink>
      </Card.Body>
    </Card>
    </>
  );
};

export default Packegecard_4;