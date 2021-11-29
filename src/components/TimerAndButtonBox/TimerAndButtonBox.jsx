import React from 'react'
import styles from './TimerAndButtonBox.module.scss'
import Timer from './Timer/Timer'
import ButtonsBox from './ButtonsBox/ButtonsBox'

const TimerAndButtonBox = ({ isSecondTimer, page }) => {
  return (
    <div className={styles.timerAndButtonBox}>
      <div className={styles.timer}>
        <Timer />
        {isSecondTimer && (
          <div className={styles.secondTimer}>
            <Timer text={'race of the hour'} isSecondTimer={isSecondTimer} />
          </div>
        )}
      </div>
      <div
        className={
          !isSecondTimer ? styles.buttonBoxOneTimer : styles.buttonBoxTwoTimers
        }
      >
        <ButtonsBox page={page} />
      </div>
    </div>
  )
}

export default TimerAndButtonBox
