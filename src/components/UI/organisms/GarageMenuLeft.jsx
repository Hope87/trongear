import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import garageElements from '../../../images/garage_elements-white-05.svg';
import GarageMenuMain from './GarageMenuMain';
import acura from '../../../images/cars/G_1_cars/off/1_acura.png';
import astonMartin from '../../../images/cars/G_1_cars/off/2_aston_martin.png';
import bmw from '../../../images/cars/G_1_cars/off/3_bmw.png';
import buick from '../../../images/cars/G_1_cars/off/4_buick.png';
import audi from '../../../images/cars/G_1_cars/off/5_audi.png';
import ferrari from '../../../images/cars/G_2_cars/off/1_ferrari.png';
import honda from '../../../images/cars/G_2_cars/off/2_honda.png';
import infinity from '../../../images/cars/G_2_cars/off/3_infinity.png';
import mercedes from '../../../images/cars/G_2_cars/off/3_mercedes.png';
import mitsubishi from '../../../images/cars/G_2_cars/off/5_mitsubishi.png';

const useStyles = makeStyles({
  garageLeft: {
    marginLeft: '110px',
    position: 'relative',
  },
  garageLeftHeader: {
    maxWidth: '1020px',
    height: '70px',
    marginTop: '30px',
    position: 'relative',
    backgroundColor: 'var(--red)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& h2': {
      marginLeft: '40px',
      color: 'var(--white)',
      fontFamily: 'Russo One',
      fontSize: '26px',
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
  },
  garageLeftHeaderItems: {
    width: '170px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: '20px',

    '& img': {
      width: '30px',
      height: '30px',
    },

    '& p': {
      color: 'var(--light)',
      fontFamily: 'Chakra Petch',
      fontSize: '24px',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
  },
});

const GarageMenuLeft = ({ info }) => {
  const classes = useStyles();

  const garageCars = [
    {
      name: 'Garage 1',
      car_1: acura,
      car_2: astonMartin,
      car_3: bmw,
      car_4: buick,
      car_5: audi,
    },
    {
      name: 'Garage 2',
      car_1: ferrari,
      car_2: honda,
      car_3: infinity,
      car_4: mercedes,
      car_5: mitsubishi,
    },
  ];

  return (
    <div className={classes.garageLeft}>
      <div className={classes.garageLeftHeader}>
        <h2>{info.title}</h2>
        <div className={classes.garageLeftHeaderItems}>
          <img src={garageElements} alt="" />
          <p>
            <span>0</span> TRX
          </p>
        </div>
      </div>

      <GarageMenuMain />
    </div>
  );
};

export default GarageMenuLeft;
