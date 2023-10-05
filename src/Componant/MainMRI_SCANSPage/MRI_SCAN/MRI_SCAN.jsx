import React from 'react';
import MRILogo from '../MRILogo/MRILogo';
import AllCategory from '../AllCategory/AllCategory';
import MRITest from '../MRITest/MRITest';
import Frequently from '../Frequently/Frequently';
import Related from '../Related/Related';
import HospitalAnimation from '../../MainHospitalpages/HospitalAnimation/HospitalAnimation';

const MRI_SCAN = () => {
    return (
        <>
            <MRILogo/>
            <AllCategory/>
            <MRITest/>
            <Frequently/>
            <Related/>
            <HospitalAnimation/>
        </>
    );
};

export default MRI_SCAN;