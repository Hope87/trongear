import React from 'react';
import styles from './RightBlockRow.module.scss';
import RightBlockElement from './RightBlockElement/RightBlockElement';

const RightBlockRow = () => {
    return (
        <div className={styles.rightBlockRow}>
            <RightBlockElement />
        </div>
    );
}

export default RightBlockRow;