import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../UI/molecules/Header';
import styles from './Top.module.scss';
import logo from '../../../images/logo.png';
import Modal from '../../UI/molecules/Modal';
import Timer from '../../UI/atoms/Timer';
import Button from '../../UI/atoms/Button';
import buttonsImg from '../../../images/buttons-06.svg';
import TopPanel from '../../UI/molecules/TopPanel';

const headerPosition = {
  right: '3.5%',
};

const Top = ({ modal, setModal }) => {
  return (
    <div className={styles.top}>
      <Grid container>
        <Grid item xs={12}>
          <Header headerLogo={logo} headerModal={modal} setHeaderModal={setModal} languagePosition={headerPosition} />

          {modal && <Modal />}
        </Grid>

        <Grid item xs={12}>
          <div>
            <Timer />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.buttonsBox} style={{ marginTop: '-60px' }}>
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

        <Grid item xs={12}>
          <TopPanel />
        </Grid>
      </Grid>
    </div>
  );
};

export default Top;
