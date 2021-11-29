import React from 'react';
import styles from './BlockTitle.module.scss';

const BlockTitle = ({block = 'left'}) => {
    let style = styles.rightBlock + ' ';
    if(block == 'left'){
        style += styles.leftTitle;
    }
    else{
        style += styles.rightTitle;
    }
    return (
        <div className = {styles.blockTitle}>
            <div className = {styles.leftBlock}>{block == 'left' && 'position'}</div>
            <div className = {style}>
                <span>{block == 'left' ? 'name' : 'your rank'}</span>
                <span className = {styles.spanImg}></span>
            </div>
        </div>
    );
}

export default BlockTitle;