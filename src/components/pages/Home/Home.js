import React, { useState } from 'react';
import styles from './Home.module.scss';
import logo from '../../../images/logo.png';
import letsRide from '../../../images/lets_ride.png';
import linksImg from '../../../images/icons/element_3_1-14.svg';
import Header from '../../UI/molecules/Header';
import Links from '../../UI/atoms/Links';
import Modal from '../../UI/molecules/Modal';
import MainInfo from '../../UI/molecules/MainInfo';

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
      <MainInfo />

      <Links images={linksImg} />
    </div>
  );
};
export default Home;
