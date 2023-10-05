import React from 'react';
import Image from 'react-bootstrap/Image';
import img1 from '../../images/mri-scans/SCAN.jpg'
const MRILogo = () => {
    return (
        <section id='mri_logo'>
            <div className="container-fluid">
            <Image src={img1} className='img-fluid mx-auto d-block' rounded />
            </div>
        </section>
    );
};

export default MRILogo;