import React from 'react';
import styles from './MainInfo.module.scss';
import worning from './img/mainInfoWarning.png';

const MainInfo = () => {
    return (
        <div className = {styles.mainInfo}>
            <p>important information </p>
            <p>the game requires a browser plugin</p>
            <p>tronLink <span>or</span> TronWallet</p>
            <img src = {worning} alt="worning" /> 
        </div>
    );
}

export default MainInfo;