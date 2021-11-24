import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMiddle from '../molecules/CardMiddle';
import tuningElements_1 from '../../../images/tuning_elements_1_off.svg';
import tuningElements_2 from '../../../images/tuning_elements_2_off.svg';
import tuningElements_3 from '../../../images/tuning_elements_3_off.svg';
import tuningElements_4 from '../../../images/tuning_elements_4_off.svg';
import GarageTuning from './GarageMenuTuning';

const useStyles = makeStyles({
  garageRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px',
     '@media screen and (max-width: 576px)': {
      marginTop: '0',
     },
  },
  garageCards: {
    display: 'flex',
    margin: '0 auto',
    '@media screen and (max-width: 576px)': {
      //width: '332px',
      height: '314px',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: '0 7px',
    },
  },
});

const cardMiddleArr = [
  {
    id: 1,
    image: tuningElements_1,
  },
  {
    id: 2,
    image: tuningElements_2,
  },
  {
    id: 3,
    image: tuningElements_3,
  },
  {
    id: 4,
    image: tuningElements_4,
  },
];

const GarageCards = () => {
  const classes = useStyles();
  return (
    <div className={classes.garageRight}>
      <div className={classes.garageCards}>
        {cardMiddleArr.map((el) => (
          <CardMiddle key={el.id} image={el.image} />
        ))}
      </div>

      <GarageTuning />
    </div>
  );
};

export default GarageCards;
