import React from 'react';
import SideCardBar1 from '../SideCardBer/SideCardBer_1'
import SideCardBar2 from '../SideCardBer/SideCardBer_2'
import SideCardBar3 from '../SideCardBer/SideCardBer_3'
import SideCardBar4 from '../SideCardBer/SideCardBer_4'
import SideCardBar5 from '../SideCardBer/SideCardBer_5' 
import SideCardBar6 from '../SideCardBer/SideCardBer_6' 
import SideCardBar7 from '../SideCardBer/SideCardBer_7' 
import SideCardBar8 from '../SideCardBer/SideCardBer_8' 
import SideCardBar9 from '../SideCardBer/SideCardBer_9' 
import SideCardBar10 from '../SideCardBer/SideCardBer_10' 

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import '../SideCardBer/SideCardBer.css'

const SideCardBer = () => {
    return (
        <section id='SideCardBer'>
            <div className="container SideCardBer">
                <div className="text-center">
                    <h1 style={{color:'#034FA3', padding:'15px 0px', fontFamily:'sans-serif', fontWeight:'bold'}}>Doctors at Manipal Hospitals</h1>
                </div>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><SideCardBar1/></Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><SideCardBar2/></Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><SideCardBar3/></Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><SideCardBar4/></Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><SideCardBar5/></Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><SideCardBar6/></Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><SideCardBar7/></Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><SideCardBar8/></Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><SideCardBar9/></Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}><SideCardBar10/></Col>
                </Row>
            </div>
           
        </section>
    );
};

export default SideCardBer;