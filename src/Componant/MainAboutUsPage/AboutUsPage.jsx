import React from 'react';
import '../MainAboutUsPage/AboutUsPage.css'
import Aboutimg from './Aboutimg/Aboutimg';
import AboutText from './AboutText/AboutText';
import Client from './Client/Client';
const AboutUsPage = () => {
    return (
        <section id='AboutUsPage'>
          <div className="text-center" data-aos="zoom-in-right">
            <h1>About Us</h1>
          </div>
          <Aboutimg/>
          <AboutText/>
          <Client/>
        </section>
    );
};

export default AboutUsPage;