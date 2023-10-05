import React from 'react';
import Slider from '../Slider/Slider';
import Services from '../Services/Services';
import Packege from '../Packege/Packege';
import Lifecycle from '../Lifecycle/Lifecycle';
import MainBlog from '../Blog/MainBlog';
import PatientBlog from '../PatientBlog/PatientBlog';
import Technology from '../Technology/Technology';
import MainMachines from '../Machines/Main_Machines';
import Paramedical from '../Paramedical/Paramedical';
import MainCertification from '../Certification/Main_Certification';

const HomePage = () => {
    return (
        <>
            <Slider/>
            <Services/>
            <Packege/>
            <Lifecycle/>
            <MainBlog/>
            <PatientBlog/>
            <Technology/>
            <MainMachines/>
            <Paramedical/>
            <MainCertification/>
        </>
    );
};

export default HomePage;