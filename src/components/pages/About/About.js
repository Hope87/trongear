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
import Footer from '../../UI/molecules/Footer';
import mersedes from '../../../images/cars/G_5_cars/on/4_amg.png';
import HeaderForMobile from '../../UI/molecules/HeaderForMobile';
import leftImage from '../../../images/topFooterLeftImage.png';
import rightImage from '../../../images/topFooterRightImage.png';

const Button = ({text}) => {
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
          {text}
        </div>
        </div>
      </a>
    </div>
)};

const AboutButtonBox = () => {
  return (
    <div className={styles.buttons}>
      <Button text="about 1" />
      <Button text="about 1" />
      <Button text="about 1" />
      <Button text="about 1" />
    </div>
  )};

const About = ({ modal, setModal }) => {
  const width = window.innerWidth;
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        {width > 576 ? (
          <Header
            headerLogo={logo}
            headerModal={modal}
            setHeaderModal={setModal}
          />
        ) : (
          <HeaderForMobile headerModal={modal} setHeaderModal={setModal} />
        )}
        {modal && <Modal />}
      </div>
      <div className={styles.content}>
        <div className={styles.timer} style={modal ? { opacity: "0" } : null}>
          <Timer />
        </div>
        <div className={styles.buttonsBox}>
          <ButtonsBox />
        </div>
        <div
          className={styles.middleBlock}
          style={modal && width > 1280 ? { marginTop: "90px" } : null}
        >
          <div className={styles.left}>
            <div className={styles.leftBlock}>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </div>
              {width > 576 && (<AboutButtonBox />)}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightBlock}>
              <div className={styles.image}>
                <img src={garage} alt="About_page_garage" />
                <div className={styles.car}>
                  <img src={mersedes} alt="car" />
                </div>
              </div>
              {width <= 576 && (<AboutButtonBox />)}
              <div className={styles.text}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        {width > 576 ? (<Footer />)
        :(<div className={styles.mobileFooter}>
           <h4 className={styles.topFooterTitle}>earn by promoting</h4>
           <div className={styles.imageContainer}>
              <div className={styles.image}>
                <img src={leftImage} alt="leftImage"/>
              </div>
              <div className={styles.image}>
                <img src={rightImage} alt="rightImage"/>
              </div>
            </div>
        </div>)}
      </div>
    </div>
  );
};

export default About;
