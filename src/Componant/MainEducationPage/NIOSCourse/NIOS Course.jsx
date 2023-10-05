import React from 'react';
import '../NIOSCourse/NIOSCourse.css'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const NIOSCourse = () => {
    return (
        <section id="NIOSCourse">
           <div className="container-fluid nios">
            <div className="text-center">
                <h1>NIOS Course</h1>
            </div>
           
           </div>
           <div className="container">
           <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <h2>Paramedical Courses</h2>
            <h6>1.AYURVEDIC THERAPY - 1 Year (10th)</h6>
            <h6>2.COMMUNITY HEALTH - 1 Year (10th)</h6>
           <h6>3.HOMEOPATHY DISPENSING - 1 Year(10th)</h6>
            <h5>4.YOGA - 6 Month(8th)</h5>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <h2>DMLT & Radiology Courses</h2>
            <h6>1.DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY - 2 Years (12th)</h6>
            <h6>2.DIPLOMA IN RADIO IMAGING TECHNOLOGY - 2 Years (12th)</h6>
                </Col>
            </Row>
            </div>
        </section>
        
    );
};

export default NIOSCourse;