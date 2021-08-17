import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import amg from '../../../images/cars/G_5_cars/on/4_amg.png';
import mclaren from '../../../images/cars/G_5_cars/on/5_mclaren.png';
import styles from './Slider.module.scss';

const Slider = () => {
  return (
    <AwesomeSlider cssModule={styles}>
      <div>
        <img src={amg} alt="" />
      </div>
      <div>
        <img src={mclaren} alt="" />
      </div>
    </AwesomeSlider>
  );
};

export default Slider;
