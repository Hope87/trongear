import React from 'react';
import styles from './Buttons.module.scss';

const BtnGarage = ({ title, image }) => (
  <div className={styles.btnGarage}>
    <img src={image} alt={title} />
    <h4>{title}</h4>
  </div>
);

export default BtnGarage;
