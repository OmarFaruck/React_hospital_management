import React, { Component } from "react";
import Slider from "react-slick";
import Cards1 from "../Cards/Cards_1";
import Cards2 from "../Cards/Cards_2";
import Cards3 from "../Cards/Cards_3";
import Cards4 from "../Cards/Cards_4";
import Cards5 from "../Cards/Cards_5";
import Cards6 from "../Cards/Cards_6";
 
 

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
            <Cards1/>
          </div>
          <div>
          <Cards2/>
          </div>
          <div>
          <Cards3/>
          </div>
          <div>
          <Cards4/>
          </div>
          <div>
          <Cards5/>
          </div>
          <div>
          <Cards6/>
          </div>
        </Slider>
       
      </div> 
    );
  }
}