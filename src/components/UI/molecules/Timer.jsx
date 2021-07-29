import React from 'react';
import styles from './Timer.module.scss';
import timer from '../../../images/icons/timer-18.svg';
import cn from 'classnames';

const Timer = () => {
  return (
    <div className={styles.timer}>
      <div className={styles.flip}>
        <div className={styles.flipBox}>
          <img src={timer} alt="" />
          <span>0</span>
        </div>
        <div className={styles.flipBox}>
          <img src={timer} alt="" />
          <span>0</span>
        </div>
      </div>
      <div className={cn(styles.flip, styles.center)}>
        <div className={styles.flipBox}>
          <img src={timer} alt="" />
          <span>0</span>
        </div>
        <div className={styles.flipBox}>
          <img src={timer} alt="" />
          <span>0</span>
        </div>
      </div>
      <div className={styles.flip}>
        <div className={styles.flipBox}>
          <img src={timer} alt="" />
          <span>0</span>
        </div>
        <div className={styles.flipBox}>
          <img src={timer} alt="" />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
