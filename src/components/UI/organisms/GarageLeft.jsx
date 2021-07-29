import React from 'react';
import styles from './GarageLeft.module.scss'
import garageElements from '../../../images/garages/off/elements-04.svg';
import GarageMain from '../../UI/organisms/GarageMain';

const GarageLeft = () => {
    return (
        <div className={styles.garageLeft}>
        <div className={styles.garageLeftHeader}>
          <h2>garage 1</h2>
          <div className={styles.garageLeftHeaderItems}>
            <img src={garageElements} alt="" />
            <p>
              <span>0</span> TRX
            </p>
          </div>
        </div>

        <GarageMain />
      </div>
    );
};

export default GarageLeft;