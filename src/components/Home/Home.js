import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './Home.module.scss';
import Btn from '../Buttons/BtnGarage';
import Timer from '../Timer/Timer';

import btnYellow from '../../images/buttons/buttons-06.svg';

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1 className={styles.h1}>Hello First Page</h1>
      </Grid>

      <Grid item xl={12} md={4}>
        <h2 className={styles.one}>One</h2>
      </Grid>

      <Grid item xl={12} md={4}>
        <h2 className={styles.two}>Two</h2>
      </Grid>

      <Grid item xl={12} md={4}>
        <h2 className={styles.three}>Three</h2>
      </Grid>

      <Btn title="garage" image={btnYellow} />
      <Btn title="top" image={btnYellow} />
      <Btn title="ga" image={btnYellow} />
      <Btn title="ttttttg" image={btnYellow} />

      <Timer />
    </Grid>
  );
};

export default Home;
