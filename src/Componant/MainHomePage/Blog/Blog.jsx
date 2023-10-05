import React, { Component } from "react";
import Slider from "react-slick";
import Blog1 from "./Blog_1";
import Blog2 from "./Blog_2";
import Blog3 from "./Blog_3";
import Blog4 from "./Blog_4";
import Blog5 from "./Blog_5";
import Blog6 from "./Blog_6";
 
 
 

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
         <Blog1/>
          </div>
          <div>
          <Blog2/>
          </div>
          <div>
          <Blog3/>
          </div>
          <div>
          <Blog4/>
          </div>
          <div>
          <Blog5/>
          </div>
          <div>
          <Blog6/>
          </div>
        </Slider>
       
      </div> 
    );
  }
}