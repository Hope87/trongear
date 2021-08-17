import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './GarageMenu.module.scss';
import Header from '../../UI/molecules/Header';
import logo from '../../../images/logo.png';
import GarageCards from '../../UI/organisms/GarageCards';
import GarageMenuLeft from '../../UI/organisms/GarageMenuLeft';
import Timer from '../../UI/atoms/Timer';
import Modal from '../../UI/molecules/Modal';
import ButtonsBox from '../../UI/molecules/ButtonsBox';

const Garage = ({ modal, setModal, info }) => {
  return (
    <div className={styles.garage}>
      <Grid container>
        <Grid item xs={12}>
          <Header headerLogo={logo} headerModal={modal} setHeaderModal={setModal} />

          {modal && <Modal />}
        </Grid>

        <Grid item xs={12}>
          {!modal ? (
            <div className={styles.garageTimer}>
              <Timer />
            </div>
          ) : (
            <div style={{ opacity: 0 }} className={styles.garageTimer}>
              <Timer />
            </div>
          )}
        </Grid>

        <Grid item xs={12}>
          <div className={styles.garageBtn} style={{ marginTop: '-60px' }}>
            <ButtonsBox />
          </div>
        </Grid>

        <Grid item xs={12} container>
          <Grid item xs={7}>
            <GarageMenuLeft info={info}/>
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
