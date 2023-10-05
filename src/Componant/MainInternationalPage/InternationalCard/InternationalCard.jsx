import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import '../InternationalCard/InternationalCard.css'
import InternationalCard1 from './InternationalCard_1';
import InternationalCard2 from './InternationalCard_2';
import InternationalCard3 from './InternationalCard_3';
import InternationalCard4 from './InternationalCard_4';
import InternationalCard5 from './InternationalCard_5';
import InternationalCard6 from './InternationalCard_6';
import InternationalCard7 from './InternationalCard_7';
import InternationalCard8 from './InternationalCard_8';
import InternationalCard9 from './InternationalCard_9';

const InternationalCard = () => {
    return (
        <section id='InternationalCard'>
            <div className="container-fluid">
                <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
                        <InternationalCard1/>
                    </Col> 
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
                        <InternationalCard2/>
                    </Col> 
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
                        <InternationalCard3/>
                    </Col> 
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
                        <InternationalCard1/>
                    </Col> 
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
                        <InternationalCard4/>
                    </Col> 
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
                        <InternationalCard5/>
                    </Col> 
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
                        <InternationalCard6/>
                    </Col> 
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
                        <InternationalCard4/>
                    </Col> 
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
                        <InternationalCard7/>
                    </Col> 
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
                        <InternationalCard8/>
                    </Col> 
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
                        <InternationalCard9/>
                    </Col> 
                    <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
                        <InternationalCard7/>
                    </Col> 
                </Row>
            </div>
        </section>
    );
};

export default InternationalCard;