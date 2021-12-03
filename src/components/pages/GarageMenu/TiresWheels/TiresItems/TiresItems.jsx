import React from 'react'
import TiresItem from './TiresItem/TiresItem'
import styles from './TiresItems.module.scss'
import turbine1 from './img/tuning_img_1.png'
import clutch from './img/tuning_img_2.png'
import chassis from './img/tuning_img_3.png'
import turbine2 from './img/tuning_img_4.png'
import transmission from './img/tuning_img_5.png'

const TiresItems = () => {
  return (
    <div className={styles.tiresItems}>
      <TiresItem icon={turbine1} />
      <TiresItem icon={clutch} />
      <TiresItem icon={chassis} />
      <TiresItem icon={turbine2} />
      <TiresItem icon={transmission} />
    </div>
  )
}

export default TiresItems
