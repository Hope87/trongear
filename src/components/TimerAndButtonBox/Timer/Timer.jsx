import React from 'react';
import styles from './Timer.module.scss';
import TimerBox from './TimerBox/TimerBox';

const Timer = ({text = 'race of the day', isSecondTimer}) => {
    return (
        <div className = {styles.timer}>
            {text}
            <div className = {styles.timerBox}>
                <TimerBox isSecondTimer = {isSecondTimer}/>
                <TimerBox isSecondTimer = {isSecondTimer}/>
                <TimerBox isSecondTimer = {isSecondTimer}/>
            </div>
        </div>
    );
}

export default Timer;