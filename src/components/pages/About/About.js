import React from 'react'
import styles from './About.module.scss'
import Header from '../../Header/Header'
import ModalWindow from '../../ModalWindow/ModalWindow'
import garage from '../../../images/About_page_garage.png'
import Footer from '../../Footer/Footer'
import mersedes from '../../../images/cars/G_5_cars/on/4_amg.png'
import TimerAndButtonBox from '../../TimerAndButtonBox/TimerAndButtonBox'
import AboutButtonBox from './AboutButtonBox/AboutButtonBox'

const About = ({ modal, setModal }) => {
  return (
    <div className={styles.about}>
      <Header modal={modal} setModal={setModal} isLogo={true} />
      {modal && <ModalWindow setModal={setModal} />}
      <div className={styles.content}>
        <div className={styles.timerAndButtonBox}>
          <TimerAndButtonBox page='about' />
        </div>
        <div className={styles.middleBlock}>
          <div className={styles.leftBlock}>
            <div className={styles.text}>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
            <div className={styles.image}>
              <img src={garage} alt='About_page_garage' />
              <div className={styles.car}>
                <img src={mersedes} alt='car' />
              </div>
            </div>
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.buttons}>
              <AboutButtonBox />
            </div>
            <div className={styles.text}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
      <Footer page='about' />
    </div>
  )
}

export default About
