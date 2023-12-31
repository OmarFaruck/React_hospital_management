import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../../images/Aboutpage/about1.jpg'
import img2 from '../../images/Aboutpage/about2.jpg'

const Aboutimg = () => {
    return (
        <>
            <Row className='align-items-center'>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Image src={img2} className='img-fluid mx-auto d-block p-2' data-aos="zoom-in-up"/>
                    </Col> 
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Image src={img2} className='img-fluid mx-auto d-block p-2' rounded  data-aos="zoom-in-down"/>
                    </Col> 
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Image src={img2} className='img-fluid mx-auto d-block p-2' rounded  data-aos="zoom-in-left"/>
                    </Col> 
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Image src={img2} className='img-fluid mx-auto d-block p-2' rounded data-aos="zoom-in-right"/>
                    </Col> 
                </Row>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Image src={img1} className='img-fluid mx-auto d-block' rounded  data-aos="zoom-out-up"/>
                </Col>
            </Row>
        </>
    );
};

export default Aboutimg;