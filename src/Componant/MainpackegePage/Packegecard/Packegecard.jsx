import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Packegecard1 from './Packegecard_1';
import Packegecard2 from './Packegecard_2';
import Packegecard3 from './Packegecard_3';
import Packegecard4 from './Packegecard_4';
import Packegecard5 from './Packegecard_5';
import Packegecard6 from './Packegecard_6';
import Packegecard7 from './Packegecard_7';
import Packegecard8 from './Packegecard_8';
import Packegecard9 from './Packegecard_9';
import Packegecard10 from './Packegecard_10';
import Packegecard11 from './Packegecard_11';
import Packegecard12 from './Packegecard_12';
 

const Packegecard = () => {
    return (
        <section id='Packegecard'>
            <div className="container-fluid">
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}><Packegecard1/></Col> 
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}><Packegecard2/></Col> 
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}><Packegecard3/></Col> 
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}><Packegecard4/></Col>   
                      
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}> <Packegecard5/></Col>    
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}><Packegecard6/></Col> 
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}> <Packegecard7/></Col> 
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={2}><Packegecard8/></Col>  
                </Row>
                <Row style={{margin:'20px 0px'}}>
                   
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}><Packegecard9/></Col> 
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}><Packegecard10/></Col>   
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}><Packegecard11/></Col>    
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}><Packegecard12/></Col>     
                </Row>
            </div>
        </section>
    );
};

export default Packegecard;