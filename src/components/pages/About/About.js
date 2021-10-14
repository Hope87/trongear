import React from 'react';
import styles from './About.module.scss';
import Header from '../../UI/molecules/Header';
import logo from '../../../images/logo.png';
import Modal from '../../UI/atoms/Modal';
import Timer from '../../UI/atoms/Timer';
import ButtonsBox from '../../UI/molecules/ButtonsBox';
import garage from '../../../images/About_page_garage.png';
import buttonUpImage from '../../../images/About_button_up.png';
import buttonDownImage from '../../../images/About_button_down.png';
import innerImage from '../../../images/About_button_up_innerImage.png';

const Button = () => {
  return (
    <div className={styles.button}>
      <a href='#'>
        <div className={styles.buttonUp}>
          <img src={buttonUpImage} alt='buttonUp'/>
          <div className={styles.innerImage}>
            <img src={innerImage} alt='innerImage'/>
          </div>
        </div>
        <div className={styles.buttonDown}>
        <img src={buttonDownImage} alt='buttonDown'/>
        <div className={styles.buttonText}>
          about 1
        </div>
        </div>
      </a>
    </div>
)};

const About = ({ modal, setModal }) => {
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <Header
          headerLogo={logo}
          headerModal={modal}
          setHeaderModal={setModal}
        />
        {modal && <Modal />}
      </div>
      <div className={styles.content}>
        <div className={styles.timer} style={modal ? { opacity: "0" } : null}>
          <Timer />
        </div>
        <div className={styles.buttonsBox}>
          <ButtonsBox />
        </div>
        <div className={styles.middleBlock}>
          <div className={styles.left}>
            <div className={styles.leftBlock}>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
              <div className={styles.buttons}>
                <Button />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.image}>
              <img src={garage} alt="About_page_garage" />
              <div className={styles.text}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
