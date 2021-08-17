import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Racing.module.scss';
import Header from '../../UI/molecules/Header';
import logo from '../../../images/logo.png';
import Modal from '../../UI/molecules/Modal';
import Timer from '../../UI/atoms/Timer';
import elements_13 from '../../../images/elements-13.svg';
import StatisticElement from '../../UI/molecules/StatisticElement';
import TransactionsCard from '../../UI/molecules/TransactionsCard';
import TimeCard from '../../UI/molecules/TimeCard';
import StatisticElementContainer from '../../UI/organisms/StatisticElementContainer';
import ButtonsBox from '../../UI/molecules/ButtonsBox';

const Racing = ({ modal, setModal }) => {
  return (
    <div className={styles.racing}>
      <Grid container>
        <Grid item xs={12}>
          <Header headerLogo={logo} headerModal={modal} setHeaderModal={setModal} />

          {modal && <Modal />}
        </Grid>

        <Grid container item xs={6} justifyContent="flex-end">
          {!modal ? (
            <div className={styles.racingTimer} style={{ marginRight: '20px' }}>
              <Timer />
            </div>
          ) : (
            <div style={{ opacity: 0 }} className={styles.racingTimer}>
              <Timer />
            </div>
          )}
        </Grid>

        <Grid container item xs={6}>
          {!modal ? (
            <div className={styles.racingTimer} style={{ marginLeft: '20px' }}>
              <Timer color="#ff1437" />
            </div>
          ) : (
            <div style={{ opacity: 0 }} className={styles.racingTimer}>
              <Timer />
            </div>
          )}
        </Grid>

        <Grid item xs={12}>
          <div className={styles.racingBtn}>
            <ButtonsBox />
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className={styles.statisticElementTitle}>
            <h3>owerall Statistics</h3>
            <h3>personal Statistics</h3>
          </div>

          <StatisticElementContainer />
        </Grid>

        <Grid item xs={6}>
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
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Racing;
