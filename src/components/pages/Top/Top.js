import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../Header/Header';
import styles from './Top.module.scss';
import logo from '../../../images/logo.png';
import ModalWindow from '../../ModalWindow/ModalWindow';
import Timer from '../../UI/atoms/Timer';
import TopPanel from '../../UI/molecules/TopPanel';
import TopPanelMob from '../../UI/molecules/TopPanelMob';
import TopMainLeft from '../../UI/organisms/TopMainLeft';
import TopMainRight from '../../UI/organisms/TopMainRight';
import ButtonsBox from '../../UI/molecules/ButtonsBox';
import HeaderForMobile from '../../UI/molecules/HeaderForMobile';
import leftImage from '../../../images/topFooterLeftImage.png';
import rightImage from '../../../images/topFooterRightImage.png';
import Footer from '../../Footer/Footer';
import footerLine from '../../../images/TopFooterLine.png';
import TimerAndButtonBox from '../../TimerAndButtonBox/TimerAndButtonBox';

import LeftBlock from './LeftBlock/LeftBlock';
import RightBlock from './RightBlock/RightBlock';

const Top = ({ modal, setModal }) => {
  return (
    <div className={styles.top}>
      <Header modal={modal} setModal={setModal} isLogo={true} />
      {modal && <ModalWindow setModal={setModal} />}
      <div className={styles.content}>
        <div className={styles.timerAndButtonBox}>
          <TimerAndButtonBox />
        </div>
        <div className = {styles.blocks}>
        <LeftBlock />
        <RightBlock />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Top;
