import React from 'react';
import styles from './RightBlockElement.module.scss';

const RightBlockElement = ({textLabel, purchased = 4, ago = 25, numberTrx = 0, hour = '00:00:00', day = '00:00:00', amount = '00:00:00', dollars = 0}) => {
    return (
      <div className={styles.rightBlockElement}>
        <div className={styles.upBlock}>
          {textLabel === "transactions" && (
            <div className={styles.transactions}>
              <div className={styles.transactionsName}>name</div>
              <div className={styles.purchased}>
                purchased<span>{purchased}</span>
              </div>
              <div className={styles.ago}>
                1 your ago<span>{ago}</span>
              </div>
            </div>
          )}
          {textLabel === "time" && (
            <div className={styles.time}>
              <div className={styles.hour}>
                p/hour<span>{hour}</span>
              </div>
              <div className={styles.day}>
                p/day<span>{day}</span>
              </div>
            </div>
          )}
          {textLabel === 'amount' && 
          <div className={styles.amount}>{amount}</div>}
          <div className={styles.label}>{textLabel}</div>
        </div>
        <div className={styles.downBlock}>
          {textLabel === "transactions" && (
            <>
              <div className={styles.numberTrx}>{numberTrx}</div>
              <div className={styles.affiliatePayout}>Affiliate Payout</div>
            </>
          )}
          {textLabel === 'amount' && 
            <div className={styles.dollars}>{dollars}</div>
          }
        </div>
      </div>
    );
}

export default RightBlockElement;