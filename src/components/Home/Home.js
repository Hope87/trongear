import React from 'react';
import styles from './Home.module.scss';
import header from '../../images/icons/header.svg';
import burger from '../../images/icons/burger.svg';
import logo from '../../images/logo.png';
import letsRide from '../../images/lets_ride.png';
import frame from '../../images/icons/frame.svg';
import warning from '../../images/icons/warning.svg';
import linksImg from '../../images/icons/element_3_1-14.svg';
import menuImg from '../../images/icons/menu_bulb.svg';

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainHeader}>
        <img src={header} alt="header" />
        <img src={burger} alt="burger" />
        <h5>eng</h5>
      </div>

      <div className={styles.mainModal}>
        <img src={menuImg} alt="Menu" />
        <div className={styles.mainModalMenu}>
          <p>settings</p>
          <p>start chat</p>
          <p>Notification</p>
        </div>
      </div>

      <div className={styles.mainText}>
        <h1 className={styles.mainTextLogo}>
          <img src={logo} alt="logo" />
        </h1>
        <div className={styles.mainLetsRide}>
          <img src={letsRide} alt="letsRide" />
          <h2>let`s ride</h2>
        </div>
        <p>HOW IT WORKS</p>
      </div>

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

      <div className={styles.mainLinks}>
        <div className={styles.mainLinksImg}>
          <img src={linksImg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
