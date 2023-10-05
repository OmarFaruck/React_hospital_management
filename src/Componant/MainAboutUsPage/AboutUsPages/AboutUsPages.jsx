import React from 'react';
import AboutUsPage from '../AboutUsPage';
import Manipal from '../../MainHospitalpages/Manipal/Manipal';
import HospitalAnimation from '../../MainHospitalpages/HospitalAnimation/HospitalAnimation';
import SpecialitieCardSlide from '../../MainSpecialitiesPage/SpecialitieCard/SpecialitieCardSlide';

const AboutUsPages = () => {
    return (
        <>
            <AboutUsPage/>
            <Manipal/>
            <HospitalAnimation/>
            <SpecialitieCardSlide/> 
        </>
    );
};

export default AboutUsPages;