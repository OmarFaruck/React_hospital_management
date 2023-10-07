import React from 'react'; 
import AllCategory from '../AllCategory/AllCategory';
import MRITest from '../MRITest/MRITest';
import Frequently from '../Frequently/Frequently';
import Related from '../Related/Related';
import HospitalAnimation from '../../MainHospitalpages/HospitalAnimation/HospitalAnimation';
import Slider from '../../MainHomePage/Slider/Slider';

const MRI_SCAN = () => {
    return (
        <> 
            <Slider/>
            <AllCategory/>
            <MRITest/>
            <Frequently/>
            <Related/>
            <HospitalAnimation/>
        </>
    );
};

export default MRI_SCAN;