import React from 'react'; 
import HospitalCard from '../HospitalCard/HospitalCard';
import Manipal from '../Manipal/Manipal';
import HospitalAnimation from '../HospitalAnimation/HospitalAnimation';
import SpecialitieCardSlide from '../../MainSpecialitiesPage/SpecialitieCard/SpecialitieCardSlide';
import SideCardBer from '../../MAinOurDoctorsPages/SideCardBer/SideCardBer';
import '../Manipal/Manipal.css'  
import AboutTeamSlider from '../../MAinAboutTeamPage/AboutTeamSlider/AboutTeamSlider';

const MainHospital = () => {
    return (
        <>
            <AboutTeamSlider/> 
            <HospitalCard/>
            <Manipal/>
            <HospitalAnimation/>
            <SpecialitieCardSlide/> 
            <SideCardBer/>  

        </>
    );
};

export default MainHospital;