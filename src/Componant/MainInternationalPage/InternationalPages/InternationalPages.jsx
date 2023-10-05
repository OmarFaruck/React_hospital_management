import React from 'react';
import Image from 'react-bootstrap/Image';
import img1 from '../../images/International/international-centers.webp'
const InternationalPages = () => {
    return (
        <section id='InternationalPages'>
            <div className="container-fluid">
            <Image src={img1} className='img-fluid mx-auto d-block' rounded />
            </div>
        </section>
    );
};

export default InternationalPages;