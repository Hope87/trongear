import React from 'react';
import { Redirect } from 'react-router-dom';
import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

SwiperCore.use([Navigation, A11y]);

const Slider = ({ filteredCars, onActive, onSetCarsCount }) => {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      onSlideNextTransitionEnd={() => onSetCarsCount((prevCount) => prevCount + 1)}
      onSlidePrevTransitionEnd={() => onSetCarsCount((prevCount) => prevCount - 1)}
      onSwiper={(swiper) => onSetCarsCount(swiper.activeIndex + 1)}
    >
      {filteredCars ? (
        <>
          <SwiperSlide>
            <LazyLoadImage effect="blur" src={!onActive ? filteredCars.car_1[0] : filteredCars.car_1[1]} alt="car" />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage effect="blur" src={!onActive ? filteredCars.car_2[0] : filteredCars.car_2[1]} alt="car" />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage effect="blur" src={!onActive ? filteredCars.car_3[0] : filteredCars.car_3[1]} alt="car" />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage effect="blur" src={!onActive ? filteredCars.car_4[0] : filteredCars.car_4[1]} alt="car" />
          </SwiperSlide>
          <SwiperSlide>
            <LazyLoadImage effect="blur" src={!onActive ? filteredCars.car_5[0] : filteredCars.car_5[1]} alt="car" />
          </SwiperSlide>
        </>
      ) : (
        <Redirect to="/garage" />
      )}
    </Swiper>
  );
};

export default Slider;
