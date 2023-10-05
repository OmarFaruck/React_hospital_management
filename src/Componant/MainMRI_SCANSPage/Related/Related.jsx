import React from 'react';
import RelatedSlide from '../Related/RelatedSlide.jsx'
import '../Related/Related.css'
const Related = () => {
    return (
        <section id='related'>
            <div className="container-fluid">
               <div className="text-center">
               <h4>Related Products</h4>
               </div>
               <RelatedSlide/>
            </div>
        </section>
    );
};

export default Related;