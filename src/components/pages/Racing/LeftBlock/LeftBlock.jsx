import React from 'react';
import styles from './LeftBlock.module.scss';
import LeftBlockRow from '../LeftBlock/LeftBlockRow/LeftBlockRow';

const LeftBlock = () => {
    return (
        <div className={styles.leftBlock}>
            <div className={styles.titleRow}>
                <h2>owerall statistics</h2>
                <h2>personal statistics</h2>
            </div>
            <LeftBlockRow />
            <LeftBlockRow />
            <LeftBlockRow />
            <LeftBlockRow />
        </div>
    );
}

export default LeftBlock;