import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './About.module.scss';
import AboutCard from '../../UI/molecules/AboutCard';
import Header from '../../UI/molecules/Header';
import Timer from '../../UI/atoms/Timer';
import logo from '../../../images/logo.png';
import bmw from '../../../images/cars/G_1_cars/off/3_bmw.png';
import acura from '../../../images/cars/G_1_cars/off/1_acura.png';
import astonMartin from '../../../images/cars/G_1_cars/off/2_aston_martin.png';
import buick from '../../../images/cars/G_1_cars/off/4_buick.png';
import audi from '../../../images/cars/G_1_cars/off/5_audi.png';
import g_1 from '../../../images/G_1.png';
import g_2 from '../../../images/G_2.png';
import g_3 from '../../../images/G_3.png';
import g_4 from '../../../images/G_4.png';
import g_5 from '../../../images/G_5.png';
import Modal from '../../UI/molecules/Modal';
import ButtonsBox from '../../UI/molecules/ButtonsBox';

const About = ({ modal, setModal }) => {
  return (
    <div className={styles.about}>
      <Grid container>
        <Grid item xs={12}>
          <Header headerLogo={logo} headerModal={modal} setHeaderModal={setModal} />

          {modal && <Modal />}
        </Grid>

        <Grid item xs={12}>
          {!modal ? (
            <div className={styles.aboutTimer}>
              <Timer />
            </div>
          ) : (
            <div style={{ opacity: 0 }} className={styles.aboutTimer}>
              <Timer />
            </div>
          )}
        </Grid>

        <Grid item xs={12}>
          <div className={styles.aboutBtn} style={{ marginTop: '120px' }}>
            <ButtonsBox />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.aboutCards}>
            <AboutCard title="garage 1" car={bmw} background={g_1} />
            <AboutCard title="garage 2" car={acura} background={g_2} />
            <AboutCard title="garage 3" car={astonMartin} background={g_3} />
            <AboutCard title="garage 4" car={buick} background={g_4} />
            <AboutCard title="garage 5" car={audi} background={g_5} />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.aboutFooter}>
            <div className={styles.aboutText}>
              <h2>enter the race</h2>
              <p>
                You are presented with 5 garages, with different levels of cars The first profit you will receive in an
                hour after participation in the race!
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
