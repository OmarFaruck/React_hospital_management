import React from 'react';
import SpecialitieCard from '../SpecialitieCard/SpecialitieCard.jsx'
import '../SpecialitieCard/SpecialitieCard.css' 
const SpecialitieCardSlide = () => {
    return (
        <section id='SpecialitieCardSlide'>
            <div className="container-fluid">
                <div className="text-center">
                <h1>Centre of excellence</h1>
                </div>
            <SpecialitieCard/> 

            </div>
        </section>
        
    );
};

export default SpecialitieCardSlide;