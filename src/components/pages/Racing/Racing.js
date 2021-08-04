import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Racing.module.scss';
import Header from '../../UI/molecules/Header';
import logo from '../../../images/logo.png';
import Modal from '../../UI/molecules/Modal';
import Timer from '../../UI/atoms/Timer';
import Button from '../../UI/atoms/Button';
import buttonsImg from '../../../images/buttons-06.svg';
import elements_12 from '../../../images/elements-12.svg';
import elements_13 from '../../../images/elements-13.svg';
import elements_14 from '../../../images/elements-14.svg';
import yellowFlag from '../../../images/elements-07.svg';
import redFlag from '../../../images/elements-08.svg';
import StatisticElement from '../../UI/molecules/StatisticElement';

const elementImgInlineStyle = {
  width: '53px !important',
  height: '16px !important',
};

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

        <Grid item xs={6}>
          <div className={styles.statisticElementTitle}>
            <h3>owerall Statistics</h3>
            <h3>personal Statistics</h3>
          </div>
          <div className={styles.statisticElementContainer}>
            <StatisticElement
              flagText="total invested"
              elementText="ROYALTIES"
              payout="000,000,000"
              elementImg={elements_13}
              textColorWhite
              flagImg={redFlag}
              appearance="red"
            />
            <StatisticElement
              flagText="income p/hour"
              elementText="Affiliate Payout"
              payout="000,000,000"
              elementImg={elements_13}
              flagImg={yellowFlag}
              appearance="yellow"
            />
            <StatisticElement
              flagText="total payed"
              elementText="ROYALTIES"
              payout="000,000,000"
              elementImg={elements_13}
              textColorWhite
              flagImg={redFlag}
              appearance="red"
            />
            <StatisticElement
              flagText="cars in the race"
              elementText="view top rasers"
              payout="000,000,000"
              hiddenImg
              flagImg={yellowFlag}
              appearance="yellow"
            />
            <StatisticElement
              flagText="total riders"
              elementText="viev all riders"
              payout="000,000,000"
              elementImg={elements_14}
              textColorWhite
              flagImg={redFlag}
              appearance="silver"
            />
            <StatisticElement
              flagText="current assets"
              elementText="view top rasers"
              hiddenText
              payout="000,000,000"
              elementImg={elements_13}
              flagImg={yellowFlag}
            />
            <StatisticElement
              flagText="total cars"
              elementText="view all cars"
              payout="000,000,000"
              elementImg={elements_12}
              textColorWhite
              elementImgStyle={elementImgInlineStyle}
              flagImg={redFlag}
              appearance="silver"
            />
            <StatisticElement
              flagText="outputs"
              elementText="view top rasers"
              hiddenText
              payout="000,000,000"
              hiddenImg
              flagImg={yellowFlag}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Racing;
