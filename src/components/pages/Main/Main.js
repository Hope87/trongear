import React from 'react';
import styles from './Main.module.scss';
import Header from '../../Header/Header';
import ModalWindow from '../../ModalWindow/ModalWindow';
import Timer from '../../UI/atoms/Timer';
import MainDescription from '../../UI/organisms/MainDescription';
import Links from '../../UI/atoms/Links';
import footerLogoForMobile from '../../../images/footerLogoForMobile.png';
import footerLogoForMobileSmall from '../../../images/footerLogoForMobileSmall.png';
import LogoTrongear from '../../LogoTrongear/LogoTrongear';
import MainInfo from './MainInfo/MainInfo';
import TimerAndButtonBox from '../../TimerAndButtonBox/TimerAndButtonBox';

const Main = ({ modal, setModal }) => {
  return (
    <div className={styles.main}>
        <div className={styles.header}>
            <Header modal={modal} 
                    setModal={setModal} 
                    isLogo = {false}/>
          {modal && <ModalWindow setModal = {setModal}/>}
        </div>
        <div className={styles.content}>
       <div className = {styles.timerAndButtonBox}>
         <TimerAndButtonBox />
       </div>
        <div className = {styles.logo}>
          <LogoTrongear />
        </div>
        <div className = {styles.letsRide}>
          let's ride
        </div>
        <div className = {styles.howItWorks}>
          how it works
        </div>
        <div className = {styles.mainInfo}>
          <MainInfo />
        </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.mainFooter}>
            <div className={styles.bigImage}>
              <img src={footerLogoForMobile} alt="footer"></img>
              <div className={styles.smallImage}>
                <img src={footerLogoForMobileSmall} alt="footer"></img>
              </div>
              <div className={styles.footerLinks}>
                <Links />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
export default Main;
