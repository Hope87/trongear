import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './Garage.module.scss';
import Header from '../../UI/molecules/Header';
import logo from '../../../images/logo.png';
import GarageCards from '../../UI/organisms/GarageCards';
import Links from '../../UI/atoms/Links';
import linksImg from '../../../images/panel-17.svg';
import leftPanel from '../../../images/panel-16.svg';
import GarageLeft from '../../UI/organisms/GarageLeft';
import Timer from '../../UI/atoms/Timer';
import Button from '../../UI/atoms/Button';
import buttonsImg from '../../../images/buttons-06.svg';
import Modal from '../../UI/molecules/Modal';

const headerPosition = {
  right: '3.5%',
};

const Garage = ({ modal, setModal }) => {
  return (
    <div className={styles.garage}>
      <Grid container>
        <Grid item xs={12}>
          <Header headerLogo={logo} headerModal={modal} setHeaderModal={setModal} languagePosition={headerPosition} />

          {modal && <Modal />}
        </Grid>

        <Grid item xs={12}>
          <div style={{ marginTop: '50px' }}>
            <Timer />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.buttonsBox}>
            <div className={styles.buttonsBoxBtn}>
              <Button title="about" image={buttonsImg} />
              <div>
                <Button title="garage" image={buttonsImg} />
              </div>
            </div>
            <div className={styles.buttonsBoxBtn}>
              <Button title="racing" image={buttonsImg} />
              <div>
                <Button title="top" image={buttonsImg} />
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} container>
          <Grid item xs={7}>
            <GarageLeft />
          </Grid>

          <Grid item xs={5}>
            <GarageCards />
          </Grid>
        </Grid>
        <div className={styles.garageLeftPanel}>
          <img src={leftPanel} alt="" />
        </div>
        <Links images={linksImg} />
      </Grid>
    </div>
  );
};

export default Garage;
