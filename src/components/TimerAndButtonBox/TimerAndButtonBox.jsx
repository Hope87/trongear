import React from 'react'
import styles from './TimerAndButtonBox.module.scss'
import Timer from './Timer/Timer'
import ButtonsBox from './ButtonsBox/ButtonsBox'

const TimerAndButtonBox = ({ isSecondTimer, page, time }) => {
  return (
    <div className={styles.timerAndButtonBox}>
      <div className={styles.timer}>
        <Timer time={time} />
        {isSecondTimer && (
          <div className={styles.secondTimer}>
            <Timer
              text={'race of the hour'}
              isSecondTimer={isSecondTimer}
              time={{ minutes: time.minutes, seconds: time.seconds }}
            />
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
