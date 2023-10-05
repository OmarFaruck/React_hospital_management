import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/Image';
import img1 from '../../images/Team/Sharma.webp'
import '../Doctor/Doctor.css'
const Doctor = () => {
    return (
        <section id='Doctor'>
            <div className="container">
                <Row className='align-items-center'>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <Image src={img1} className='img-fluid mx-auto d-block'/>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <div className="text-center">
                            <p>Our team is comprised of highly skilled and accomplished professionals who hold expertise in their respective fields and bring a wealth of expertise and knowledge to the organization.</p>
                            <p>Each member from top to bottom understands the importance of quality in every aspect of work (from sample collection, handling, transport, housekeeping, IT, and billing to administration) and plays a critical role in shaping the strategic direction and ensuring the success of our centre.</p>
                        </div>
                    </Col> 
                </Row>
            </div>
        </section>
    );
};

export default Doctor;