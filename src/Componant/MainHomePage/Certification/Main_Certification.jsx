import React from 'react';
import Certification from './Certification';
import '../Certification/Certification.css'
const Main_Certification = () => {
    return (
        <section id='Certification'>
            <div className="container-fluid">
                <div className="text-center">
                <h3>Accreditations and Certification</h3>
                <span><hr /></span>
                </div>
                <Certification/>
            </div>
        </section>
    );
};

export default Main_Certification;