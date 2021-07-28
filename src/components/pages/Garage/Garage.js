import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './Garage.module.scss';
import Header from '../../UI/organisms/Header';
import logo from '../../../images/logo.png';
import BtnGarage from '../../UI/atoms/BtnGarage';
import Timer from '../../UI/organisms/Timer';
import GaragePanel from '../../UI/molecules/GaragePanel';
import buttonsImg from '../../../images/buttons/buttons-06.svg';
import garageElements from '../../../images/garages/off/elements-04.svg';
import amg from '../../../images/G_5_cars/on/4_amg.png';
import mclaren from '../../../images/G_5_cars/on/5_mclaren.png';
import flag from '../../../images/svg/elements-45.svg';
import GarageScale from '../../UI/molecules/GarageScale';

const Garage = () => {
  return (
    <div className={styles.garage}>
      <Grid container>
        <Grid item xs={12}>
          <Header headerLogo={logo} />
        </Grid>

        <Grid item xs={12}>
          <div className={styles.buttonsBox}>
            <div className={styles.buttonsBoxBtn}>
              <BtnGarage title="about" image={buttonsImg} />
              <div>
                <BtnGarage title="garage" image={buttonsImg} />
              </div>
            </div>
            <div className={styles.buttonsBoxTimer}>
              <p>race of the day</p>
              <Timer />
            </div>
            <div className={styles.buttonsBoxBtn}>
              <BtnGarage title="racing" image={buttonsImg} />
              <div>
                <BtnGarage title="top" image={buttonsImg} />
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} container>
          <Grid item xs={7}>
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
            </div>
          </Grid>

          <Grid item xs={5}></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Garage;
