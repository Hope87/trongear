import React from 'react'
import styles from './GarageMenu.module.scss'
import Header from '../../Header/Header'
import ModalWindow from '../../ModalWindow/ModalWindow'
import TimerAndButtonBox from '../../TimerAndButtonBox/TimerAndButtonBox'
import Footer from '../../Footer/Footer'
import MenuItems from './MenuItems/MenuItems'
import Garage from './Garage/Garage'
import TiresWheels from './TiresWheels /TiresWheels'

const GarageMenu = ({ modal, setModal, garageNumber }) => {
  return (
    <div className={styles.garageMenu}>
      <Header modal={modal} setModal={setModal} isLogo={true} />
      {modal && <ModalWindow setModal={setModal} />}
      <div className={styles.content}>
        <div className={styles.timerAndButtonBox}>
          <TimerAndButtonBox page='garageMenu' />
        </div>
        <div className={styles.middleBlock}>
          <div className={styles.leftBlock}>
            <Garage garageNumber={garageNumber} />
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.menuItems}>
              <MenuItems />
            </div>
            <div className={styles.tiresWheels}>
              <TiresWheels />
            </div>
          </div>
        </div>
      </div>
      <Footer page='garageMenu' />
    </div>
  )
}

export default GarageMenu
