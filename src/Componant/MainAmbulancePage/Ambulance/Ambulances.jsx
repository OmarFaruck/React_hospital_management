import React from 'react'; 
import AmbulanceSlider from '../AmbulanceSlider/AmbulanceSlider.jsx'
const Ambulance = () => {
    return (
        <section id=''>
            <div className="container-fluid">
                <div className="text-center">
                    <h2 style={{fontFamily:'sans-serif', fontWeight:'bold', padding:'20px 0px'}}>Ambulance <span style={{color:'#3488A8'}}>Gallery</span></h2>
                </div>
                <AmbulanceSlider/>
            </div>
        </section>
    );
};

export default Ambulance;