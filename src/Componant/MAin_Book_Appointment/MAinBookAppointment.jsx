import React from 'react';
import BookAppointment from '../Book_Appointment/BookAppointment';
import Packege from '../MainHomePage/Packege/Packege';
import MainBlog from '../MainHomePage/Blog/MainBlog'; 
import Testimonial from '../MainEducationPage/Testimonial/Testimonial';

const MAinBookAppointment = () => {
    return (
        <>
            <BookAppointment/>
            <Packege/>
            <MainBlog/> 
            <Testimonial/>
        </>
    );
};

export default MAinBookAppointment;