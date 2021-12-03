import React from 'react'
import styles from './Racing.module.scss'
import Header from '../../Header/Header'
import ModalWindow from '../../ModalWindow/ModalWindow'
import TimerAndButtonBox from '../../TimerAndButtonBox/TimerAndButtonBox'
import Footer from '../../Footer/Footer'
import LeftBlock from './LeftBlock/LeftBlock'
import line from './img/line.svg'
import RightBlock from './RightBlock/RightBlock'
import TopPanel from '../../TopPanel/TopPanel'

const Racing = ({ modal, setModal, time }) => {
  return (
    <div className={styles.racing}>
      <Header modal={modal} setModal={setModal} isLogo={true} />
      {modal && <ModalWindow setModal={setModal} />}
      <div className={styles.content}>
        <div className={styles.timerAndButtonBox}>
          <TimerAndButtonBox isSecondTimer={true} page='racing' time={time}/>
        </div>
        <div className={styles.topPanel}>
          <TopPanel />
        </div>
        <div className={styles.middleBlock}>
          <LeftBlock />
          <div className={styles.line}>
            <img src={line} alt='line' />
          </div>
          <RightBlock />
        </div>
      </div>
      <Footer page='racing' />
    </div>
  )
}

export default Racing
