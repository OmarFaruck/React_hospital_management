import React from 'react';
import Image from 'react-bootstrap/Image';
import img1 from '../../images/Education/bannern.webp'   
 
const EducationBanner = () => {
    return (
        <>
            
            <Image src={img1} className='img-fluid mx-auto d-block' rounded />   
        </>
    );
};

export default EducationBanner;