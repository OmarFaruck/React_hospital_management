import React, { Component } from "react";
import Slider from "react-slick";
import Machines1 from "./Machines_1";
import Machines2 from "./Machines_2";
import Machines3 from "./Machines_3";
import Machines4 from "./Machines_4";
import Machines5 from "./Machines_5";
import Machines6 from "./Machines_6";
import Machines7 from "./Machines_7";
import Machines8 from "./Machines_8";
 

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
           <Machines1/>
          </div>
          <div>
          <Machines2/>
          </div>
          <div>
          <Machines3/>
          </div>
          <div>
          <Machines4/>
          </div>
          <div>
          <Machines5/>
          </div>
          <div>
          <Machines6/>
          </div>
          <div>
          <Machines7/>
          </div>
          <div>
          <Machines8/>
          </div>
        </Slider>
       
      </div> 
    );
  }
}