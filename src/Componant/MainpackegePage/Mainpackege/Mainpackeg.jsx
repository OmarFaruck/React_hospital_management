import React from 'react'; 
import PackegeBannerSlider from './../PackegeBanner/PackegeBannerSlider';
import Checkup from '../Checkup/Checkup';
import Packegecard from '../Packegecard/Packegecard';
import Manipal from '../../MainHospitalpages/Manipal/Manipal';
const Mainpackeg = () => {
    return (
        <> 
            <PackegeBannerSlider/>
            <Checkup/>
            <Packegecard/>
            <Manipal/>
        </>
    );
};

export default Mainpackeg;