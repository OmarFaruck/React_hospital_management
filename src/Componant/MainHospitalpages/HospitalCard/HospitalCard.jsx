import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import HospitalCard1 from './HospitalCard_1';
import HospitalCard2 from './HospitalCard_2';
import HospitalCard3 from './HospitalCard_3';
import HospitalCard4 from './HospitalCard_4';
import HospitalCard5 from './HospitalCard_5';
import HospitalCard6 from './HospitalCard_6';
import HospitalCard7 from './HospitalCard_7';
import HospitalCard8 from './HospitalCard_8';
import HospitalCard9 from './HospitalCard_9';
import HospitalCard10 from './HospitalCard_10';

const HospitalCard = () => {
    return (
        <section id='HospitalCard'>
        <div className="container">
            <div className="text-center">
                <h1>Our Hospital Network</h1>
            </div>
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><HospitalCard1/></Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><HospitalCard2/></Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><HospitalCard3/></Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><HospitalCard4/></Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><HospitalCard5/></Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><HospitalCard6/></Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><HospitalCard7/></Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><HospitalCard8/></Col>
        </Row>
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><HospitalCard9/></Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><HospitalCard10/></Col>
        </Row>
    </div>
    </section>
    );
};

export default HospitalCard;