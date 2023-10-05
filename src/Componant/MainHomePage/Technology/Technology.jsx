import React from 'react';
import Technologies from './Technologies';
import '../Technology/Technology.css'
const Technology = () => {
    return (
        <section id='Technology'>
            <div className="container-fluid">
                <h1>Technology Partners</h1>
                <Technologies/>
            </div>
        </section>
    );
};

export default Technology;