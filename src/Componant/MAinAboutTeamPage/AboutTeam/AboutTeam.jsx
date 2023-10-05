import React from 'react';
import DoctorImg from '../DoctorImg/DoctorImg';
import Doctor from '../Doctor/Doctor';
import SideCardBer from '../../MAinOurDoctorsPages/SideCardBer/SideCardBer';
import SpecialitieCardSlide from '../../MainSpecialitiesPage/SpecialitieCard/SpecialitieCardSlide';

const AboutTeam = () => {
    return (
        <section id='AboutTeam'>
            <DoctorImg/>
            <Doctor/>
            <SideCardBer/>
            <SpecialitieCardSlide/> 
        </section>
    );
};

export default AboutTeam;