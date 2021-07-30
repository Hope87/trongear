import React, { useState } from 'react';
import styles from './Main.module.scss';
import linksImg from '../../../images/icons/element_3_1-14.svg';
import Header from '../../UI/molecules/Header';
import Links from '../../UI/atoms/Links';
import Modal from '../../UI/molecules/Modal';
import logo from '../../../images/logo.png';
import letsRide from '../../../images/lets_ride.png';
import frame from '../../../images/icons/frame.svg';
import warning from '../../../images/icons/warning.svg';

const Home = () => {
  const [modal, setModal] = useState();

  return (
    <div className={styles.main}>
      <Header mainModal={modal} onModal={setModal} />

      {modal && <Modal />}

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

      <Links images={linksImg} />
    </div>
  );
};
export default Home;
