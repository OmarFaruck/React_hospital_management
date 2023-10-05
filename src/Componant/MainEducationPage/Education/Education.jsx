import React from 'react';
import EducationBanner from '../EducationBanner/EducationBanner';
import PARAMEDICAL from '../PARAMEDICAL/PARAMEDICALs';
import COURSES from '../COURSES/COURSES';
import RADIOLOGY from '../RADIOLOGY/RADIOLOGY';
import NIOSCourse from '../NIOSCourse/NIOS Course';
import Affliation from '../Affliation/Affliation';
import Prominent from '../Prominent/Prominent';
import Testimonial from '../Testimonial/Testimonial';
 
 

const Education = () => {
    return (
        <>
            <EducationBanner/>
           <PARAMEDICAL/>
           <COURSES/>
           <RADIOLOGY/> 
           <NIOSCourse/>
           <Affliation/>
           <Prominent/>
           <Testimonial/>
        </>
    );
};

export default Education;