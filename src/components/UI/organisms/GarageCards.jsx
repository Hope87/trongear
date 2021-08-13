import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMiddle from '../molecules/CardMiddle';
import tuningElements_1 from '../../../images/tuning_elements_1_off.svg';
import tuningElements_2 from '../../../images/tuning_elements_2_off.svg';
import tuningElements_3 from '../../../images/tuning_elements_3_off.svg';
import tuningElements_4 from '../../../images/tuning_elements_4_off.svg';
import GarageTuning from './GarageTuning';

const useStyles = makeStyles({
  garageRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px',
  },
  garageCards: {
    display: 'flex',
    margin: '0 auto',
  },
});

const GarageCards = () => {
  const classes = useStyles();
  return (
    <div className={classes.garageRight}>
      <div className={classes.garageCards}>
        <CardMiddle image={tuningElements_1} />
        <CardMiddle image={tuningElements_2} />
        <CardMiddle image={tuningElements_3} />
        <CardMiddle image={tuningElements_4} />
      </div>

      <GarageTuning />
    </div>
  );
};

export default GarageCards;
