import React, { useState } from 'react';
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
import AboutCardOff from '../../UI/molecules/AboutCardOff';
import garage_1 from '../../../images/garage_1.png';
import garage_2 from '../../../images/garage_2.png';
import garage_3 from '../../../images/garage_3.png';
import garage_4 from '../../../images/garage_4.png';
import garage_5 from '../../../images/garage_5.png';

const cardItems = [
  {
    id: 1,
    image: garage_1,
    components: [<AboutCardOff image={garage_1} />, <AboutCard title="garage 1" car={bmw} background={g_1} />],
  },
  {
    id: 2,
    image: garage_2,
    components: [<AboutCardOff image={garage_2} />, <AboutCard title="garage 1" car={acura} background={g_2} />],
  },
  {
    id: 3,
    image: garage_3,
    components: [<AboutCardOff image={garage_3} />, <AboutCard title="garage 1" car={astonMartin} background={g_3} />],
  },
  {
    id: 4,
    image: garage_4,
    components: [<AboutCardOff image={garage_4} />, <AboutCard title="garage 1" car={buick} background={g_4} />],
  },
  {
    id: 5,
    image: garage_5,
    components: [<AboutCardOff image={garage_5} />, <AboutCard title="garage 1" car={audi} background={g_5} />],
  },
];

const About = ({ modal, setModal }) => {
  const [activeGarage, setActiveGarage] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  const onHover = (id) => {
    setActiveGarage((prev) => ({ ...prev, [id]: false }));
  };

  const onLeaveContainer = (id) => {
    setActiveGarage((prev) => ({ ...prev, [id]: true }));
  };

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
          <div className={styles.aboutBtn}>
            <ButtonsBox />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.aboutCardsOff}>
            {cardItems.map((el) => (
              <div onMouseEnter={() => onHover(el.id)} key={el.id} onMouseLeave={() => onLeaveContainer(el.id)}>
                {activeGarage[el.id] ? el.components[0] : el.components[1]}
              </div>
            ))}
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
