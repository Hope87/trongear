import React from 'react';
import { Redirect } from 'react-router-dom';
import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, A11y]);

const Slider = ({ filteredCars, onActive }) => {
  return (
    <Swiper slidesPerView={1} navigation>
      {filteredCars ? (
        <>
          <SwiperSlide>
            <img src={!onActive ? filteredCars.car_1[0] : filteredCars.car_1[1]} alt="car" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={!onActive ? filteredCars.car_2[0] : filteredCars.car_2[1]} alt="car" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={!onActive ? filteredCars.car_3[0] : filteredCars.car_3[1]} alt="car" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={!onActive ? filteredCars.car_4[0] : filteredCars.car_4[1]} alt="car" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={!onActive ? filteredCars.car_5[0] : filteredCars.car_5[1]} alt="car" />
          </SwiperSlide>
        </>
      ) : (
        <Redirect to="/garage" />
      )}
    </Swiper>
  );
};

export default Slider;
