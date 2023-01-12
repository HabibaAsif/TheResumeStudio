import React from 'react'
import './Template.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { useContext } from "react";
import { themeContext } from "../../Context";


import temp1 from '../../img/resume1.png'
import temp2 from '../../img/resume2.png'


const Template = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='template'>

        <span style={{color: darkMode? 'var(--orange)': ''}}>Templates</span>

      <Swiper         
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="template-slider">

        <SwiperSlide> <img src={temp1} alt=""/> </SwiperSlide>
        <SwiperSlide> <img src={temp2} alt=""/> </SwiperSlide>
        <SwiperSlide> <img src={temp1} alt=""/> </SwiperSlide>
        <SwiperSlide> <img src={temp2} alt=""/> </SwiperSlide>
        <SwiperSlide> <img src={temp1} alt=""/> </SwiperSlide>
        <SwiperSlide> <img src={temp2} alt=""/> </SwiperSlide>

      </Swiper>      
    </div>
  )
}

export default Template
