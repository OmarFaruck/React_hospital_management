import React from 'react';
import Image from 'react-bootstrap/Image';
import img1 from '../../images/Hospitals/hospitals.webp'
const HospitalBanner = () => {
    return (
        <section id='HospitalBanner'>
            <div className="container-fluid">
            <Image src={img1} className='img-fluid mx-auto d-block' rounded />
            </div>
        </section>
    );
};

export default HospitalBanner;