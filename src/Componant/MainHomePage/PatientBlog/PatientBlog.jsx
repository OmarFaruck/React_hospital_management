import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import background from '../../images/blog/Hospitality.webp'
import '../PatientBlog/PatientBlog.css';
import img1 from '../../images/blog/HappyPatients.png'
import img2 from '../../images/blog/OurServices.png'
import img3 from '../../images/blog/CaringStaff.png'
import img4 from '../../images/blog/TrustedDoctors.png'
import CountUp from 'react-countup'; 
import '../PatientBlog/PatientBlog.css'

const PatientBlog = () => {
    return (
        <section id='patient_blog'>
            <Container>
            <Row>
                <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3}>
                    <div className="text-center p-5">
                    <Image src={img1}  className='img-fluid mx-auto d-block'/>
                    {/* <h1>3000+</h1> */}
                    <CountUp start={0} end={30000} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} /><span>+</span>
                             
                            </div>
                        )}
                    </CountUp>
                    <hr className='separator-line-horrizontal-medium-light bg-white mx-auto mb-4'/>
                    <p>Happy Patients</p>
                    </div>
                </Col> 
                <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3}>
                    
                    <div className="text-center p-5">
                    <Image src={img2}  className='img-fluid mx-auto d-block'/>
                    {/* <h1>8750+</h1> */}
                    <CountUp start={0} end={8750} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} /><span>+</span>
                            </div>
                        )}
                    </CountUp>
                    <hr className='separator-line-horrizontal-medium-light bg-white mx-auto mb-4'/>
                    <p>Our Services</p>
                    </div>
                </Col> 
                <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3}>
                <div className="text-center p-5">
                <Image src={img3}  className='img-fluid mx-auto d-block'/>
                {/* <h1>150+</h1> */}
                <CountUp start={0} end={180} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} /><span>+</span>
                            </div>
                        )}
                    </CountUp>
                    <hr className='separator-line-horrizontal-medium-light bg-white mx-auto mb-4'/>
                <p>Caring Staff</p>
                </div>
                </Col> 
                <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3}>
                    <div className="text-center p-5">
                    <Image src={img4}  className='img-fluid mx-auto d-block'/>
                    {/* <h1>30000+</h1> */}
                    <CountUp start={5} end={300} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} /><span>+</span>
                            </div>
                        )}
                    </CountUp>
                    <hr className='separator-line-horrizontal-medium-light bg-white mx-auto mb-4'/>
                    <p>Trusted Doctors</p>

                    </div>
                </Col> 
            </Row>
            </Container>
        </section>
    );
};

export default PatientBlog;