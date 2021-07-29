import React from 'react';
import styles from './GarageMain.module.scss'
import amg from '../../../images/G_5_cars/on/4_amg.png';
import mclaren from '../../../images/G_5_cars/on/5_mclaren.png';
import flag from '../../../images/svg/elements-45.svg';
import GarageScale from '../../UI/molecules/GarageScale';
import GaragePanel from '../../UI/molecules/GaragePanel';
import garageElements from '../../../images/garages/off/elements-04.svg';



const GarageMain = () => {
    return (
        <div className={styles.garageLeftMain}>
        <div className={styles.garageLeftMainCars}>
          <img src={amg} alt="" />
          <img src={mclaren} alt="" />
        </div>

        <div className={styles.garageLeftMainText}>
          <h3>car model</h3>
          <p>modification</p>
        </div>

        <div className={styles.garageLeftMainFlag}>
          <img src={flag} alt="flag" />
          <div className={styles.garageLeftMainFlagItems}>
            <img src={garageElements} alt="" />
            <p>
              <span>0</span> TRX
            </p>
          </div>
        </div>
        <div className={styles.garageLeftMainScale}>
          <GarageScale />
          <GarageScale />
          <GarageScale />
        </div>
        <GaragePanel />
      </div>
    );
};

export default GarageMain;