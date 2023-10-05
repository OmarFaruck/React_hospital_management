import React from 'react';
import PatientSlider from '../Patients/Patients.jsx'
const Patients = () => {
    return (
        <section id='Patients'>
            <div className="container-fluid">
                <div className="text-center">
                    <h2 style={{fontFamily:'sans-serif', fontWeight:'bold'}}>What Our <span style={{color:'#3488A8'}}>Patients</span> Say About Us</h2>
                </div>
                <PatientSlider/>
            </div>
        </section>
    );
};

export default Patients;