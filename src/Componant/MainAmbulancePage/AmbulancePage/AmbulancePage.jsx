import React from 'react';
import Ambulances from '../Ambulance/Ambulances.jsx'
import Services from '../../MainHomePage/Services/Services.jsx';
import HospitalAnimation from '../../MainHospitalpages/HospitalAnimation/HospitalAnimation.jsx';
import MainCertification from '../../MainHomePage/Certification/Main_Certification.jsx';
const AmbulancePage = () => {
    return (
        <>
            <Ambulances/>
            <Services/>
            <HospitalAnimation/>
            <MainCertification/>
        </>
    );
};

export default AmbulancePage;