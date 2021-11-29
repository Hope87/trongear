import React from 'react';
import styles from './TimerBox.module.scss';
import TimerElement from './TimerElement/TimerElement';

const TimerBox = ({isSecondTimer}) => {
    return (
        <div className = {styles.timerBox}>
            <TimerElement value = {0} isSecondTimer = {isSecondTimer}/>
            <TimerElement value = {0} isSecondTimer = {isSecondTimer}/>
        </div>
    );
}

export default TimerBox;