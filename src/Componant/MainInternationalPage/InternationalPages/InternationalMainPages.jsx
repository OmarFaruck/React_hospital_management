import React from 'react';
import InternationalPages from './InternationalPages';
import InternationalCard from '../InternationalCard/InternationalCard';
import HospitalCard from '../../MainHospitalpages/HospitalCard/HospitalCard';
import HospitalAnimation from '../../MainHospitalpages/HospitalAnimation/HospitalAnimation';
import MainCertification from '../../MainHomePage/Certification/Main_Certification';

const InternationalMainPages = () => {
    return (
        <>
            <InternationalPages/>
            <InternationalCard/>
            <HospitalCard/>
            <HospitalAnimation/>
            <MainCertification/>
        </>
    );
};

export default InternationalMainPages;