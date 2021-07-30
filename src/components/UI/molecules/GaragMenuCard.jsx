import React from 'react';
import styles from './GaragMenuCard.module.scss'
import garageElements from '../../../images/garages/on/garage_elements_on-01.svg';
import flag from '../../../images/garages/off/elements-05.svg';

const GaragMenuCard = ({title, car, background}) => {
    return (
      <div className={styles.garageMenuCard}>
        <img src={garageElements} alt="" />
        <div className={styles.garageMenuImages}>
          <img src={background} alt="" />
          <img src={car} alt="" />
        </div>
        <div className={styles.garageMenuBox}>
          <div className={styles.garageMenuFlag}>
            <img src={flag} alt="flag" />
            <h3>{title}</h3>
          </div>
          <div className={styles.garageMenuText}>
            <h4>price:</h4>
            <p>The game requires a browser plugin </p>
            <p>TronLink or TronWallet</p>
          </div>
        </div>
      </div>
    );
};

export default GaragMenuCard;