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
import leftImage from '../../../images/topFooterLeftImage.png';
import rightImage from '../../../images/topFooterRightImage.png';
import Footer from '../../UI/molecules/Footer';
import footerLine from '../../../images/TopFooterLine.png';

const Top = ({ modal, setModal }) => {
  const width = window.innerWidth;
  
  return (
    <div className={styles.top}>
      <Grid container>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Grid item xs={12}>
              {width > 576 ? (
                <Header
                  headerLogo={logo}
                  headerModal={modal}
                  setHeaderModal={setModal}
                />
              ) : (
                <HeaderForMobile
                  headerModal={modal}
                  setHeaderModal={setModal}
                />
              )}

              {modal && <Modal />}
            </Grid>
          </div>
          <div className={styles.content}>
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
                <ButtonsBox page="top" />
              </div>
            </Grid>

            <Grid item xs={12}>
              {width > 576 ? <TopPanel /> : <TopPanelMob />}
            </Grid>
            <div className={styles.items}>
              <Grid item xs={12} lg={6}>
                <TopMainLeft />
              </Grid>

              <Grid item xs={12} lg={6}>
                <TopMainRight />
              </Grid>
            </div>
          </div>
          <div className={styles.footerBox}>
            <Grid item xs={12}>
              <div className={styles.topFooter}>
                <div>
                  <h4 className={styles.topFooterTitle}>
                    EARN BY PROMOTING
                    {width > 576 && (
                      <div className={styles.line}>
                        <img src={footerLine} alt="line" />
                      </div>
                    )}
                  </h4>
                </div>
                {width < 576 ? (
                  <div className={styles.imageContainer}>
                    <div className={styles.image}>
                      <img src={leftImage} alt="leftImage" />
                    </div>
                    <div className={styles.image}>
                      <img src={rightImage} alt="rightImage" />
                    </div>
                  </div>
                ) : (
                  <div className={styles.footer}>
                    <Footer />
                  </div>
                )}
              </div>
            </Grid>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Top;
