import React from 'react';
import styles from './Main.module.scss';
import { Grid } from '@material-ui/core';
import Header from '../../UI/molecules/Header';
import Modal from '../../UI/atoms/Modal';
import Timer from '../../UI/atoms/Timer';
import ButtonsBox from '../../UI/molecules/ButtonsBox';
import MainDescription from '../../UI/organisms/MainDescription';
import Links from '../../UI/atoms/Links';
import footerLogoForMobile from '../../../images/footerLogoForMobile.png';
import footerLogoForMobileSmall from '../../../images/footerLogoForMobileSmall.png';

const Main = ({ modal, setModal }) => {
  return (
    <div className={styles.main}>
      <Grid container>
        <div className={styles.wrapper}>
        <div className={styles.header}>
          <Grid item xs={12}>
            <Header headerModal={modal} setHeaderModal={setModal} />
          </Grid>
          <div className={styles.modal}>{modal && <Modal />}</div>
        </div>
        <div className={styles.content}>
          <Grid item xs={12}>
            {!modal ? (
              <div className={styles.mainTimer}>
                <Timer />
              </div>
            ) : (
              <div style={{ opacity: 0 }} className={styles.mainTimer}>
                <Timer />
              </div>
            )}
          </Grid>
          <Grid item xs={12}>
            <div className={styles.mainBtn}>
              <ButtonsBox />
            </div>
          </Grid>
          <Grid item xs={12}>
            <MainDescription />
          </Grid>
        </div>
        <div className={styles.footer}>
        <Grid item xs={12}>
          <div className={styles.mainFooter}>
            <div className={styles.bigImage}>
              <img src={footerLogoForMobile} alt="footer"></img>
              <div className={styles.smallImage}>
                <img src={footerLogoForMobileSmall} alt="footer"></img>
              </div>
              <div className={styles.footerLinks}>
                <Links />
              </div>
            </div>
          </div>
        </Grid>
        </div>
        </div>
      </Grid>
    </div>
  );
};
export default Main;
