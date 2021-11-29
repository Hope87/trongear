import React from 'react';
import styles from './LeftBlockElement.module.scss';

const LeftBlockElement = ({textColorNone, textLabel, upBlockText, upBlockNumber, icon, downBlockNumber = '000,000,000.00', isDifferentColor}) => {
    return (
        <div className = {styles.leftBlockElement + ' ' + (isDifferentColor ? styles.differentColor : null) + ' ' + (textColorNone ? styles.textColorNone : null)}>
            <div className = {styles.upBlock}>
                <div className = {styles.text}>{upBlockText}&nbsp;</div>
                <div className = {styles.number}>{upBlockNumber}
                    {icon && <img src={icon} alt="icon" />}
                </div>
                <div className = {styles.label}>{textLabel}</div>
            </div>
            <div className = {styles.downBlock}>{downBlockNumber}</div>
        </div>
    );
}

export default LeftBlockElement;