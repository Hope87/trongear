import React from 'react';
import styles from './RightBlockElement.module.scss';

const RightBlockElement = ({textLabel = 'transactions', purchased = 4, ago = 25}) => {
    return (
      <div className={styles.rightBlockElement}>
        <div className={styles.upBlock}>
          <div className={styles.transactions}>
            <div className={styles.transactionsName}>name</div>
            <div className={styles.purchased}>purchased<span>{purchased}</span></div>
            <div className={styles.ago}> 1 your ago<span>{ago}</span></div>
          </div>
          <div className={styles.label}>{textLabel}</div>
        </div>
        <div className={styles.downBlock}></div>
      </div>
    );
}

export default RightBlockElement;