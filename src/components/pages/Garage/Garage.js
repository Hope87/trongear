import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import styles from './Garage.module.scss'
import Header from '../../Header/Header'
import ModalWindow from '../../ModalWindow/ModalWindow'
import TimerAndButtonBox from '../../TimerAndButtonBox/TimerAndButtonBox'
import TopPanel from '../../TopPanel/TopPanel'
import Timer from '../../UI/atoms/Timer'
import logo from '../../../images/logo.png'
import Modal from '../../UI/atoms/Modal'
import ButtonsBox from '../../UI/molecules/ButtonsBox'
import GarageCardOff from '../../UI/molecules/GarageCardOff'
import garage_1 from '../../../images/g_off_1.png'
import garage_2 from '../../../images/g_off_2.png'
import garage_3 from '../../../images/g_off_3.png'
import garage_4 from '../../../images/g_off_4.png'
import garage_5 from '../../../images/g_off_5.png'
import garage_1_on from '../../../images/G_1_on.png'
import garage_2_on from '../../../images/G_2_on.png'
import garage_3_on from '../../../images/G_3_on.png'
import garage_4_on from '../../../images/G_4_on.png'
import garage_5_on from '../../../images/G_5_on.png'
import HeaderForMobile from '../../UI/molecules/HeaderForMobile'
import TopPanelMob from '../../UI/molecules/TopPanelMob'
import leftImage from '../../../images/topFooterLeftImage.png'
import rightImage from '../../../images/topFooterRightImage.png'
import Footer from '../../Footer/Footer'

const Garage = ({ modal, setModal, onGarageMenuInformation }) => {
  const cardItems = [
    {
      id: 1,
      components: (
        <GarageCardOff
          imageOff={garage_1}
          cardTitleOff='buy'
          imageOn={garage_1_on}
          cardTitleOn='garage 1'
          onGarageMenuInformation={onGarageMenuInformation}
        />
      )
    },
    {
      id: 2,
      components: (
        <GarageCardOff
          imageOff={garage_2}
          cardTitleOff='buy'
          imageOn={garage_2_on}
          cardTitleOn='garage 2'
          onGarageMenuInformation={onGarageMenuInformation}
        />
      )
    },
    {
      id: 3,
      components: (
        <GarageCardOff
          imageOff={garage_3}
          cardTitleOff='buy'
          imageOn={garage_3_on}
          cardTitleOn='garage 3'
          onGarageMenuInformation={onGarageMenuInformation}
        />
      )
    },
    {
      id: 4,
      components: (
        <GarageCardOff
          imageOff={garage_4}
          cardTitleOff='buy'
          imageOn={garage_4_on}
          cardTitleOn='garage 4'
          onGarageMenuInformation={onGarageMenuInformation}
        />
      )
    },
    {
      id: 5,
      components: (
        <GarageCardOff
          imageOff={garage_5}
          cardTitleOff='buy'
          imageOn={garage_5_on}
          cardTitleOn='garage 5'
          onGarageMenuInformation={onGarageMenuInformation}
        />
      )
    }
  ]

  return (
    <div className={styles.garage}>
      <Header modal={modal} setModal={setModal} isLogo={true} />
      {modal && <ModalWindow setModal={setModal} />}
      <div className={styles.content}>
        <div className={styles.timerAndButtonBox}>
          <TimerAndButtonBox page='garage' />
        </div>
        <div className={styles.topPanel}>
          <TopPanel />
        </div>
        <div className={styles.garageCardsOff}>
          {cardItems.map((el) => (
            <Link key={el.id} to={`/garageMenu/${el.id}`}>
              <div>{el.components}</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer page='garage' />
    </div>
  )
}

export default Garage
