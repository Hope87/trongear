import React from 'react';
import styles from './LeftBlockElement.module.scss';
import image from './img/piramide.svg'

const LeftBlockElement = ({textLabel = 'total invested', upBlockText = 'royalties', upBlockNumber = '000,000,000', icon = image, downBlockNumber = '000,000,000.00', isDifferentColor}) => {
    return (
        <div className = {styles.leftBlockElement + ' ' + (isDifferentColor ? styles.differentColor : null)}>
            <div className = {styles.upBlock}>
                <div className = {styles.text}>{upBlockText}</div>
                <div className = {styles.number}>{upBlockNumber}
                    <img src={icon} alt="icon" />
                </div>
                <div className = {styles.label}>{textLabel}</div>
            </div>
            <div className = {styles.downBlock}>{downBlockNumber}</div>
        </div>
    );
}

export default LeftBlockElement;