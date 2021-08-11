import React from 'react';
import styles from './Main.module.scss';
import { Grid } from '@material-ui/core';
import linksImg from '../../../images/element_3_1-14.svg';
import Header from '../../UI/molecules/Header';
import Links from '../../UI/atoms/Links';
import Modal from '../../UI/molecules/Modal';
import Timer from '../../UI/atoms/Timer';
import ButtonsBox from '../../UI/molecules/ButtonsBox';
import MainDescription from '../../UI/organisms/MainDescription';

const Main = ({ modal, setModal }) => {
  return (
    <div className={styles.main}>
      <Grid container>
        <Grid item xs={12}>
          <Header headerModal={modal} setHeaderModal={setModal} />

          {modal && <Modal />}
        </Grid>

        <Grid item xs={12}>
          <div className={styles.mainTimer}>
            <Timer />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.mainBtn} style={{ marginTop: '-60px' }}>
            <ButtonsBox />
          </div>
        </Grid>

        <Grid item xs={12}>
          <MainDescription />
        </Grid>

        <Grid item xs={12}>
          <div className={styles.mainFooter}>
            <Links images={linksImg} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
