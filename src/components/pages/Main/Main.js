import React from 'react'
import styles from './Main.module.scss'
import Header from '../../Header/Header'
import ModalWindow from '../../ModalWindow/ModalWindow'
import LogoTrongear from '../../LogoTrongear/LogoTrongear'
import MainInfo from './MainInfo/MainInfo'
import TimerAndButtonBox from '../../TimerAndButtonBox/TimerAndButtonBox'
import Footer from '../../Footer/Footer'

const Main = ({ modal, setModal, time }) => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header modal={modal} setModal={setModal} />
        {modal && <ModalWindow setModal={setModal} isMainPage={true} />}
      </div>
      <div className={styles.content}>
        <div className={styles.timerAndButtonBox}>
          <TimerAndButtonBox time={time} />
        </div>
        <div className={styles.logo}>
          <LogoTrongear />
        </div>
        <div className={styles.letsRide}>let's ride</div>
        <div className={styles.howItWorks}>how it works</div>
        <div className={styles.mainInfo}>
          <MainInfo />
        </div>
      </div>
      <Footer page='main' />
    </div>
  )
}
export default Main
