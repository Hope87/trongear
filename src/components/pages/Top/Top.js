import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../UI/molecules/Header';
import styles from './Top.module.scss';
import logo from '../../../images/logo.png';
import Modal from '../../UI/atoms/Modal';
import Timer from '../../UI/atoms/Timer';
import TopPanel from '../../UI/molecules/TopPanel';
import TopPanelMob from '../../UI/molecules/TopPanelMob';
import TopMainLeft from '../../UI/organisms/TopMainLeft';
import TopMainRight from '../../UI/organisms/TopMainRight';
import ButtonsBox from '../../UI/molecules/ButtonsBox';
import HeaderForMobile from '../../UI/molecules/HeaderForMobile';

const Top = ({ modal, setModal }) => {
  return (
    <div className={styles.top}>
      <Grid container>
        <Grid item xs={12}>
          <div className={styles.desktopVersion}>
            <Header headerLogo={logo} headerModal={modal} setHeaderModal={setModal}/>
          </div>
          <div className={styles.mobileVersion}>
            <HeaderForMobile headerModal={modal} setHeaderModal={setModal}/>
          </div>
         

          {modal && <Modal />}
        </Grid>

        <Grid item xs={12}>
          {!modal ? (
            <div className={styles.topTimer}>
              <Timer />
            </div>
          ) : (
            <div style={{ opacity: 0 }} className={styles.topTimer}>
              <Timer />
            </div>
          )}
        </Grid>

        <Grid item xs={12}>
          <div className={styles.topBtn}>
            <ButtonsBox />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.desktopVersion}>
            <TopPanel />
          </div>
          <div className={styles.mobileVersion}>
            <TopPanelMob/>
          </div>
          
        </Grid>

        <Grid item xs={12} lg={6}>
          <TopMainLeft />
        </Grid>

        <Grid item xs={12} lg={6}>
          <TopMainRight />
        </Grid>

        <Grid item xs={12}>
          <div className={styles.topFooter}>
            <div>
              <h4 className={styles.topFooterTitle}>EARN BY PROMOTING</h4>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Top;
