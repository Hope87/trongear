import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import styles from './Garage.module.scss';
import Header from '../../UI/molecules/Header';
import Timer from '../../UI/atoms/Timer';
import logo from '../../../images/logo.png';
import Modal from '../../UI/molecules/Modal';
import ButtonsBox from '../../UI/molecules/ButtonsBox';
import GarageCardOff from '../../UI/molecules/GarageCardOff';
import garage_1 from '../../../images/g_off_1.png';
import garage_2 from '../../../images/g_off_2.png';
import garage_3 from '../../../images/g_off_3.png';
import garage_4 from '../../../images/g_off_4.png';
import garage_5 from '../../../images/g_off_5.png';
import garage_1_on from '../../../images/G_1_on.png';
import garage_2_on from '../../../images/G_2_on.png';
import garage_3_on from '../../../images/G_3_on.png';
import garage_4_on from '../../../images/G_4_on.png';
import garage_5_on from '../../../images/G_5_on.png';

const Garage = ({ modal, setModal, onGarageMenuInformation }) => {
  const cardItems = [
    {
      id: 1,
      components: (
        <GarageCardOff
          imageOff={garage_1}
          cardTitleOff="buy"
          imageOn={garage_1_on}
          cardTitleOn="garage 1"
          onGarageMenuInformation={onGarageMenuInformation}
        />
      ),
    },
    {
      id: 2,
      components: (
        <GarageCardOff
          imageOff={garage_2}
          cardTitleOff="buy"
          imageOn={garage_2_on}
          cardTitleOn="garage 2"
          onGarageMenuInformation={onGarageMenuInformation}
        />
      ),
    },
    {
      id: 3,
      components: (
        <GarageCardOff
          imageOff={garage_3}
          cardTitleOff="buy"
          imageOn={garage_3_on}
          cardTitleOn="garage 3"
          onGarageMenuInformation={onGarageMenuInformation}
        />
      ),
    },
    {
      id: 4,
      components: (
        <GarageCardOff
          imageOff={garage_4}
          cardTitleOff="buy"
          imageOn={garage_4_on}
          cardTitleOn="garage 4"
          onGarageMenuInformation={onGarageMenuInformation}
        />
      ),
    },
    {
      id: 5,
      components: (
        <GarageCardOff
          imageOff={garage_5}
          cardTitleOff="buy"
          imageOn={garage_5_on}
          cardTitleOn="garage 5"
          onGarageMenuInformation={onGarageMenuInformation}
        />
      ),
    },
  ];

  return (
    <div className={styles.garage}>
      <Grid container>
        <Grid item xs={12}>
          <Header headerLogo={logo} headerModal={modal} setHeaderModal={setModal} />

          {modal && <Modal />}
        </Grid>

        <Grid item xs={12}>
          {!modal ? (
            <div className={styles.garageTimer}>
              <Timer />
            </div>
          ) : (
            <div style={{ opacity: 0 }} className={styles.garageTimer}>
              <Timer />
            </div>
          )}
        </Grid>

        <Grid item xs={12}>
          <div className={styles.garageBtn}>
            <ButtonsBox />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.garageCardsOff}>
            {cardItems.map((el) => (
              <Link key={el.id} to={`/garageMenu/${el.id}`}>
                <div>{el.components}</div>
              </Link>
            ))}
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.garageFooter}>
            <div className={styles.garageText}>
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

export default Garage;
