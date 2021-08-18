import React from 'react';
import styles from './Main.module.scss';
import { Grid } from '@material-ui/core';
import Header from '../../UI/molecules/Header';
import Modal from '../../UI/atoms/Modal';
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
          {!modal ? (
            <div className={styles.mainTimer}>
              <Timer />
            </div>
          ) : (
            <div style={{ opacity: 0 }} className={styles.mainTimer}>
              <Timer />
            </div>
          )}
        </Grid>

        <Grid item xs={12}>
          <div className={styles.mainBtn}>
            <ButtonsBox />
          </div>
        </Grid>

        <Grid item xs={12}>
          <MainDescription />
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
