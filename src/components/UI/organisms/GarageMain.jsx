import React from 'react';
import styles from './GarageMain.module.scss'
import amg from '../../../images/G_5_cars/on/4_amg.png';
import mclaren from '../../../images/G_5_cars/on/5_mclaren.png';
import flag from '../../../images/svg/elements-45.svg';
import GarageScale from '../../UI/molecules/GarageScale';
import garageElements from '../../../images/garages/off/elements-04.svg';
import pointsRunk from '../../../images/svg/points_runk_lvl_garage.svg';
import buy_button from '../../../images/buttons/buy_button.png';
import unlock_icon from '../../../images/icons/unlock_icon.png';
import panel from '../../../images/svg/total_cars_panel.svg';


import Button from '../atoms/Button'

const btnFs = {
  fontSize: '18px',
}

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

        <div className={styles.garageLeftMainBtn}>
          <div className={styles.garageLeftMainBtnImg}>
            <img src={unlock_icon} alt="unlock_icon"/>
          </div>
          <Button title="BUY" image={buy_button} inlineStyle={btnFs}/>
        </div>
        
        <div className={styles.garageLeftMainScale}>
          <GarageScale scaleImage={pointsRunk}/>
          <GarageScale scaleImage={pointsRunk}/>
          <GarageScale scaleImage={pointsRunk}/>
        </div>
        <div className={styles.garageLeftMainPanel}>
      <img src={panel} alt="panel" />
      <div>
        <p>total cars in the garage </p>
        <span>0/5</span>
      </div>
    </div>
      </div>
    );
};

export default GarageMain;