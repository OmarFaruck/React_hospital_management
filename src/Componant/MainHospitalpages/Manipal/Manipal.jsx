import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/Image';
import img1 from '../../images/Hospitals/hospitalcard.webp'
import '../Manipal/Manipal.css'
const Manipal = () => {
    return (
        <section id='Manipal'>
            <div className="container-fluid">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                         <div className="container">
                            <div className="text-center" data-aos="zoom-in-left">
                                <h1>Why Manipal Hospitals ?</h1>
                                <p>Manipal Hospitals has a special significance in the overall healthcare industry of India and particularly in South India. A social seed sown more than five decades ago is today the country’s third largest healthcare group with a network of 16 hospitals and three primary clinics providing comprehensive care that is both curative and preventive in nature for a wide variety of patients not just from India but also from across the globe. The focus at Manipal Hospitals is to develop an affordable tertiary care multispecialty healthcare framework through its entire delivery spectrum and further extend it to homecare. One of the most preferred and recognized healthcare facilities by pharmaceutical companies for drug trials, the group’s flagship hospital in Bangalore is NABH accredited and ranked amongst the Top 10 multispecialty hospitals in India.</p>
                            </div>
                         </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                   <div className="mainpal_img" data-aos="zoom-in-right">
                   <Image src={img1} className='img-fluid mx-auto d-block' rounded />
                   </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Manipal;