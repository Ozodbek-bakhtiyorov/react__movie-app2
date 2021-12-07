import React, { useRef, useState } from "react";
// import { Swiper } from "swiper/react/swiper";
// import {SwiperSlide} from "swiper/react/swiper-slide";
// import img from '../../images/1.png';
// import "swiper/swiper.min.css";
// import SwiperCore, {
// //     Pagination
// // } from 'swiper';
import styled from "styled-components";
// SwiperCore.use([Pagination]);
export default function SliderComp() {
        return (
            <SliderContent >

            </SliderContent>
        );
}
const SliderContent = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`