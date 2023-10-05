import React from 'react';
import HospitalBanner from '../HospitalBanner/HospitalBanner';
import HospitalCard from '../HospitalCard/HospitalCard';
import Manipal from '../Manipal/Manipal';
import HospitalAnimation from '../HospitalAnimation/HospitalAnimation';
import SpecialitieCardSlide from '../../MainSpecialitiesPage/SpecialitieCard/SpecialitieCardSlide';
import SideCardBer from '../../MAinOurDoctorsPages/SideCardBer/SideCardBer';
import '../Manipal/Manipal.css'  

const MainHospital = () => {
    return (
        <>
            <HospitalBanner/>
            <HospitalCard/>
            <Manipal/>
            <HospitalAnimation/>
            <SpecialitieCardSlide/> 
            <SideCardBer/>  

        </>
    );
};

export default MainHospital;