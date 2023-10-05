import React from 'react';
import SpecialitieBanner from '../SpecialitieBanner/SpecialitieBanner';

import SpecialitieCardSlide from '../SpecialitieCard/SpecialitieCardSlide'; 
import Specialities from '../SpecialitieCard/Specialities';
import MainCertification from '../../MainHomePage/Certification/Main_Certification';
import Manipal from '../../MainHospitalpages/Manipal/Manipal';
import HospitalAnimation from '../../MainHospitalpages/HospitalAnimation/HospitalAnimation';
 
const MainSpecialitie = () => {
    return (
        <>
            <SpecialitieBanner/>
            
            <SpecialitieCardSlide/> 

            <Specialities/>

            <MainCertification/> 

            <Manipal/> 
            
            <HospitalAnimation/>
 

        </>
    );
};

export default MainSpecialitie;