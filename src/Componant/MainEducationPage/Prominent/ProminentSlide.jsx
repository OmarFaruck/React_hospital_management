import React, { Component } from "react";
import Slider from "react-slick";
import Prominent1 from "./Prominent_1";
import Prominent2 from "./Prominent_2";
import Prominent3 from "./Prominent_3";
import Prominent4 from "./Prominent_4";
import Prominent5 from "./Prominent_5";
import Prominent6 from "./Prominent_6";
import Prominent7 from "./Prominent_7";

 
 

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
            <Prominent1/>
          </div>
          <div>
          <Prominent2/>
          </div>
          <div>
          <Prominent3/>
          </div>
          <div>
          <Prominent4/>
          </div>
          <div>
          <Prominent5/>
          </div>
          <div>
          <Prominent6/>
          </div>
          <div>
          <Prominent7/>
          </div>
        </Slider>
       
      </div> 
    );
  }
}