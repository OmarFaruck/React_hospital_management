import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img from '../../images/Paramedical/Screenshot_1.png'
import img1 from '../../images/Paramedical/Student.png'
import img2 from '../../images/Paramedical/Recruiters.png'
import img3 from '../../images/Paramedical/placement.png'
import CountUp from 'react-countup'; 
import '../Paramedical/Paramedical.css'


const Paramedical = () => {
    return (
        <section id='Paramedical'>
            <div className="container-fluid Paramedical">
                 <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                       <div className="mt-4 container">
                       <div className="text-center Ganesh">
                            <h1>Ganesh Paramedical College</h1>
                            <span><hr /></span>
                            <h3>Affiliated to Singhania University & <br />NIOS & Bir Tikendrajit University</h3>
                        </div>
                        <Row className='mt-4'>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className="text-center">
                        <Image src={img1} className='img-fluid mx-auto d-block my-auto' rounded />
                        <h2>Students</h2>
                        {/* <h3>2500+</h3> */}
                        <CountUp start={0} end={2500} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} /><span>+</span>
                             
                            </div>
                        )}
                    </CountUp>
                        </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className="text-center">
                        <Image src={img2} className='img-fluid mx-auto d-block my-auto' rounded />
                        <h2>Recruiters</h2>
                        {/* <h3>800+</h3> */}
                        <CountUp start={0} end={800} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} /><span>+</span>
                             
                            </div>
                        )}
                    </CountUp>
                        </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className="text-center">
                        <Image src={img3} className='img-fluid mx-auto d-block my-auto' rounded />
                        <h2>placement</h2>
                        <CountUp start={0} end={1600} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} /><span>+</span>
                             
                            </div>
                        )}
                    </CountUp>
                        </div>
                        </Col>
                        </Row>     
                        </div>       
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Image src={img} className='img-fluid mx-auto d-block my-auto' rounded />
                    </Col>
                 </Row>
            </div>
        </section>
    );
};

export default Paramedical;