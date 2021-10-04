import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Racing.module.scss';
import Header from '../../UI/molecules/Header';
import logo from '../../../images/logo.png';
import Modal from '../../UI/atoms/Modal';
import Timer from '../../UI/atoms/Timer';
import elements_13 from '../../../images/elements-13.svg';
import StatisticElement from '../../UI/molecules/StatisticElement';
import TransactionsCard from '../../UI/molecules/TransactionsCard';
import TimeCard from '../../UI/molecules/TimeCard';
import StatisticElementContainer from '../../UI/organisms/StatisticElementContainer';
import ButtonsBox from '../../UI/molecules/ButtonsBox';
import HeaderForMobile from '../../UI/molecules/HeaderForMobile';
import TopPanelMob from '../../UI/molecules/TopPanelMob';
import leftImage from '../../../images/topFooterLeftImage.png';
import rightImage from '../../../images/topFooterRightImage.png';

const Racing = ({ modal, setModal }) => {
  const width = window.innerWidth;
  return (
    <div className={styles.racing}>
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

        <Grid
          container
          item
          xs={width > 576 ? 6 : 12}
          justifyContent="flex-end"
        >
          {!modal ? (
            <div
              className={styles.racingTimer}
              style={
                width > 576 ? { marginRight: "20px" } : { margin: "40px auto" }
              }
            >
              <Timer />
            </div>
          ) : (
            <div style={{ opacity: 0 }} className={styles.racingTimer}>
              <Timer />
            </div>
          )}
        </Grid>

        {width > 576 && (
          <Grid container item xs={6}>
            {!modal ? (
              <div
                className={styles.racingTimer}
                style={{ marginLeft: "20px" }}
              >
                <Timer color="#ff1437" />
              </div>
            ) : (
              <div style={{ opacity: 0 }} className={styles.racingTimer}>
                <Timer />
              </div>
            )}
          </Grid>
        )}

        <Grid item xs={12}>
          <div className={styles.racingBtn}>
            <ButtonsBox />
          </div>
        </Grid>

        {width < 576 && (
          <Grid item xs={12}>
            <div className={styles.racingPanel}>
              <TopPanelMob />
            </div>
          </Grid>
        )}

        <Grid item xs={width > 576 ? 6 : 12}>
          <div className={styles.statisticElementTitle}>
            <h3>owerall Statistics</h3>
            <h3>personal Statistics</h3>
          </div>

          <StatisticElementContainer />
        </Grid>

        <Grid item xs={width > 576 ? 6 : 12}>
          <div className={styles.transfer}>
            <h3 className={styles.transferTitle}>transfer</h3>

            <div className={styles.transferCards}>
              <TransactionsCard />
              <TimeCard headerTitle="TIME" footerNone />
              <TimeCard headerTitle="amount" opacity hidden />
            </div>

            <div className={styles.transferElements}>
              <div className={styles.transferElementContainer}>
                <StatisticElement
                  flagText="all updated"
                  elementText="view top rasers"
                  hiddenText
                  payout="0"
                  elementImg={elements_13}
                  hiddenImg
                  color="var(--yellow)"
                />
                <StatisticElement
                  flagText="all taken"
                  elementText="view top rasers"
                  hiddenText
                  payout="0"
                  elementImg={elements_13}
                  hiddenImg
                  color="var(--yellow)"
                />
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.racingFooter}>
            <h4 className={styles.racingFooterTitle}>EARN BY PROMOTING</h4>
            {width < 576 && (
            <div className={styles.imageContainer}>
              <div className={styles.image}>
                <img src={leftImage} alt="leftImage" />
              </div>
              <div className={styles.image}>
                <img src={rightImage} alt="rightImage" />
              </div>
            </div>
          )}
          </div>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default Racing;
