import React from 'react';
import styles from './TimerBox.module.scss';
import TimerElement from './TimerElement/TimerElement';

const TimerBox = ({isSecondTimer, value}) => {
    let leftDigit = Math.floor(value / 10); 
    let rightDigit = value % 10;
    return (
        <div className = {styles.timerBox}>
            <TimerElement value = {leftDigit} isSecondTimer = {isSecondTimer}/>
            <TimerElement value = {rightDigit} isSecondTimer = {isSecondTimer}/>
        </div>
    );
}

export default TimerBox;