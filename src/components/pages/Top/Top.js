import React from 'react'
import Header from '../../Header/Header'
import styles from './Top.module.scss'
import ModalWindow from '../../ModalWindow/ModalWindow'
import TopPanel from '../../TopPanel/TopPanel'
import Footer from '../../Footer/Footer'
import TimerAndButtonBox from '../../TimerAndButtonBox/TimerAndButtonBox'
import LeftBlock from './LeftBlock/LeftBlock'
import RightBlock from './RightBlock/RightBlock'

const Top = ({ modal, setModal }) => {
  return (
    <div className={styles.top}>
      <Header modal={modal} setModal={setModal} isLogo={true} />
      {modal && <ModalWindow setModal={setModal} />}
      <div className={styles.content}>
        <div className={styles.timerAndButtonBox}>
          <TimerAndButtonBox page='top' />
        </div>
        <div className={styles.topPanel}>
          <TopPanel />
        </div>
        <div className={styles.blocks}>
          <LeftBlock />
          <RightBlock />
        </div>
      </div>
      <Footer page='top' />
    </div>
  )
}

export default Top
