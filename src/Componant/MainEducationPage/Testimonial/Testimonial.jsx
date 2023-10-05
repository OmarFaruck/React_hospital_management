import React from 'react';
import TestimonialSlide from './TestimonialSlide';
import '../Testimonial/Testimonial.css'

const Testimonial = () => {
    return (
        <section id='Testimonial'>
            <div className="container">
                <div className="text-center">
                    <h3>STUDENT TESTIMONIAL</h3>
                    <TestimonialSlide/>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;