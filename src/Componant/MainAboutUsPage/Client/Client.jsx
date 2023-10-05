import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/Aboutpage/img_1.png'
import img2 from '../../images/Aboutpage/img_2.png'
import img3 from '../../images/Aboutpage/img_3.png'
import img4 from '../../images/Aboutpage/img_4.png'
import CountUp from 'react-countup'; 
import '../Client/Client.css'

const Client = () => {
    return (
        <section id='Client'>
            <div className="container-fluid">
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
                        <Card style={{ width: '18rem' }} className='mx-auto mb-5'>
                        <Card.Img variant="top" src={img1} className='img-fluid mx-auto d-block'/>
                            <Card.Body>
                                <Card.Title className='text-center'>Happy Patients</Card.Title>
                                  
                                <CountUp start={0} end={10000} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef}  style={{marginLeft:'35%', fontSize:'30px'}}/>
                             
                            </div>
                        )}
                    </CountUp>
                            </Card.Body>
                        </Card>
                    </Col>  
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
                        <Card style={{ width: '18rem' }} className='mx-auto mb-5'>
                        <Card.Img variant="top" src={img2} className='img-fluid mx-auto d-block'/>
                            <Card.Body>
                                <Card.Title className='text-center'>Expert Doctors</Card.Title>
                                <CountUp start={0} end={25} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} style={{marginLeft:'40%', fontSize:'30px'}}/>
                             
                            </div>
                        )}
                    </CountUp>
                            </Card.Body>
                        </Card>
                    </Col>  
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
                        <Card style={{ width: '18rem' }} className='mx-auto mb-5'>
                        <Card.Img variant="top" src={img3} className='img-fluid mx-auto d-block'/>
                            <Card.Body>
                                <Card.Title className='text-center'>Departments</Card.Title>
                                <CountUp start={0} end={50} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} style={{marginLeft:'40%', fontSize:'30px'}}/>
                             
                            </div>
                        )}
                    </CountUp>
                            </Card.Body>
                        </Card>
                    </Col>  
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
                        <Card style={{ width: '18rem' }} className='mx-auto mb-5'>
                        <Card.Img variant="top" src={img4} className='img-fluid mx-auto d-block'/>
                            <Card.Body className='text-center'>
                                <Card.Title className='text-center'>Free Ambulance</Card.Title>
                                <CountUp start={0} end={22} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} style={{ fontSize:'30px'}}/>
                             
                            </div>
                        )}
                    </CountUp>
                            </Card.Body>
                        </Card>
                    </Col>  
                </Row>
            </div>
        </section>
    );
};

export default Client;