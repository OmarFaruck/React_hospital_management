import React, { Component } from "react";
import Slider from "react-slick";
import Technology1 from "./Technology_1";
import Technology2 from "./Technology_2";
import Technology3 from "./Technology_3";
import Technology4 from "./Technology_4";
import Technology5 from "./Technology_5";
import Technology6 from "./Technology_6";
import Technology7 from "./Technology_7";
 
  
 
 

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
            <Technology1/>
          </div>
          <div>
          <Technology2/>
          </div>
          <div>
          <Technology3/>
          </div>
          <div>
          <Technology4/>
          </div>
          <div>
          <Technology5/>
          </div>
          <div>
          <Technology6/>
          </div>
          <div>
          <Technology7/>
          </div>
        </Slider>
       
      </div> 
    );
  }
}