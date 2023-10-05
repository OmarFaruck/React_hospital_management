import React, { Component } from "react";
import Slider from "react-slick";
import SpecialitieCard1 from "./SpecialitieCard_1";
import SpecialitieCard2 from "./SpecialitieCard_2"; 
import SpecialitieCard3 from "./SpecialitieCard_3"; 
import SpecialitieCard4 from "./SpecialitieCard_4"; 
import SpecialitieCard5 from "./SpecialitieCard_5"; 
import SpecialitieCard6 from "./SpecialitieCard_6"; 
import SpecialitieCard7 from "./SpecialitieCard_7"; 
import SpecialitieCard8 from "./SpecialitieCard_8"; 
import SpecialitieCard9 from "./SpecialitieCard_9"; 
import SpecialitieCard10 from "./SpecialitieCard_10"; 
 
 

 
 

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
          <div style={{padding:'10px'}}>
         <SpecialitieCard1/>
          </div>
          <div>
          <SpecialitieCard2/>
          </div>
          <div>
          <SpecialitieCard3/>
          </div>
          <div>
          <SpecialitieCard4/>
          </div>
          <div>
          <SpecialitieCard5/>
          </div>
          <div>
          <SpecialitieCard6/>
          </div>
          <div>
          <SpecialitieCard7/>
          </div>
          <div>
          <SpecialitieCard8/>
          </div>
          <div>
          <SpecialitieCard9/>
          </div>
          <div>
          <SpecialitieCard10/>
          </div>
        </Slider>
       
      </div> 
    );
  }
}


