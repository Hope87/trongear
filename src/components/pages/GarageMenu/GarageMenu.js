import React from 'react'
import Grid from '@material-ui/core/Grid'
import styles from './GarageMenu.module.scss'
import Header from '../../Header/Header'
import ModalWindow from '../../ModalWindow/ModalWindow'
import TimerAndButtonBox from '../../TimerAndButtonBox/TimerAndButtonBox'
import logo from '../../../images/logo.png'
import GarageCards from '../../UI/organisms/GarageCards'
import GarageMenuLeft from '../../UI/organisms/GarageMenuLeft'
import Timer from '../../UI/atoms/Timer'
import Modal from '../../UI/atoms/Modal'
import ButtonsBox from '../../UI/molecules/ButtonsBox'
import HeaderForMobile from '../../UI/molecules/HeaderForMobile'
import Footer from '../../UI/molecules/Footer'

const GarageMenu = ({ modal, setModal, garageNumber }) => {
  return (
    <div className={styles.garageMenu}>
      <Header modal={modal} setModal={setModal} isLogo={true} />
      {modal && <ModalWindow setModal={setModal} />}
      <div className={styles.content}>
        <div className={styles.timerAndButtonBox}>
          <TimerAndButtonBox page='garageMenu' />
        </div>
        <div className={styles.garageItems}>
          <GarageMenuLeft garageNumber={garageNumber} />

          <GarageCards />
        </div>
      </div>
    </div>
  )
}

export default GarageMenu
