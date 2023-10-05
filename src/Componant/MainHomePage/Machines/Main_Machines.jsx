import React from 'react';
import Machines from './Machines';
import '../Machines/Main_Machines.css'
const Main_Machines = () => {
    return (
        <section id='Main_Machines'>
            <div className="container-fluid">
                <h1 style={{padding:'20px 0px'}}>List of Machines</h1>
                <Machines/>
            </div>
        </section>
    );
};

export default Main_Machines;