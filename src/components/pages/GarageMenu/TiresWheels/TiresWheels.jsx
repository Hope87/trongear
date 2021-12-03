import React from 'react'
import TiresItems from './TiresItems/TiresItems'
import styles from './TiresWheels.module.scss'
import tiredLayer from './img/tiredLayer.svg'

const TiresWheels = ({ tiresWheels = 0 }) => {
  return (
    <div className={styles.tiresWheels}>
      <div className={styles.header}>
        <p>tires & wheels</p>
        <span>{tiresWheels}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.tiresItems}>
          <TiresItems />
        </div>
        <div className={styles.tiresLayers}>
          <div className={styles.tilte}>rank</div>
          <div className={styles.layer}>
            <img src={tiredLayer} alt='layer' />
          </div>
          <div className={styles.tilte}>level</div>
          <div className={styles.layer}>
            <img src={tiredLayer} alt='layer' />
          </div>
        </div>
      </div>
      `
    </div>
  )
}

export default TiresWheels
