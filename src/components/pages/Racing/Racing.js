import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Racing.module.scss';
import logo from '../../../images/logo.png';
import Modal from '../../UI/atoms/Modal';
import Timer from '../../UI/atoms/Timer';
import elements_13 from '../../../images/elements-13.svg';
import StatisticElement from '../../UI/molecules/StatisticElement';
import TransactionsCard from '../../UI/molecules/TransactionsCard';
import TimeCard from '../../UI/molecules/TimeCard';
import StatisticElementContainer from '../../UI/organisms/StatisticElementContainer';
import ButtonsBox from '../../UI/molecules/ButtonsBox';
import Header from '../../Header/Header';
import ModalWindow from '../../ModalWindow/ModalWindow';
import TimerAndButtonBox from '../../TimerAndButtonBox/TimerAndButtonBox';
import TopPanelMob from '../../UI/molecules/TopPanelMob';
import leftImage from '../../../images/topFooterLeftImage.png';
import rightImage from '../../../images/topFooterRightImage.png';
import Footer from '../../Footer/Footer';
import footerLine from '../../../images/footer_line.png';
import LeftBlock from './LeftBlock/LeftBlock';
import line from './img/line.svg';
import RightBlock from './RightBlock/RightBlock';


const Racing = ({ modal, setModal }) => {
  return (
    <div className={styles.racing}>
      <Header modal={modal} setModal={setModal} isLogo={true} />
      {modal && <ModalWindow setModal={setModal} />}
      <div className={styles.content}>
        <div className={styles.timerAndButtonBox}>
          <TimerAndButtonBox isSecondTimer = {true} page = 'racing'/>
        </div>
        <div className={styles.middleBlock}>
          <LeftBlock />
          <div className={styles.line}>
            <img src={line} alt="line" />
          </div>
          <RightBlock />
        </div>
      </div>
      <Footer page = 'racing' />
    </div>
  );
};

export default Racing;
