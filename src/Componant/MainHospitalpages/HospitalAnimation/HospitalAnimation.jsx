import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import CountUp from 'react-countup'; 
import '../HospitalAnimation/HospitalAnimation.css'
const HospitalAnimation = () => {
    return (
        <section id='HospitalAnimation'>
            <div className="container">
                <div className="text-center">
                <Row>
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3}>
                    <CountUp start={0} end={68} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} /><span>+</span>
                             
                            </div>
                        )}
                    </CountUp>
                    <p>Years in Healthcare</p>
                    </Col> 
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3}>
                    <CountUp start={0} end={45} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} /><span>+</span>
                             
                            </div>
                        )}
                    </CountUp>
                    <p>Million Lives Touched</p>
                    </Col> 
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3}>
                    <CountUp start={0} end={60} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} /><span>+</span>
                             
                            </div>
                        )}
                    </CountUp>
                    <p>Beds in 28+ Hospitals</p>
                    </Col> 
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3}>
                    <CountUp start={0} end={7600} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} /><span>+</span>
                             
                            </div>
                        )}
                    </CountUp>
                    <p>Countries Treated</p>
                    </Col> 
                </Row>
                </div>
            </div>
        </section>
    );
};

export default HospitalAnimation;