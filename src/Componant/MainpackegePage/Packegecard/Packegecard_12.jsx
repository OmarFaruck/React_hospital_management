import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/home/package/package12.webp'
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircleFill } from 'react-icons/bs';
const Packegecard_12 = () => {
  return (
    <>
       <Card style={{ width: '13rem' }} className='mx-auto'>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>  GDIC Liver Function Test problem file</Card.Title>
        <Card.Text className='d-flex'>
      <> ₹ 1112</>
      <del style={{fontSize:'20px', marginLeft:"15px"}}>₹ 8780</del>
        </Card.Text> 
        <NavLink className= "nav-link" style={{color:'#29BDD1'}}>read more<BsArrowRightCircleFill style={{marginLeft:'15px'}}/></NavLink>
      </Card.Body>
    </Card>
    </>
  );
};

export default Packegecard_12;