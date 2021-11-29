import React from 'react';
import styles from './TimerElement.module.scss';

const TimerElement = ({value = 0, isSecondTimer}) => {
    return (
        <div className = {!isSecondTimer ? styles.timerElement : styles.timerElement + ' ' + styles.redColor}>
            {value}
        </div>
    );
}

export default TimerElement;