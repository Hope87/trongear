import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import garageElements from '../../../images/garage_elements-white-05.svg';
import GarageMenuMain from './GarageMenuMain';

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

const GarageMenuLeft = ({ garageNumber }) => {
  const classes = useStyles();

  return (
    <div className={classes.garageLeft}>
      <div className={classes.garageLeftHeader}>
        <h2>{garageNumber.title}</h2>
        <div className={classes.garageLeftHeaderItems}>
          <img src={garageElements} alt="" />
          <p>
            <span>0</span> TRX
          </p>
        </div>
      </div>

      <GarageMenuMain garageNumber={garageNumber} />
    </div>
  );
};

export default GarageMenuLeft;
