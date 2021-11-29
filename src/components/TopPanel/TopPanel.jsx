import React from 'react';
import styles from './TopPanel.module.scss';

const TopPanel = () => {
  return (
    <div className={styles.topPanel}>
      <div className={styles.hour}>p/hour</div>
      <div className={styles.day}>p/day</div>
      <div className={styles.total}>total</div>
      <div className={styles.oneMultOne}>1x1</div>
    </div>
  );
};

export default TopPanel;