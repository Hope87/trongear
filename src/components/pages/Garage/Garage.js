import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './Garage.module.scss';
import Header from '../../UI/organisms/Header';
import logo from '../../../images/logo.png';
import BtnGarage from '../../UI/atoms/BtnGarage';
import Timer from '../../UI/molecules/Timer';
import buttonsImg from '../../../images/buttons/buttons-06.svg';
import garageElements from '../../../images/garages/off/elements-04.svg';
import GarageMain from '../../UI/organisms/GarageMain';
import GarageCards from '../../UI/organisms/GarageCards';

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

              <GarageMain />
            </div>
          </Grid>

          <Grid item xs={5}>
            <GarageCards />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Garage;
