import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// -------------- import images and slider ---------------------- 
import badging from '../images/slider-badging.jpg'
import badag from '../images/slider-badag.jpg'
import scale from '../images/slider-scale.jpg'
import scales from '../images/slider-scales.jpg'
// -------------- import images and slider ---------------------- 


function ImgCarousel() {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // swipeToSlide: true,
    // pauseOnHover: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src={badag} alt="" />
      </Wrap>
      <Wrap>
        <img src={badging} alt="" />
      </Wrap>
      <Wrap>
        <img src={scale} alt="" />
      </Wrap>
      <Wrap>
        <img src={scales} alt="" />
      </Wrap>
    </Carousel>
  )
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  .slick-prev:before, .slick-next:before {
    content: '';
  }

  ul li button{
    &::before{
      font-size: 10px;
      color: rgb(150,158,171);
    }
  }

  li.slick-active button::before{
    color: #fff;
  }

  .slick-list{
    overflow: visible;
  }

  button{
    z-index: 1;
  }
`

const Wrap = styled.div`
  cursor: pointer;
    img{
      width: 100%;
      height: 100%;
      border-radius: 5px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px ,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
      border: 4px solid transparent;
      transition: all 300ms;

      &:hover{
        border: solid 4px rgba(249, 249, 249, 0.8) ;
      }
    }

`

export default ImgCarousel