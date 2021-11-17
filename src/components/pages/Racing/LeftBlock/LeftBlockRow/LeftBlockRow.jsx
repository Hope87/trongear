import React from 'react';
import styles from './LeftBlockRow.module.scss';
import LeftBlockElement from './LeftBlockElement/LeftBlockElement';

const LeftBlockRow = () => {
    return (
        <div className={styles.leftBlockRow}>
            <LeftBlockElement />
            <LeftBlockElement isDifferentColor={true}/>
        </div>
    );
}

export default LeftBlockRow;