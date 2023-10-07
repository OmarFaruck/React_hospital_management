import React from 'react'; 
import Doctor from '../Doctor/Doctor';
import SideCardBer from '../../MAinOurDoctorsPages/SideCardBer/SideCardBer';
import SpecialitieCardSlide from '../../MainSpecialitiesPage/SpecialitieCard/SpecialitieCardSlide';
import AboutTeamSlider from '../AboutTeamSlider/AboutTeamSlider';

const AboutTeam = () => {
    return (
        <>
            <AboutTeamSlider/> 
            <Doctor/>
            <SideCardBer/>
            <SpecialitieCardSlide/> 
          
        </>
    );
};

export default AboutTeam;