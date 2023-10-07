import React from 'react'; 

import SpecialitieCardSlide from '../SpecialitieCard/SpecialitieCardSlide'; 
import Specialities from '../SpecialitieCard/Specialities';
import MainCertification from '../../MainHomePage/Certification/Main_Certification';
import Manipal from '../../MainHospitalpages/Manipal/Manipal';
import HospitalAnimation from '../../MainHospitalpages/HospitalAnimation/HospitalAnimation';
import AboutTeamSlider from '../../MAinAboutTeamPage/AboutTeamSlider/AboutTeamSlider';
 
const MainSpecialitie = () => {
    return (
        <>
           <AboutTeamSlider/> 
            
            <SpecialitieCardSlide/> 

            <Specialities/>

            <MainCertification/> 

            <Manipal/> 
            
            <HospitalAnimation/>
 

        </>
    );
};

export default MainSpecialitie;