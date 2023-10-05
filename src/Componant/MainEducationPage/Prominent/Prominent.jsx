import React from 'react'; 
import ProminentSlide from '../Prominent/ProminentSlide.jsx'
import background from '../../images/blog/Hospitality.webp'
import '../Prominent/Prominent.css'
const Prominent = () => {
    return (
        <section id='Prominent'  style={{
            backgroundImage: `url(${background})`, 
            backgroundColor:'black', 
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            height:'100%'
        
        }}>
            <div className="container-fluid">
                <div className="text-center">
                    <h2>PROMINENT RECRUITERS</h2>
                    <span><hr /></span>
                    <h4>Exciting Job Opportunities in Healthcare Industry from the Top Recruiters</h4>
                </div>
                 <ProminentSlide/>
            </div>
        </section>
    );
};

export default Prominent;