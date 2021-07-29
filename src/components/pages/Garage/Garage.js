import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './Garage.module.scss';
import Header from '../../UI/molecules/Header';
import logo from '../../../images/logo.png';
import GarageCards from '../../UI/organisms/GarageCards';
import Links from '../../UI/atoms/Links';
import linksImg from '../../../images/icons/panel-17.svg';
import GarageButtons from '../../UI/organisms/GarageButtons';
import GarageLeft from '../../UI/organisms/GarageLeft';

const Garage = () => {
  return (
    <div className={styles.garage}>
      <Grid container>
        <Grid item xs={12}>
          <Header headerLogo={logo} />
        </Grid>

        <Grid item xs={12}>
          <GarageButtons />
        </Grid>

        <Grid item xs={12} container>
          <Grid item xs={7}>
            <GarageLeft />
          </Grid>

          <Grid item xs={5}>
            <GarageCards />
          </Grid>
        </Grid>

        <Links images={linksImg} />
      </Grid>
    </div>
  );
};

export default Garage;
