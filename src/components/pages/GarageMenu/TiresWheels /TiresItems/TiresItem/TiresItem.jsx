import React from 'react'
import styles from './TiresItem.module.scss'

const TiresItem = ({ icon, trx = '0.00' }) => {
  return (
    <div className={styles.tiresItem}>
      <div className={styles.upBlock}>
        <img src={icon} alt='icon' />
      </div>
      <div className={styles.downBlock}>{trx}</div>
    </div>
  )
}

export default TiresItem
