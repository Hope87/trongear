import React from 'react';
import styles from './MainInfo.module.scss'
import frame from '../../../images/icons/frame.svg';
import warning from '../../../images/icons/warning.svg';

const MainInfo = () => {
    return (
        <div className={styles.mainInfo}>
        <img src={frame} alt="frame" />
        <div className={styles.mainInfoBox}>
          <p>
            <span>Important information</span>
            <br />
            The game requires a browser plugin
            <br />
            <span>TronLink</span> or <span>TronWallet</span>
          </p>
        </div>

        <div className={styles.mainInfoWarning}>
          <img src={warning} alt="Warning" />
        </div>
      </div>
    );
};

export default MainInfo;