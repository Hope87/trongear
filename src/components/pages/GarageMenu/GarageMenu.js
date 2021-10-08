import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './GarageMenu.module.scss';
import Header from '../../UI/molecules/Header';
import logo from '../../../images/logo.png';
import GarageCards from '../../UI/organisms/GarageCards';
import GarageMenuLeft from '../../UI/organisms/GarageMenuLeft';
import Timer from '../../UI/atoms/Timer';
import Modal from '../../UI/atoms/Modal';
import ButtonsBox from '../../UI/molecules/ButtonsBox';
import HeaderForMobile from '../../UI/molecules/HeaderForMobile';

const GarageMenu = ({ modal, setModal, garageNumber }) => {
  const width = window.innerWidth;
  return (
    <div className={styles.garageMenu}>
      <Grid container>
        <Grid item xs={12}>
        {width > 576 ? (
            <Header
              headerLogo={logo}
              headerModal={modal}
              setHeaderModal={setModal}
            />
          ) : (
            <HeaderForMobile headerModal={modal} setHeaderModal={setModal} />
          )}

          {modal && <Modal />}
        </Grid>

        <Grid item xs={12}>
          {!modal ? (
            <div className={styles.garageMenuTimer}>
              <Timer />
            </div>
          ) : (
            <div style={{ opacity: 0 }} className={styles.garageMenuTimer}>
              <Timer />
            </div>
          )}
        </Grid>

        <Grid item xs={12}>
          <div className={styles.garageMenuBtn}>
          {/* style={width > 576 ? {marginTop: '-60px'} :{marginTop: '0'}} */}
            <ButtonsBox />
          </div>
        </Grid>

        <Grid item xs={12} container>
          <Grid item xs={12} lg={7}>
            <GarageMenuLeft garageNumber={garageNumber} />
          </Grid>

          <Grid item xs={12} lg={5}>
            <GarageCards />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default GarageMenu;
