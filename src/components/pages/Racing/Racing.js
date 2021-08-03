import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Racing.module.scss';
import Header from '../../UI/molecules/Header';
import logo from '../../../images/logo.png';
import Modal from '../../UI/molecules/Modal';
import Timer from '../../UI/atoms/Timer';
import Button from '../../UI/atoms/Button';
import buttonsImg from '../../../images/buttons-06.svg';
import elements_01 from '../../../images/elements-01.svg';
import elements_07 from '../../../images/elements-07.svg';
import scale_tuning_panel from '../../../images/scale_tuning_panel.svg';
import elements_13 from '../../../images/elements-13.svg';

const Racing = ({ modal, setModal }) => {
  return (
    <div className={styles.racing}>
      <Grid container>
        <Grid item xs={12}>
          <Header headerLogo={logo} headerModal={modal} setHeaderModal={setModal} />

          {modal && <Modal />}
        </Grid>

        <Grid container item xs={6} justifyContent="flex-end">
          <Timer />
        </Grid>

        <Grid container item xs={6} justifyContent="flex-start">
          <Timer color="#ff1437" />
        </Grid>

        <Grid item xs={12}>
          <div className={styles.buttonsBox} style={{ marginTop: '50px' }}>
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

        <Grid item container direction="row" justifyContent="space-around" xs={6}>
          <div className={styles.statisticElement}>
            <img src={elements_01} alt="" />
            <div className={styles.statisticElementBox}>
              <div className={styles.statisticElementFlag}>
                <img src={elements_07} alt="" />
                <span>total invested </span>
              </div>

              <div className={styles.statisticElementText}>
                <span>Affiliate Payout</span>
                <p>000,000,000</p>
                <img className={styles.statisticElementTextImg} src={elements_13} alt="" />
              </div>
            </div>

            <div className={styles.statisticElementFooter}>
              <img src={scale_tuning_panel} alt="" />
              <p>
                00,000,000.00 <span>($)</span>
              </p>
            </div>
          </div>

          <div className={styles.statisticElement}>
            <img src={elements_01} alt="" />
            <div className={styles.statisticElementBox}>
              <div className={styles.statisticElementFlag}>
                <img src={elements_07} alt="" />
                <span>total invested </span>
              </div>

              <div className={styles.statisticElementText}>
                <span>Affiliate Payout</span>
                <p>000,000,000</p>
                <img className={styles.statisticElementTextImg} src={elements_13} alt="" />
              </div>
            </div>

            <div className={styles.statisticElementFooter}>
              <img src={scale_tuning_panel} alt="" />
              <p>
                00,000,000.00 <span>($)</span>
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Racing;
