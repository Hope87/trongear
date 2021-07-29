import React from 'react';
import styles from './Button.module.scss';

const Button = ({ title, image, inlineStyle }) => (
  <div className={styles.button}>
    <img src={image} alt={title} />
    <h4 style={{...inlineStyle}}>{title}</h4>
  </div>
);

export default Button;
