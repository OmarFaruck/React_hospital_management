import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Card1 from '../Services/Card/Card_1'
import Card2 from '../Services/Card/Card_2'
import Card3 from '../Services/Card/Card_3'
import Card4 from '../Services/Card/Card_4'
import Card5 from '../Services/Card/Card_5'
import Card6 from '../Services/Card/Card_6' 
import Card7 from './Card/Card_7';
import Card8 from './Card/Card_8';
import Card9 from './Card/Card_9';
import Card10 from './Card/Card_10'; 
import Card11 from './Card/Card_11';  
import Card12 from './Card/Card_12';  
import '../Services/Services.css' 


const Services = () => {
    return (
        <section id='service'>
            <div className="container-fluid">
                <div className="text-center text">
                    <h1>Welcome To Ganesh Diagnostic & Imaging Centre!</h1>
                    <p>Your Health is our top priority. Browse through our most desired tests that ensure your good health.</p>
                    <h2>Our Services</h2> 
                </div>
                <Row className='mx-auto'>
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} xxxl={3}><Card1/> </Col>
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} xxxl={3}> <Card2/> </Col> 
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} xxxl={3}> <Card3/> </Col>  
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} xxxl={3}> <Card4/> </Col>       
                </Row>

                <Row className='mt-4 mx-auto'>
                 <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} xxxl={3}> <Card5/> </Col>    
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} xxxl={3}> <Card6/> </Col> 
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} xxxl={3}> <Card7/>  </Col>  
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} xxxl={3}> <Card8/>  </Col> 
                 </Row>

                <Row className='mt-4 mx-auto'>
                    
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} xxxl={3}> <Card9/>  </Col>  
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} xxxl={3}> <Card10/>  </Col>  
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} xxxl={3}> <Card11/>  </Col>  
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} xxl={3} xxxl={3}> <Card12/>  </Col>  
                </Row>
            </div>
        </section>
    );
};

export default Services;