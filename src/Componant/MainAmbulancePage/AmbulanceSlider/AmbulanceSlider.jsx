import React, { Component } from "react";
import Slider from "react-slick";
import Ambulance1 from "./Ambulance_1";
import Ambulance2 from "./Ambulance_2";
import Ambulance3 from "./Ambulance_3";
import Ambulance4 from "./Ambulance_4";
import Ambulance5 from "./Ambulance_5";
import Ambulance6 from "./Ambulance_6"; 
 
 
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true, 
      slidesToShow: 4, 
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000, 
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 510,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };
    
    return ( 
      <div> 
        <Slider {...settings}>
          <div>
            <Ambulance1/>
          </div>
          <div>
          <Ambulance2/>
          </div>
          <div>
          <Ambulance3/>
          </div>
          <div>
          <Ambulance4/>
          </div>
          <div>
          <Ambulance5/>
          </div>
          <div>
          <Ambulance6/>
          </div>
           
        </Slider>
       
      </div> 
    );
  }
}