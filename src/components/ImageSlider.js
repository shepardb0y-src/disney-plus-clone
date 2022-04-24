import React from 'react';
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    }
    return (
        <Carousel {...settings}>

      <Wrap>
          <img src="/images/slider-badging.jpg"/>
      </Wrap>
      <Wrap>
          <img src="/images/slider-badging.jpg"/>
      </Wrap>

        </Carousel>
    );
}

export default ImageSlider;


const Carousel = styled(Slider)`
margin-top:20px;

`
const Wrap = styled.div`
`