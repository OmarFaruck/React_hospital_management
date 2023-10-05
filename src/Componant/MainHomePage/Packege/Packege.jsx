import React from 'react';
import '../Packege/Packege.css' 
import Sliders from './Sliders';
const Packege = () => {
    return (
        <section id='Packege'>
            <div className="container-fluid">
                <div className="text-center">
                    <h1>Health Packages</h1>
                    <p>Early check ups are always better than delayed ones. Safety, precaution & care is depicted from the several health checkups. Here, we present simple & comprehensive health <br />packages for any kind of testing to ensure the early prescribed treatment to safeguard your health.</p>
                </div>
               <Sliders/>
            </div>
        </section>
    );
};

export default Packege;