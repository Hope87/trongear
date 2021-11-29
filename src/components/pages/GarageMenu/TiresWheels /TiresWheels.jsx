import React from 'react'
import TiresItems from './TiresItems/TiresItems'
import styles from './TiresWheels.module.scss'

const TiresWheels = ({ tiresWheels = 0 }) => {
  return (
    <div className={styles.tiresWheels}>
      <div className={styles.header}>
        <p>tires & wheels</p>
        <span>{tiresWheels}</span>
      </div>
      <div className={styles.tiresItems}>
        <TiresItems />
      </div>
    </div>
  )
}

export default TiresWheels
