import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/Image';
import img1 from '../../images/Education/lab2.webp'
import '../RADIOLOGY/RADIOLOGY.css'
const RADIOLOGY = () => {
    return (
        <section id="COURSES">
        <div className="container-fluid">
           <div className="text-center"> 
               <h1 className='RADIOLOGY' style={{color:'#16C2D5', fontFamily:'sans-serif', fontWeight:'bold', margin:'25px 0px'}}> <span style={{marginRight:'15px',color:'black' }}>RADIOLOGY</span>COURSES</h1> 
               <Row className='align-items-center'>
                
                  <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                  <Image src={img1} className='img-fluid mx-auto d-block' rounded />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                  <h2>MEDICAL LAB TECHNOLOGY COURSES</h2>
                   
                      
                           <h6>1.CRIT (CERTIFICATE IN RADIO IMAGING TECHNOLOGY) - 1 Year</h6>
                            <h6>2.DRIT (DIPLOMA IN RADIO IMAGING TECHNOLOGY) - 2 Years</h6>
                            <h6>3.LATERAL ENTRY IN BSC. RADIO IMAGING TECHNOLOGY - 2 Years</h6>
                           <h5>4.BSc. RADIO IMAGING TECHNOLOGY - 3 Years</h5>
                           <h5>5.BSc. RADIO IMAGING TECHNOLOGY - 3 Years</h5>
                           <h5>6.MSc. IN MICROBIOLOGY - 2 Years</h5>
                    
                  </Col>
               </Row>
           </div>
       </div>
   </section>
    );
};

export default RADIOLOGY;