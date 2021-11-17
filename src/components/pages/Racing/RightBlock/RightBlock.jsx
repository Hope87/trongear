import React from 'react';
import styles from './RightBlock.module.scss';
import RightBlockElement from './RightBlockElement/RightBlockElement';

const RightBlock = () => {
    return (
        <div className={styles.rightBlock}>
           <RightBlockElement />
        </div>
    );
}
 export default RightBlock;