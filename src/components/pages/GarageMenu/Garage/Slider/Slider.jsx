import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import SwiperCore, { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

SwiperCore.use([Navigation, A11y])

const Slider = ({ filteredCars, activeSlides, onSetCarsCount, setSlideOn }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        navigation
        onSlideNextTransitionEnd={(swiper) => {
          onSetCarsCount(swiper.activeIndex + 1)
          setSlideOn(swiper.activeIndex)
        }}
        onSlidePrevTransitionEnd={(swiper) => {
          onSetCarsCount(swiper.activeIndex + 1)
          setSlideOn(swiper.activeIndex)
        }}
        onSwiper={(swiper) => {
          onSetCarsCount(swiper.activeIndex + 1)
        }}
      >
        {filteredCars ? (
          <>
            <SwiperSlide>
              <LazyLoadImage
                effect='blur'
                src={
                  activeSlides[0]
                    ? filteredCars.car_1[1]
                    : filteredCars.car_1[0]
                }
                alt='car'
              />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadImage
                effect='blur'
                src={
                  activeSlides[1]
                    ? filteredCars.car_2[1]
                    : filteredCars.car_2[0]
                }
                alt='car'
              />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadImage
                effect='blur'
                src={
                  activeSlides[2]
                    ? filteredCars.car_3[1]
                    : filteredCars.car_3[0]
                }
                alt='car'
              />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadImage
                effect='blur'
                src={
                  activeSlides[3]
                    ? filteredCars.car_4[1]
                    : filteredCars.car_4[0]
                }
                alt='car'
              />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadImage
                effect='blur'
                src={
                  activeSlides[4]
                    ? filteredCars.car_5[1]
                    : filteredCars.car_5[0]
                }
                alt='car'
              />
            </SwiperSlide>
          </>
        ) : (
          <Redirect to='/garage' />
        )}
      </Swiper>
    </div>
  )
}

export default Slider
