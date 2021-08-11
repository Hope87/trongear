import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../UI/molecules/Header';
import styles from './Top.module.scss';
import logo from '../../../images/logo.png';
import Modal from '../../UI/molecules/Modal';
import Timer from '../../UI/atoms/Timer';
import TopPanel from '../../UI/molecules/TopPanel';
import TopMainLeft from '../../UI/organisms/TopMainLeft';
import TopMainRight from '../../UI/organisms/TopMainRight';
import panelRight from '../../../images/panel-17.svg';
import panelLeft from '../../../images/panel-16.svg';
import Links from '../../UI/atoms/Links';
import ButtonsBox from '../../UI/molecules/ButtonsBox';

const Top = ({ modal, setModal }) => {
  return (
    <div className={styles.top}>
      <Grid container>
        <Grid item xs={12}>
          <Header headerLogo={logo} headerModal={modal} setHeaderModal={setModal} />

          {modal && <Modal />}
        </Grid>

        <Grid item xs={12}>
          <div>
            <Timer />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.topBtn} style={{ marginTop: '-60px' }}>
            <ButtonsBox />
          </div>
        </Grid>

        <Grid item xs={12}>
          <TopPanel />
        </Grid>

        <Grid item xs={6}>
          <TopMainLeft />
        </Grid>

        <Grid item xs={6}>
          <TopMainRight />
        </Grid>

        <Grid item xs={12}>
          <div className={styles.topFooter}>
            <div className={styles.topFooterLeftPanel}>
              <img src={panelLeft} alt="" />
            </div>
            <div>
              <h4 className={styles.topFooterTitle}>EARN BY PROMOTING</h4>
            </div>
            <div className={styles.topFooterRightPanel}>
              <Links images={panelRight} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Top;
