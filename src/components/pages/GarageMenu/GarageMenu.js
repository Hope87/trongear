import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './GarageMenu.module.scss';
import GaragMenuCard from '../../UI/molecules/GaragMenuCard';
import Header from '../../UI/molecules/Header';
import Timer from '../../UI/atoms/Timer';
import logo from '../../../images/logo.png';
import bmw from '../../../images/G_1_cars/on/3_bmw.png';
import acura from '../../../images/G_1_cars/on/1_acura.png';
import astonMartin from '../../../images/G_1_cars/on/2_aston_martin.png';
import buick from '../../../images/G_1_cars/on/4_buick.png';
import audi from '../../../images/G_1_cars/on/5_audi.png';
import g_1 from '../../../images/garages_background/G_1.png';
import g_2 from '../../../images/garages_background/G_2.png';
import g_3 from '../../../images/garages_background/G_3.png';
import g_4 from '../../../images/garages_background/G_4.png';
import g_5 from '../../../images/garages_background/G_5.png';
import Links from '../../UI/atoms/Links';
import panelRight from '../../../images/icons/panel-17.svg';
import panelLeft from '../../../images/icons/panel-16.svg';
import Button from '../../UI/atoms/Button';
import buttonsImg from '../../../images/buttons/buttons-06.svg';
import Modal from '../../UI/molecules/Modal';

const GarageMenu = ({ modal, setModal }) => {
  return (
    <div className={styles.garageMenu}>
      <Grid container>
        <Grid item xs={12}>
          <Header headerLogo={logo} headerModal={modal} setHeaderModal={setModal} />

          {modal && <Modal />}
        </Grid>

        <Grid item xs={12}>
          <div style={{ marginTop: '40px' }}>
            <Timer />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.buttonsBox} style={{ marginTop: '10px' }}>
            <div className={styles.buttonsBoxBtn}>
              <Button title="about" image={buttonsImg} />
              <div>
                <Button title="garage" image={buttonsImg} />
              </div>
            </div>
            <div className={styles.buttonsBoxBtn}>
              <Button title="racing" image={buttonsImg} />
              <div>
                <Button title="top" image={buttonsImg} />
              </div>
            </div>
          </div>
        </Grid>
        <Grid container direction="row" justifyContent="center">
          <GaragMenuCard title="garage 1" car={bmw} background={g_1} />
          <GaragMenuCard title="garage 2" car={acura} background={g_2} />
          <GaragMenuCard title="garage 3" car={astonMartin} background={g_3} />
          <GaragMenuCard title="garage 4" car={buick} background={g_4} />
          <GaragMenuCard title="garage 5" car={audi} background={g_5} />
        </Grid>

        <Grid item xs={12}>
          <div className={styles.garageMenuText}>
            <h2>enter the race</h2>
            <p>
              You are presented with 5 garages, with different levels of cars The first profit you will receive in an
              hour after participation in the race!
            </p>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.garageMenuLeftPanel}>
            <img src={panelLeft} alt="" />
          </div>
          <Links images={panelRight} />
        </Grid>
      </Grid>
    </div>
  );
};

export default GarageMenu;
