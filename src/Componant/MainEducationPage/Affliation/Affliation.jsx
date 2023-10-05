import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/Image';
import img1 from '../../images/Affliation/logo1.png'
import img2 from '../../images/Affliation/logo2.png'
import img3 from '../../images/Affliation/logo3.png'
import '../Affliation/Affliation.css'

const Affliation = () => {
    return (
        <section id='Affliation'>
            <div className="container">
                <div className="text-center">
                    <h1 style={{fontFamily:'sans-serif', fontWeight:'bold', margin:'20px 0px'}}>AFFILIATION AND <span style={{color:'#00BCD1'}}>CERTIFICATION</span></h1>
                </div>
              <Row>
                 <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                 <Image src={img1} className='img-fluid mx-auto d-block' rounded />
                </Col> 
                 <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                 <Image src={img2} className='img-fluid mx-auto d-block' rounded />
                </Col> 
                 <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                 <Image src={img3} className='img-fluid mx-auto d-block' rounded />
                </Col> 
              </Row>
            </div>
        </section>
    );
};

export default Affliation;