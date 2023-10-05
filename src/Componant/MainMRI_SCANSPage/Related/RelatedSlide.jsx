import React, { Component } from "react";
import Slider from "react-slick";
import Related1 from "./Related_1";
import Related2 from "./Related_2";
import Related3 from "./Related_3";
import Related4 from "./Related_4";
import Related5 from "./Related_5";
import Related6 from "./Related_6";
import Related7 from "./Related_7";
 

 
 

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
           <Related1/>
          </div>
          <div>
          <Related2/>
          </div>
          <div>
          <Related3/>
          </div>
          <div>
          <Related4/>
          </div>
          <div>
          <Related5/>
          </div>
          <div>
          <Related6/>
          </div>
          <div>
          <Related7/>
          </div>
        </Slider>
       
      </div> 
    );
  }
}