import React from 'react';
import Image from 'react-bootstrap/Image';
import img from '../../images/Team/team-banner.webp'
const DoctorImg = () => {
    return (
        <section id='DoctorImg'>
            <div className="container-fluid">
            <Image src={img} rounded  className='img-fluid mx-auto d-block'/>
            </div>
        </section>
    );
};

export default DoctorImg;