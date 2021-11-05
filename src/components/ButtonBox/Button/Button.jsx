import React, { useState } from 'react';
import styles from './Button.module.scss';

const Button = ({ title, isActive }) => {
  
  return (
    <button className={styles.button}>
      <div className={styles.innerButton}>{title}</div>
    </button>
  );
};

export default Button;