import React, { useState } from 'react'
import styles from './Garage.module.scss'
import tronIcon from '../../Top/img/spanImg.png'
import Slider from './Slider/Slider'
import garageCarsImg from '../../../helpers/garageCarsImg'
import lock_icon from '../../../../images/lock_icon.png'
import unlock_icon from '../../../../images/unlock_icon.png'
import garageLayers from './img/garageLayers.svg'

const Garage = ({
  garageNumber,
  headerTpx = 0,
  trx = 0,
  carModel = 'Car Model',
  modification = 'modification'
}) => {
  const [buttonOperation, setButtonOperation] = useState({
    title: 'unlock',
    img: lock_icon,
    color: 'var(--red)',
    activeSlider: false
  })
  const [carsCount, setCarsCount] = useState('')
  return (
    <div className={styles.garage}>
      <div className={styles.garageHeader}>
        <h2 className={styles.garageNumber}>{garageNumber.title}</h2>
        <p className={styles.tpx}>
          <img src={tronIcon} alt='tron' />
          {headerTpx} &nbsp;
        </p>
      </div>
      <div className={styles.titles}>
        <div className={styles.left}>
          <p className={styles.carModel}>{carModel}</p>
          <p className={styles.modification}>{modification}</p>
        </div>
        <div className={styles.right}>
          <img src={tronIcon} alt='tron' />
          {trx} &nbsp;
        </div>
      </div>
      <div className={styles.garageSlider}>
        <Slider
          filteredCars={garageCarsImg.find(
            (el) => el.name === garageNumber.title
          )}
          onActive={buttonOperation.activeSlider}
          onSetCarsCount={setCarsCount}
        />
        <div className={styles.garageBtn}>
          <img src={buttonOperation.img} alt='lock_icon' />
          <button
            style={{ backgroundColor: buttonOperation.color }}
            onClick={() =>
              setButtonOperation({
                title: 'buy',
                img: unlock_icon,
                color: 'var(--yellow)',
                activeSlider: true
              })
            }
          >
            {buttonOperation.title}
          </button>
        </div>
      </div>
      <div className={styles.garageLayers}>
        <img src={garageLayers} alt='layers' />
      </div>
      <div className={styles.garageFooter}>
        <p>total cars in the garage</p>
        <p>
          <span>{carsCount}</span>/<span>{garageCarsImg.length}</span>
        </p>
      </div>
    </div>
  )
}

export default Garage
