import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../../images/mri-scans/faq.webp'
import Accordion from './Accordion';
import '../Frequently/Frequently.css'

const Frequently = () => {
    return (
        <section id='Frequently'>
            <div className="container">
                <div className="text-center">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <Row>
                   <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                   <Image src={img1} className='img-fluid mx-auto d-block' rounded />
                   </Col>
                   <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Accordion/>
                   </Col>
                </Row>
            </div>
        </section>
    );
};

export default Frequently;