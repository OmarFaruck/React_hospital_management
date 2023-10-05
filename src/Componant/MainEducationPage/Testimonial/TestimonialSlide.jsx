 
import Slider from "react-slick";
import React, { Component } from "react"; 
// import img from '../../images/TESTIMONIAL/img1.png'
import '../Testimonial/Testimonial.css'
export default class Fade extends Component {
    render() {
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div> 
          <Slider {...settings}>
            <div>
            <img src="https://zambellieye.com/wp-content/uploads/2017/05/featured_tab_3-2-220x220.png" alt="avatar" className="img-fluid rounded-circle shadow-1-strong mx-auto"/>
            <h1>Akash hossain</h1>
            <p>My name is Niraj, I pursued BSc. in Biotechnology from Ganesh Research Centre. To be honest I got a real-time exposure to all the authentic practicals & got so much skillful acquaintance from the expert teaching faculty.I must say, here we can gain each & every aspect of the programme.</p>
            </div>
            <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(12).webp"
              alt="avatar"
              className="rounded-circle shadow-1-strong mx-auto"
              
            />
             <h1>Rohima Khatun </h1>
            <p> My name is Nirajs, I pursued BSc. in Biotechnology from Ganesh Research Centre. To be honest I got a real-time exposure to all the authentic practicals & got so much skillful acquaintance from the expert teaching faculty.
I must say, here we can gain each & every aspect of the programme.</p>
            </div>
            <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(12).webp"
              alt="avatar"
              className="rounded-circle shadow-1-strong mx-auto"
               
            />
             <h1>Niraj Mehra</h1>
             <p> My name is Niraj, I pursued BSc. in Biotechnology from Ganesh Research Centre. To be honest I got a real-time exposure to all the authentic practicals & got so much skillful acquaintance from the expert teaching faculty.
I must say, here we can gain each & every aspect of the programme.</p>
            </div> 
            <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              alt="avatar"
              className="rounded-circle shadow-1-strong mx-auto"
             
            />
             <h1>Akash hossain</h1>
             <p> My name is Akash hossain, I pursued BSc. in Biotechnology from Ganesh Research Centre. To be honest I got a real-time exposure to all the authentic practicals & got so much skillful acquaintance from the expert teaching faculty.
I must say, here we can gain each & every aspect of the programme.</p>
            </div>

          </Slider>
        </div>
      );
    }
  }