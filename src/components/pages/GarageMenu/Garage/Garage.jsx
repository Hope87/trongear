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
  const [slideOn, setSlideOn] = useState(0)
  const [activeSlides, setActiveSlide] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
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
          activeSlides={activeSlides}
          setSlideOn={setSlideOn}
          filteredCars={garageCarsImg.find(
            (el) => el.name === garageNumber.title
          )}
          slideOn={slideOn}
          onSetCarsCount={setCarsCount}
        />
        <div className={styles.garageBtn}>
          <img
            src={activeSlides[slideOn] ? unlock_icon : lock_icon}
            alt='lock_icon'
          />
          <button
            style={{
              backgroundColor: activeSlides[slideOn] ? 'yellow' : 'red'
            }}
            onClick={() => setActiveSlide({ ...activeSlides, [slideOn]: true })}
          >
            {activeSlides[slideOn] ? 'buy' : 'unlock'}
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
