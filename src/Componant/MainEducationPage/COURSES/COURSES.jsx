import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/Image';
import img1 from '../../images/Education/lab1.webp'
const COURSES = () => {
    return (
        <section id="courses">
             <div className="container-fluid">
                <div className="text-center"  data-aos="zoom-in-right"> 
                    <h1 style={{color:'#16C2D5', fontFamily:'sans-serif', fontWeight:'bold', margin:'20px 0px'}}><span style={{marginRight:'15px',color:'black' }}>OUR</span>COURSES</h1> 
                    <Row className='align-items-center'>
                       <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                       <h2>MEDICAL LAB TECHNOLOGY COURSES</h2>
                       
                           
                            <h6>*CMLT(CERTIFICATE IN MEDICAL LAB TECHNOLOGY) - 1 Year</h6>
                            <h6>*DMLT (DIPLOMA IN MEDICAL LAB TECHNOLOGY) - 2 Years</h6>
                            <h6>*LATERAL ENTRY IN BSc. MEDICAL LAB TECHNOLOGY - 2 Years</h6>
                            <h5>*BSc. MEDICAL LAB TECHNOLOGY - 3 Years</h5>
                            <h5>*MSc. MEDICAL LAB TECHNOLOGY - 2 Years</h5>
                            <h5>*MSc. IN MICROBIOLOGY - 2 Years</h5>
                      
                       </Col>
                       <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                       <Image src={img1} className='img-fluid mx-auto d-block' rounded />
                       </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
};

export default COURSES;