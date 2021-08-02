import React from 'react';
import styles from '../../pages/Racing/Racing.module.scss'

const StatisticElement = () => {
    return (
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
          </div>
        </div>

        <div className={styles.statisticElementFooter}>
          <img src={scale_tuning_panel} alt="" />
          <p>
            00,000,000.00 <span>($)</span>
          </p>
        </div>
      </div>
    );
};

export default StatisticElement;