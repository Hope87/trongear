import React from 'react'
import styles from './Timer.module.scss'
import TimerBox from './TimerBox/TimerBox'

const Timer = ({ text = 'race of the day', isSecondTimer, time }) => {
  return (
    <div className={styles.timer}>
      {text}
      <div className={styles.timerBox}>
        <TimerBox
          isSecondTimer={isSecondTimer}
          value={!isSecondTimer ? time.hours : 0}
        />
        <TimerBox isSecondTimer={isSecondTimer} value={time.minutes} />
        <TimerBox isSecondTimer={isSecondTimer} value={time.seconds} />
      </div>
    </div>
  )
}

export default Timer
